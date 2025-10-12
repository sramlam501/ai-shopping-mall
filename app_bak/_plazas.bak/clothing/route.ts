export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import type { NextRequest } from "next/server";
const API = process.env.API_BASE_URL ?? "http://127.0.0.1:8000";

export async function GET(req: NextRequest) {
  const dest = new URL("/api/cloth/outfits", API);
  new URL(req.url).searchParams.forEach((v, k) => dest.searchParams.set(k, v));
  const res = await fetch(dest.toString(), { cache: "no-store" });
  const text = await res.text();
  return new Response(text, { status: res.status, headers: { "content-type": "application/json" } });
}
