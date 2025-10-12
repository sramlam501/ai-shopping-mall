export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import type { NextRequest } from "next/server";
const API_BASE = process.env.API_BASE_URL ?? "http://127.0.0.1:8000";

export async function GET(req: NextRequest){
const upstream = new URL(`${API_BASE}/api/products`);
const sp = new URL(req.url).searchParams; sp.forEach((v,k)=>upstream.searchParams.set(k,v));
const r = await fetch(upstream, { cache:"no-store" });
return new Response(await r.text(), { status:r.status, headers:{ "content-type":"application/json"} });
}

