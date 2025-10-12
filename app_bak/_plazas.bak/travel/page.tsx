'use client'
import { useState } from 'react'

type Itin = { day: string; plan: string }
type Result = { destination: string; hotel: string; flight: string; total: string; days: Itin[] }

export default function TravelPage() {
  const [budget, setBudget] = useState('600')
  const [vibe, setVibe] = useState('City + food')
  const [from, setFrom] = useState('Zurich')
  const [to, setTo] = useState('Lisbon')
  const [res, setRes] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)

  const plan = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // MOCK – replace later with real APIs (Skyscanner, Booking)
    setTimeout(() => {
      setRes({
        destination: to,
        hotel: 'Hotel Avenida Palace (Booking affiliate)',
        flight: 'ZRH ⇄ LIS (Skyscanner affiliate)',
        total: '≈ CHF 540',
        days: [
          { day: 'Day 1', plan: 'Arrival, Baixa & Alfama walk, sunset at Miradouro' },
          { day: 'Day 2', plan: 'Belém, Pastéis de Belém, LX Factory dinner' },
          { day: 'Day 3', plan: 'Sintra day trip, Quinta da Regaleira' },
        ]
      })
      setLoading(false)
    }, 800)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-4xl text-gold">Travel Plaza</h1>
      <p className="text-white/80 mt-2">Budget-aware itineraries with affiliate booking links.</p>

      <form onSubmit={plan} className="card p-6 mt-8 grid md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-white/70">Budget (CHF)</label>
          <input value={budget} onChange={e=>setBudget(e.target.value)}
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-sm text-white/70">Vibe</label>
          <input value={vibe} onChange={e=>setVibe(e.target.value)}
                 placeholder="romance, nature, luxury, city…" 
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-sm text-white/70">From</label>
          <input value={from} onChange={e=>setFrom(e.target.value)}
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-sm text-white/70">To</label>
          <input value={to} onChange={e=>setTo(e.target.value)}
                 className="mt-1 w-full rounded-xl2 bg-black/40 border border-white/15 px-3 py-2 focus:border-gold outline-none"/>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <button className="px-6 py-2 rounded-xl2 bg-gold text-black font-medium hover:brightness-110 transition">
            {loading ? 'Planning…' : 'Generate itinerary'}
          </button>
        </div>
      </form>

      {res && (
        <div className="card p-6 mt-8">
          <h3 className="font-serif text-2xl text-gold">{res.destination}</h3>
          <p className="text-white/80 mt-2">Total est.: {res.total} for {vibe.toLowerCase()}</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <a className="card p-4 hover:border-gold" href="#" rel="noreferrer">Hotel: {res.hotel} →</a>
            <a className="card p-4 hover:border-gold" href="#" rel="noreferrer">Flights: {res.flight} →</a>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {res.days.map((d,i)=>(
              <div key={i} className="card p-4">
                <div className="font-semibold text-white/90">{d.day}</div>
                <div className="text-white/75 mt-1">{d.plan}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
