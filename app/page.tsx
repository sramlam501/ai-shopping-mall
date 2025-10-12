'use client'
import * as React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0D0D0D] text-white">
      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-serif tracking-wide text-[#D4AF37]"
      >
        AI SHOPPING MALL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-lg text-gray-300 max-w-lg"
      >
        Shop. Style. Travel. Dine — in the world’s first AI-curated lifestyle mall.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/cloth"
          className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-medium shadow-lg hover:brightness-110 transition"
        >
          Enter the Mall
        </a>
        <a
          href="#plazas"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:border-[#D4AF37] transition"
        >
          Watch Preview
        </a>
      </motion.div>

      {/* PLAZAS */}
{/* PLAZAS */}
<section id="plazas" className="mx-auto max-w-6xl px-4 pb-20 mt-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
  >
    <a
      href="/cloth"
        className="rounded-[18px] border border-white/10 bg-white/5 p-6 hover:bg-white/10 card-gold-hover"
    >
      <div className="text-3xl mb-3">🧥</div>
      <h3 className="text-2xl text-[#D4AF37]">Cloth Plaza</h3>
      <p className="text-white/80 mt-1">Selfie → vibe → instant outfits.</p>
    </a>

    <a
      href="/beauty"
      className="rounded-[18px] border border-white/10 bg-white/5 p-6 hover:bg-white/10 card-gold-hover"
    >
      <div className="text-3xl mb-3">💄</div>
      <h3 className="text-2xl text-[#D4AF37]">Beauty Plaza</h3>
      <p className="text-white/80 mt-1">Your perfect shades, auto-matched.</p>
    </a>

    <a
      href="/food"
  className="rounded-[18px] border border-white/10 bg-white/5 p-6 hover:bg-white/10 card-gold-hover"
    >
      <div className="text-3xl mb-3">🍜</div>
      <h3 className="text-2xl text-[#D4AF37]">Food Plaza</h3>
      <p className="text-white/80 mt-1">Find & order the best within budget.</p>
    </a>

    <a
      href="/travel"
  className="rounded-[18px] border border-white/10 bg-white/5 p-6 hover:bg-white/10 card-gold-hover"
    >
      <div className="text-3xl mb-3">✈️</div>
      <h3 className="text-2xl text-[#D4AF37]">Travel Plaza</h3>
      <p className="text-white/80 mt-1">
        Budget-aware itineraries in seconds.
      </p>
    </a>
  </motion.div>
</section>
    </main>
  )
}
