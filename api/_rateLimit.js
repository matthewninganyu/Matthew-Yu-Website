import crypto from "node:crypto";

const SUPABASE_REST_HEADERS = {
  "Content-Type": "application/json",
  "Prefer": "return=minimal",
};

export function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.trim()) {
    return realIp.trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

export async function checkRateLimit(req, scope, windows) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SECRET_KEY;
  const salt = process.env.RATE_LIMIT_SALT;

  if (!supabaseUrl || !serviceKey || !salt) {
    throw new Error("Missing Supabase rate-limit configuration");
  }

  const subjectHash = crypto
    .createHash("sha256")
    .update(`${salt}:${getClientIp(req)}`)
    .digest("hex");

  const tableUrl = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/rate_limit_events`;
  const authHeaders = {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
  };

  for (const window of windows) {
    const since = new Date(Date.now() - window.windowMs).toISOString();
    const url = new URL(tableUrl);
    url.searchParams.set("select", "id");
    url.searchParams.set("scope", `eq.${scope}`);
    url.searchParams.set("subject_hash", `eq.${subjectHash}`);
    url.searchParams.set("created_at", `gte.${since}`);

    const response = await fetch(url.toString(), {
      method: "HEAD",
      headers: {
        ...authHeaders,
        Prefer: "count=exact",
      },
    });

    if (!response.ok) {
      throw new Error(`Rate-limit count failed: ${response.status}`);
    }

    const count = parseContentRangeCount(response.headers.get("content-range"));
    if (count >= window.limit) {
      return {
        limited: true,
        retryAfterSeconds: Math.max(1, Math.ceil(window.windowMs / 1000)),
        message: window.message,
      };
    }
  }

  const insertResponse = await fetch(tableUrl, {
    method: "POST",
    headers: {
      ...authHeaders,
      ...SUPABASE_REST_HEADERS,
    },
    body: JSON.stringify({
      scope,
      subject_hash: subjectHash,
    }),
  });

  if (!insertResponse.ok) {
    throw new Error(`Rate-limit insert failed: ${insertResponse.status}`);
  }

  return { limited: false };
}

function parseContentRangeCount(contentRange) {
  if (!contentRange) return 0;

  const match = contentRange.match(/\/(\d+)$/);
  return match ? Number(match[1]) : 0;
}
