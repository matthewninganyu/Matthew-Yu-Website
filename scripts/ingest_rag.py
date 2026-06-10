#!/usr/bin/env python3
"""Build and upload Matthew Yu portfolio RAG chunks to Qdrant.

Required environment variables:
  OPENAI_API_KEY
  QDRANT_URL
  QDRANT_API_KEY

Optional:
  QDRANT_COLLECTION=portfolio_chunks
  OPENAI_EMBEDDING_MODEL=text-embedding-3-small
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
import uuid
import zipfile
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from xml.etree import ElementTree as ET

try:
    import pypdf
except ImportError:  # pragma: no cover - developer setup guard
    pypdf = None


ROOT = Path(__file__).resolve().parents[1]
COLLECTION = os.environ.get("QDRANT_COLLECTION", "portfolio_chunks")
EMBEDDING_MODEL = os.environ.get("OPENAI_EMBEDDING_MODEL", "text-embedding-3-small")
VECTOR_SIZE = 1536
CHUNK_WORD_TARGET = 560
CHUNK_OVERLAP = 80


@dataclass
class Source:
    path: str
    project: str
    title: str
    content_type: str


@dataclass
class Chunk:
    id: str
    project: str
    title: str
    source_file: str
    section_title: str
    content_type: str
    text: str
    updated_at: str


SOURCES = [
    Source("SCORESHIFT_CODEBASE_OVERVIEW.md", "scoreshift", "ScoreShift", "markdown"),
    Source("score-shift-lessons.md", "scoreshift", "ScoreShift Lessons", "markdown"),
    Source("HAVENIQ_HVAC_MODEL_CODEBASE_OVERVIEW.md", "hvac-model", "HavenIQ HVAC Confidence Model", "markdown"),
    Source("HAVENIQ_RAG_CODEBASE_OVERVIEW.md", "hvac-rag", "HavenIQ HVAC RAG System", "markdown"),
    Source("OTHELLO_ALPHAZERO_CODEBASE_OVERVIEW.md", "othello-az", "AlphaZero-Style Othello Engine", "markdown"),
    Source("haveniq-lessons.md", "general", "HavenIQ Engineering Lessons", "markdown"),
    Source("Firefighter bot/Firefighter Bot Proposal.docx", "firefighter-bot", "Firefighter Bot Proposal", "docx"),
    Source("Matthew_Yu_Resume.pdf", "general", "Matthew Yu Resume", "pdf"),
    Source("index.html", "general", "About Page", "about-html"),
]


class AboutTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.in_about = False
        self.depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)
        if tag == "section" and attrs_dict.get("id") == "grid-about":
            self.in_about = True
            self.depth = 1
            return
        if self.in_about:
            self.depth += 1

    def handle_endtag(self, tag: str) -> None:
        if self.in_about:
            self.depth -= 1
            if self.depth <= 0:
                self.in_about = False

    def handle_data(self, data: str) -> None:
        if self.in_about:
            cleaned = " ".join(data.split())
            if cleaned:
                self.parts.append(cleaned)


def main() -> int:
    parser = argparse.ArgumentParser(description="Ingest portfolio chunks into Qdrant.")
    parser.add_argument("--dry-run", action="store_true", help="Print chunk summary without embedding or uploading.")
    parser.add_argument("--limit", type=int, default=0, help="Only process the first N chunks.")
    args = parser.parse_args()

    load_dotenv(ROOT / ".env.local")
    load_dotenv(ROOT / ".env")

    chunks = build_chunks()
    if args.limit:
      chunks = chunks[: args.limit]

    print(f"Prepared {len(chunks)} chunks for collection '{COLLECTION}'.")
    for chunk in chunks:
        print(f"- {chunk.project:16} {chunk.source_file:45} {chunk.section_title[:56]}")

    if args.dry_run:
        return 0

    require_env("OPENAI_API_KEY", "QDRANT_URL", "QDRANT_API_KEY")
    ensure_collection()
    upsert_chunks(chunks)
    print(f"Uploaded {len(chunks)} chunks to Qdrant collection '{COLLECTION}'.")
    return 0


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def require_env(*names: str) -> None:
    missing = [name for name in names if not os.environ.get(name)]
    if missing:
        raise SystemExit(f"Missing required environment variables: {', '.join(missing)}")


def build_chunks() -> list[Chunk]:
    chunks: list[Chunk] = []
    updated_at = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    for source in SOURCES:
        path = ROOT / source.path
        if not path.exists():
            print(f"Skipping missing source: {source.path}", file=sys.stderr)
            continue

        sections = group_small_sections(extract_sections(path, source.content_type))
        for section_title, text in sections:
            for part_index, chunk_text in enumerate(split_words(clean_text(text))):
                section = section_title or source.title
                if part_index:
                    section = f"{section} (part {part_index + 1})"
                chunk_id = stable_chunk_id(source.path, source.project, section, part_index, chunk_text)
                chunks.append(
                    Chunk(
                        id=chunk_id,
                        project=source.project,
                        title=source.title,
                        source_file=source.path.replace("\\", "/"),
                        section_title=section,
                        content_type=source.content_type,
                        text=chunk_text,
                        updated_at=updated_at,
                    )
                )

    return chunks


def extract_sections(path: Path, content_type: str) -> list[tuple[str, str]]:
    if content_type == "markdown":
        return markdown_sections(path.read_text(encoding="utf-8", errors="replace"))
    if content_type == "docx":
        return [("Proposal", extract_docx(path))]
    if content_type == "pdf":
        return [("Resume", extract_pdf(path))]
    if content_type == "about-html":
        return [("About Page", extract_about_html(path))]
    raise ValueError(f"Unsupported source type: {content_type}")


def markdown_sections(text: str) -> list[tuple[str, str]]:
    sections: list[tuple[str, list[str]]] = []
    current_title = "Overview"
    current_lines: list[str] = []

    for line in text.splitlines():
        heading = re.match(r"^(#{1,3})\s+(.+?)\s*$", line)
        if heading and current_lines:
            sections.append((current_title, current_lines))
            current_lines = []
        if heading:
            current_title = heading.group(2).strip("` ")
        current_lines.append(line)

    if current_lines:
        sections.append((current_title, current_lines))

    return [(title, "\n".join(lines)) for title, lines in sections if "\n".join(lines).strip()]


def extract_docx(path: Path) -> str:
    with zipfile.ZipFile(path) as archive:
        xml = archive.read("word/document.xml")
    root = ET.fromstring(xml)
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    paragraphs: list[str] = []
    for paragraph in root.findall(".//w:p", ns):
        text = "".join(node.text or "" for node in paragraph.findall(".//w:t", ns)).strip()
        if text:
            paragraphs.append(text)
    return "\n".join(paragraphs)


def extract_pdf(path: Path) -> str:
    if pypdf is None:
        raise SystemExit("pypdf is required to extract PDFs. Use the bundled Codex Python runtime or install pypdf.")
    reader = pypdf.PdfReader(str(path))
    return "\n".join(page.extract_text() or "" for page in reader.pages)


def extract_about_html(path: Path) -> str:
    parser = AboutTextParser()
    parser.feed(path.read_text(encoding="utf-8", errors="replace"))
    return "\n".join(parser.parts)


def clean_text(text: str) -> str:
    text = re.sub(r"```.*?```", " ", text, flags=re.S)
    text = re.sub(r"\|", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def split_words(text: str) -> Iterable[str]:
    words = text.split()
    if not words:
        return []
    if len(words) <= CHUNK_WORD_TARGET:
        return [" ".join(words)]

    chunks = []
    step = CHUNK_WORD_TARGET - CHUNK_OVERLAP
    for start in range(0, len(words), step):
        part = words[start : start + CHUNK_WORD_TARGET]
        if len(part) < 90 and chunks:
            chunks[-1] = f"{chunks[-1]} {' '.join(part)}"
        else:
            chunks.append(" ".join(part))
    return chunks


def group_small_sections(sections: list[tuple[str, str]]) -> list[tuple[str, str]]:
    grouped: list[tuple[str, str]] = []
    title_parts: list[str] = []
    text_parts: list[str] = []
    word_count = 0
    soft_min = int(CHUNK_WORD_TARGET * 0.7)
    hard_max = int(CHUNK_WORD_TARGET * 1.2)

    def flush() -> None:
        nonlocal title_parts, text_parts, word_count
        if text_parts:
            title = " / ".join(title_parts[:3])
            if len(title_parts) > 3:
                title += " / ..."
            grouped.append((title, "\n\n".join(text_parts)))
        title_parts = []
        text_parts = []
        word_count = 0

    for title, text in sections:
        words = text.split()
        section_words = len(words)

        if section_words >= soft_min:
            flush()
            grouped.append((title, text))
            continue

        if text_parts and word_count + section_words > hard_max:
            flush()

        title_parts.append(title)
        text_parts.append(text)
        word_count += section_words

        if word_count >= soft_min:
            flush()

    flush()
    return grouped


def stable_chunk_id(source_file: str, project: str, section: str, part_index: int, text: str) -> str:
    digest = hashlib.sha256(f"{source_file}|{project}|{section}|{part_index}|{text[:400]}".encode("utf-8")).hexdigest()
    return str(uuid.UUID(digest[:32]))


def ensure_collection() -> None:
    url = f"{qdrant_base_url()}/collections/{COLLECTION}"
    try:
        request_json("GET", url)
        return
    except RuntimeError as error:
        if "failed with 404" not in str(error):
            raise

    body = {"vectors": {"size": VECTOR_SIZE, "distance": "Cosine"}}
    request_json("PUT", url, body)


def upsert_chunks(chunks: list[Chunk]) -> None:
    batch_size = 32
    for start in range(0, len(chunks), batch_size):
        batch = chunks[start : start + batch_size]
        texts = [chunk.text for chunk in batch]
        embeddings = embed_texts(texts)
        points = []
        for chunk, vector in zip(batch, embeddings):
            points.append(
                {
                    "id": chunk.id,
                    "vector": vector,
                    "payload": {
                        "project": chunk.project,
                        "title": chunk.title,
                        "source_file": chunk.source_file,
                        "section_title": chunk.section_title,
                        "content_type": chunk.content_type,
                        "text": chunk.text,
                        "updated_at": chunk.updated_at,
                    },
                }
            )
        request_json("PUT", f"{qdrant_base_url()}/collections/{COLLECTION}/points?wait=true", {"points": points})
        print(f"Uploaded batch {start + 1}-{start + len(batch)}")


def embed_texts(texts: list[str]) -> list[list[float]]:
    response = request_json(
        "POST",
        "https://api.openai.com/v1/embeddings",
        {"model": EMBEDDING_MODEL, "input": texts},
        headers={"Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}"},
    )
    data = response.get("data", [])
    data.sort(key=lambda item: item["index"])
    return [item["embedding"] for item in data]


def qdrant_base_url() -> str:
    return os.environ["QDRANT_URL"].rstrip("/")


def request_json(method: str, url: str, body: dict | None = None, headers: dict[str, str] | None = None) -> dict:
    merged_headers = {"Content-Type": "application/json", **(headers or {})}
    if "qdrant" in url.lower():
        merged_headers["api-key"] = os.environ["QDRANT_API_KEY"]
    request = urllib.request.Request(
        url,
        data=json.dumps(body).encode("utf-8") if body is not None else None,
        headers=merged_headers,
        method=method,
    )
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            raw = response.read().decode("utf-8")
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"{method} {url} failed with {error.code}: {detail}") from error


if __name__ == "__main__":
    raise SystemExit(main())
