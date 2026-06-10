const OPENAI_EMBEDDING_MODEL = process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small";
const QDRANT_COLLECTION = process.env.QDRANT_COLLECTION || "portfolio_chunks";
const RAG_CHUNK_LIMIT = 6;
const RAG_CONTEXT_CHAR_LIMIT = 5200;

export async function retrievePortfolioContext(query) {
  if (!isRagConfigured() || !query || !query.trim()) {
    return [];
  }

  try {
    const embedding = await embedText(query.trim());
    const response = await fetch(
      `${process.env.QDRANT_URL.replace(/\/$/, "")}/collections/${encodeURIComponent(QDRANT_COLLECTION)}/points/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.QDRANT_API_KEY,
        },
        body: JSON.stringify({
          vector: embedding,
          limit: RAG_CHUNK_LIMIT,
          with_payload: true,
          with_vector: false,
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Qdrant search failed: ${response.status} ${detail}`);
    }

    const data = await response.json();
    return (data.result || [])
      .map((match) => ({
        score: match.score,
        project: match.payload?.project || "general",
        title: match.payload?.title || "Portfolio context",
        sourceFile: match.payload?.source_file || "unknown",
        sectionTitle: match.payload?.section_title || "",
        text: match.payload?.text || "",
      }))
      .filter((chunk) => chunk.text.trim() !== "");
  } catch (error) {
    console.warn("RAG retrieval unavailable:", error);
    return [];
  }
}

export function formatRetrievedContext(chunks) {
  if (!chunks.length) {
    return "";
  }

  let output = "";
  chunks.forEach((chunk, index) => {
    const header = [
      `Source ${index + 1}`,
      `project: ${chunk.project}`,
      `title: ${chunk.title}`,
      chunk.sectionTitle ? `section: ${chunk.sectionTitle}` : "",
      `file: ${chunk.sourceFile}`,
      Number.isFinite(chunk.score) ? `score: ${chunk.score.toFixed(3)}` : "",
    ].filter(Boolean).join(" | ");
    const block = `${header}\n${chunk.text.trim()}\n\n`;

    if ((output + block).length <= RAG_CONTEXT_CHAR_LIMIT) {
      output += block;
    }
  });

  return output.trim();
}

function isRagConfigured() {
  return Boolean(
    process.env.OPENAI_API_KEY &&
    process.env.QDRANT_URL &&
    process.env.QDRANT_API_KEY &&
    QDRANT_COLLECTION
  );
}

async function embedText(text) {
  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_EMBEDDING_MODEL,
      input: text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI embedding failed: ${response.status} ${detail}`);
  }

  const data = await response.json();
  const embedding = data.data?.[0]?.embedding;
  if (!Array.isArray(embedding)) {
    throw new Error("OpenAI embedding response did not include an embedding");
  }

  return embedding;
}
