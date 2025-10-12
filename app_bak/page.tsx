'use client'
import { motion } from 'framer-motion'

type CardProps = { emoji: string; title: string; blurb: string; href: string }

// local client card (no external imports = fewer pitfalls)
function Card({ emoji, title, blurb, href }: CardProps) {
  return (
    <a href={href} className="group relative rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-[14px] p-6 hover:bg-white/8 transition">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-seriflux text-2xl text-gold drop-shadow-[0_0_20px_rgba(212,175,55,.25)]">
        {title}
      </h3>
      <p className="text-white/80 mt-1">{blurb}</p>
      <span className="absolute right-4 bottom-4 text-gold/90 group-hover:translate-x-1 transition">→</span>
    </a>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(600px_200px_at_50%_-40px,#D4AF37,transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-seriflux text-5xl md:text-6xl gold-grad leading-tight"
          >
            AI SHOPPING MALL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-white/85"
          >
            Shop. Style. Travel. Dine — in the world’s first AI-curated lifestyle mall.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a href="/cloth" className="px-6 py-3 rounded-[18px] bg-gold text-blacklux font-medium shadow-[0_0_40px_rgba(212,175,55,.25)] hover:brightness-110 transition">
              Enter the Mall
            </a>
            <a href="#plazas" className="px-6 py-3 rounded-[18px] border border-white/20 hover:border-gold transition">
              Watch Preview
            </a>
          </motion.div>
        </div>
      </section>

      {/* PLAZAS */}
      <section id="plazas" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card emoji="🧥" title="Cloth Plaza"  blurb="Selfie → vibe → instant outfits."              href="/cloth"  />
          <Card emoji="💄" title="Beauty Plaza" blurb="Your perfect shades, auto-matched."             href="/beauty" />
          <Card emoji="🍜" title="Food Plaza"   blurb="Find & order the best within budget."           href="/food"   />
          <Card emoji="✈️" title="Travel Plaza" blurb="Budget-aware itineraries in seconds."           href="/travel" />
        </div>
      </section>
    </>
  )
}

