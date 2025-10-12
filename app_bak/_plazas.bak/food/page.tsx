'use client'
import { useState } from 'react'

type Result = { name: string; price: string; note: string; map?: string }

export default function FoodPage() {
  const [budget, setBudget] = useState('20')
  const [query, setQuery] = useState('spicy noodles')
  const [location, setLocation] = useState('Zurich')
  const [results, setResults] = useState<Result[] | null>(null)
  const [loading, setLoading] = useState(false)

  const search = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // MOCK RESULTS – replace later with Places API
    setTimeout(() => {
      setResults([
        { name: 'Kimchi House', price: 'CHF 18.50', note: 'Spicy ramen set', map: 'https://maps.google.com' },
        { name: 'Szechuan Corner', price: 'CHF 19.90', note: 'Chongqing noodles', map: 'https://maps.google.com' },
        { name: 'Thai Glow', price: 'CHF 17.80', note: 'Tom Yum + rice', map: 'https://maps.google.com' },
      ])
      setLoading(false)
    }, 700)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-4xl text-gold">Food Plaza</h1>
      <p className="text-white/80 mt-2">Find meals within your budget and vibe. Ordering integration comes next.</p>

      <form onSubmit={search} className="card p-6 mt-8 grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-white/70">Budget (CHF)</label>
          <input value={budget} onChange={e=>setBudget(e.target.value)}
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-gold" />
        </div>
        <div>
          <label className="text-sm text-white/70">Craving / Keywords</label>
          <input value={query} onChange={e=>setQuery(e.target.value)}
                 placeholder="spicy, vegan, sushi…" 
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-gold" />
        </div>
        <div>
          <label className="text-sm text-white/70">Location / City</label>
          <input value={location} onChange={e=>setLocation(e.target.value)}
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-gold" />
        </div>
        <div className="md:col-span-3 flex justify-end">
