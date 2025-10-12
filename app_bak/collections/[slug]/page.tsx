import { getJSON } from "@/lib/api";
import ProductCard from "@components/ui/ProductCard";

type Product = { id:string; title:string; image:string; price:number; currency:string; brand:string };

const SLUG_TO_QUERY: Record<string, Record<string,string>> = {
"y2k-winter": { q: "y2k winter" },
"streetwear-hoodies": { q: "streetwear hoodie" },
"clean-girl-basics": { q: "clean girl" },
"cozy-neutrals": { q: "beige cream knit" },
"silver-core": { q: "silver metallic" },
"k-teen": { q: "korean teen" }
};

export async function generateMetadata({ params }: { params:{slug:string} }) {
const title = params.slug.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());
return {
title: `${title} — AI Shopping Mall`,
description: `Shop the ${title} collection curated by our AI.`,
alternates: { canonical: `/collections/${params.slug}` },
openGraph: { title, type: "website" }
};
}

export default async function CollectionPage({ params }: { params:{slug:string} }) {
const query = SLUG_TO_QUERY[params.slug] || { q: params.slug };
const items = await getJSON<Product[]>("/products", query);

return (
<main className="mx-auto max-w-6xl px-4 py-8">
<h1 className="text-3xl font-semibold capitalize">{params.slug.replace(/-/g," ")}</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
{items.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</main>
);
}
