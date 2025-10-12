"use client";
import React, { useState } from "react";

type Product = { id:string; title:string; image:string; price:number; currency:string; redirectPath?:string; offerUrl?:string; subcategory?:string; };
type ApiResponse = { items: Product[] };

export default function Outfits() {
  const [q,setQ] = useState("");
  const [items,setItems] = useState<Product[]>([]);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState<string|null>(null);

  async function run(e?:React.FormEvent) {
    e?.preventDefault();
    if (!q.trim()) return;
    setLoading(true); setErr(null);
    try{
      const res = await fetch(`/api/cloth/outfits?q=${encodeURIComponent(q)}`, {cache:"no-store"});
      if(!res.ok) throw new Error(`Server ${res.status}`);
      const data:ApiResponse = await res.json();
      setItems(data.items);
    }catch(e:any){ setErr(e.message || "Failed"); } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <a href="/cloth" className="text-sm text-neutral-500 hover:underline">← Back to Cloth</a>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">AI Outfit Suggestion</h1>
        <p className="mt-1 text-neutral-600">Type a vibe, occasion, colors, or budget (e.g., “y2k party under 40 black”).</p>

        <form onSubmit={run} className="mt-5 flex items-center gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="your vibe..." className="flex-1 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm"/>
          <button type="submit" className="rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white">Suggest</button>
        </form>

        {err && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{err}</div>}

        <div className={`mt-6 grid gap-5 ${items.length?"grid-cols-2 md:grid-cols-3":"grid-cols-1"}`}>
          {loading && Array.from({length:6}).map((_,i)=>(
            <div key={i} className="animate-pulse rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
              <div className="aspect-square rounded-xl bg-neutral-100" />
              <div className="mt-3 h-4 w-3/4 rounded bg-neutral-100" />
            </div>
          ))}
          {!loading && !items.length && <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center text-neutral-600 shadow-sm">Try “y2k party under 40 black”.</div>}
          {items.map(p=> <Card key={p.id} p={p}/>)}
        </div>
      </div>
    </div>
  );
}

function Card({p}:{p:Product}) {
  const href = p.redirectPath || p.offerUrl || "#";
  return (
    <div className="group rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 hover:shadow-md">
      <a href={href} target={href.startsWith("http")?"_blank":undefined} className="block">
        <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
          <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"/>
        </div>
        <div className="mt-3">
          <h3 className="line-clamp-2 text-sm font-medium leading-snug">{p.title}</h3>
        </div>
      </a>
    </div>
  );
}

