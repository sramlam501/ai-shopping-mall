"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = {
id: string;
title: string;
brand?: string;
image: string;
price: number;
currency?: string;
category?: string;
redirectPath?: string; // e.g. /r/xyz (your affiliate redirect)
offerUrl?: string; // fallback direct url if no redirect
tags?: string[];
};

async function fetchById(id: string): Promise<Item | null> {
// Try dedicated endpoint first
let res = await fetch(`/api/products/${id}`, { cache: "no-store" });
if (res.ok) return res.json();

// Fallback: search query (your list endpoint supports ?q=)
res = await fetch(`/api/products?q=${encodeURIComponent(id)}`, { cache: "no-store" });
const data = await res.json().catch(() => ({}));
return data?.items?.[0] ?? null;
}

async function fetchSimilar(seed: Item, limit = 8): Promise<Item[]> {
const qs = new URLSearchParams();
if (seed.category) qs.set("category", seed.category);
// Light diversity by price window
if (seed.price) {
qs.set("min", Math.max(0, Math.floor(seed.price * 0.6)).toString());
qs.set("max", Math.ceil(seed.price * 1.4).toString());
}
const res = await fetch(`/api/products?${qs.toString()}`, { cache: "no-store" });
const data = await res.json().catch(() => ({}));
const items: Item[] = data?.items ?? [];
return items.filter(p => p.id !== seed.id).slice(0, limit);
}

export default function ProductPage({ params }: { params: { id: string } }) {
const [item, setItem] = useState<Item | null>(null);
const [similar, setSimilar] = useState<Item[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
let mounted = true;
(async () => {
setLoading(true);
const prod = await fetchById(params.id);
if (!mounted) return;
setItem(prod);
if (prod) setSimilar(await fetchSimilar(prod));
setLoading(false);
})();
return () => { mounted = false; };
}, [params.id]);

const buyHref = useMemo(() => {
if (!item) return "#";
// Prefer your redirect endpoint for affiliate tracking
if (item.redirectPath) return item.redirectPath;
if (item.offerUrl) return item.offerUrl;
return "#";
}, [item]);

if (loading) {
return (
<div className="mx-auto max-w-6xl px-6 py-10">
<div className="grid md:grid-cols-2 gap-10">
<div className="aspect-square w-full rounded-2xl bg-neutral-100 animate-pulse" />
<div>
<div className="h-8 w-2/3 bg-neutral-100 rounded animate-pulse mb-4" />
<div className="h-4 w-1/3 bg-neutral-100 rounded animate-pulse mb-3" />
<div className="h-6 w-24 bg-neutral-100 rounded animate-pulse mb-6" />
<div className="h-11 w-40 bg-neutral-100 rounded animate-pulse" />
</div>
</div>
</div>
);
}

if (!item) return <div className="p-10">Product not found.</div>;

return (
<div className="mx-auto max-w-6xl px-6 py-10">
{/* Header crumb */}
<div className="mb-6 text-sm text-neutral-500">
<Link href="/cloth" className="underline hover:opacity-80">← Back to Cloth</Link>
</div>

{/* Top section */}
<div className="grid md:grid-cols-2 gap-10">
<div>
<img
src={item.image}
alt={item.title}
className="w-full rounded-2xl shadow-sm border object-cover"
/>
</div>

<div>
<h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
{item.brand ? <p className="mt-2 text-neutral-600">{item.brand}</p> : null}
<p className="mt-4 text-2xl font-bold">
{item.price?.toFixed ? item.price.toFixed(2) : item.price} {item.currency ?? ""}
</p>

<a
href={buyHref}
target="_blank"
rel="noopener noreferrer"
className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-black/90"
>
Shop now
</a>

{/* meta */}
<div className="mt-6 text-sm text-neutral-500">
{item.category ? <span>Category: {item.category}</span> : null}
{item.tags?.length ? (
<div className="mt-2 flex flex-wrap gap-2">
{item.tags.map(t => (
<span key={t} className="rounded-full bg-neutral-100 px-3 py-1">{t}</span>
))}
</div>
) : null}
</div>
</div>
</div>

{/* Similar */}
{similar.length ? (
<>
<h2 className="mt-14 mb-4 text-xl font-semibold">Similar items</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{similar.map(p => (
<Link
key={p.id}
href={`/cloth/p/${p.id}`}
className="group rounded-2xl border bg-white p-3 hover:shadow-sm"
>
<div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-50">
<img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
</div>
<p className="mt-3 line-clamp-2 text-sm">{p.title}</p>
<p className="mt-1 text-sm font-medium">
{p.price}{p.currency ? ` ${p.currency}` : ""}
</p>
</Link>
))}
</div>
</>
) : null}
</div>
);
}