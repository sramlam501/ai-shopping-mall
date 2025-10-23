// /app/go/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { productBySlug } from "@/data/products";
import { withAffiliate } from "@/lib/affiliates";
import fs from "node:fs/promises";

// Force Node runtime — needed for writing to /tmp
export const runtime = "nodejs";

export async function GET(req: NextRequest, ctx: { params: { slug: string } }) {
  try {
    const { slug } = ctx.params;
    const search = req.nextUrl.searchParams;
    const src = search.get("src") || undefined;
    const plaza = search.get("plaza") || undefined;
    const uid = search.get("uid") || undefined;
    const campaign = search.get("campaign") || undefined;

    const product = productBySlug.get(slug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const finalUrl = withAffiliate(product.url, { src, plaza, uid, campaign });

    // Log to /tmp (works in dev & many serverless envs)
    const line = JSON.stringify({
      ts: Date.now(),
      uid: uid || null,
      product_id: product.id,
      slug,
      src: src || null,
      plaza: plaza || null,
      finalUrl,
    }) + "\n";

    try {
      await fs.appendFile("/tmp/clicks.log", line, "utf8");
    } catch (_) {
      // ignore logging errors
    }

    return NextResponse.redirect(finalUrl, 302);
  } catch (err) {
    return NextResponse.json({ error: "Redirect error" }, { status: 500 });
  }
}
