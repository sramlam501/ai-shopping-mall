'use client'
import { useState } from 'react'

type Product = { name: string; shade?: string; link: string }

export default function BeautyPage() {
  const [tone, setTone] = useState('neutral')
  const [skin, setSkin] = useState('normal')
  const [fileName, setFileName] = useState<string | null>(null)
  const [recs, setRecs] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // MOCK – replace with skin analysis later
    setTimeout(() => {
      setRecs([
        { name: 'Foundation (medium coverage)', shade: tone, link: '#' },
        { name: 'Blush (soft coral)', link: '#' },
        { name: 'Lip tint (rosy beige)', link: '#' },
        { name: 'Skincare: gentle cleanser + niacinamide serum', link: '#' },
      ])
      setLoading(false)
    }, 700)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-4xl text-gold">Beauty Plaza</h1>
      <p className="text-white/80 mt-2">Face scan → tone + type → product matches. Try-on comes next.</p>

      <form onSubmit={analyze} className="card p-6 mt-8 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <label className="text-sm text-white/70">Upload selfie</label>
          <input type="file" accept="image/*"
                 onChange={(e)=> setFileName(e.target.files?.[0]?.name ?? null)}
                 className="mt-1 w-full text-sm file:mr-4 file:rounded-xl2 file:border-0 file:bg-gold file:text-black file:px-3 file:py-2 file:cursor-pointer"/>
          {fileName && <div className="text-white/60 mt-1">Selected: {fileName}</div>}
        </div>
        <div>
          <label className="text-sm text-white/70">Undertone</label>
          <select value={tone} onChange={e=>setTone(e.target.value)}
                  className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none">
            <option value="cool">Cool</option>
            <option value="neutral">Neutral</option>
            <option value="warm">Warm</option>
            <option value="olive">Olive</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-white/70">Skin type</label>
          <select value={skin} onChange={e=>setSkin(e.target.value)}
                  className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none">
            <option>normal</option><option>dry</option><option>oily</option><option>combination</option><option>sensitive</option>
          </select>
        </div>
        <div className="md:col-span-3 flex justify-end">
          <button className="px-6 py-2 rounded-xl2 bg-gold text-black font-medium hover:brightness-110 transition">
            {loading ? 'Analyzing…' : 'Get matches'}
          </button>
        </div>
      </form>

      {recs && (
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {recs.map((p, i)=>(
            <a key={i} href={p.link} className="card p-5 hover:border-gold">
              <div className="font-serif text-xl text-gold">{p.name}</div>
              <div className="text-white/70 mt-1">
                {p.shade ? `Suggested shade: ${p.shade}` : 'Matched to your profile'}
              </div>
              <div className="text-gold mt-2">Shop →</div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
