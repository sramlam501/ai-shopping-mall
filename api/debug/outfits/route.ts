// /app/api/debug/outfits/route.ts
import { NextRequest, NextResponse } from "next/server";
import { buildOutfits } from "@/lib/outfit/rules";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const undertone = (url.searchParams.get("undertone") || "neutral") as any;
  const bodyShape = (url.searchParams.get("shape") || "rectangle") as any;
  const vibe = url.searchParams.get("vibe") || "Minimal";
  const gender = (url.searchParams.get("gender") || "unisex") as any;
  const budget = url.searchParams.get("budget")
    ? Number(url.searchParams.get("budget"))
    : undefined;

  const sets = buildOutfits({ undertone, bodyShape, vibe, gender, budget });
  return NextResponse.json(sets);
}
