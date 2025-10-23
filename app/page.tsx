'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F13] text-white">
      {/* Background: soft radial + gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.16),rgba(0,0,0,0))]" />
        <div className="absolute -bottom-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_40%)]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#D4AF37] via-amber-400 to-yellow-600 shadow-[0_0_30px_-8px_#d4af37]" />
            <span className="text-sm tracking-[0.18em] text-white/80">AI SHOPPING MALL</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href="/mall?tab=cloth" className="hover:text-white transition">Cloth</Link>
            <Link href="/mall?tab=beauty" className="hover:text-white transition">Beauty</Link>
            <Link href="/mall?tab=food" className="hover:text-white transition">Food</Link>
            <Link href="/mall?tab=travel" className="hover:text-white transition">Travel</Link>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl border-b border-white/10" />
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 text-center md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#F6E27A] via-[#D4AF37] to-[#8A6A1F] bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl"
        >
          Shop. Style. Travel. Dine.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          The world’s first <span className="text-white/90">AI-curated lifestyle mall</span>—personalized looks, beauty fits, nearby meals, and smart trips.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/mall"
            className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] via-amber-400 to-yellow-500 px-6 py-3 font-medium text-black shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition hover:brightness-110"
          >
            Enter the Mall
          </Link>
          <a
            href="#plazas"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/10"
          >
            Watch Preview
          </a>
        </motion.div>
      </section>

      {/* Plazas grid */}
      <section id="plazas" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-white/90">Explore the Plazas</h2>
          <p className="mt-2 text-white/60">Tap a plaza to preview its vibe. Continue in the full mall for AI-powered results.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <PlazaCard
            href="/mall?tab=cloth"
            emoji="🧥"
            title="Cloth Plaza"
            desc="Selfie → undertone → vibe → outfit ideas."
          />
          <PlazaCard
            href="/mall?tab=beauty"
            emoji="💄"
            title="Beauty Plaza"
            desc="Skin tone & type → shades & routines that fit."
          />
          <PlazaCard
            href="/mall?tab=food"
            emoji="🍜"
            title="Food Plaza"
            desc="Find the best nearby meals within your budget."
          />
          <PlazaCard
            href="/mall?tab=travel"
            emoji="✈️"
            title="Travel Plaza"
            desc="Budget + vibe → full itinerary with rich cards."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-10 pt-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AI Shopping Mall · Where AI meets luxury living
      </footer>
    </main>
  );
}

function PlazaCard({
  href,
  emoji,
  title,
  desc,
}: {
  href: string;
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition
                 hover:border-[#D4AF37]/40 hover:bg-white/[0.12] hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]"
    >
      {/* subtle gradient edge */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
                      bg-[radial-gradient(80%_60%_at_50%_0%,rgba(212,175,55,0.22),rgba(0,0,0,0))]" />
      <div className="relative">
        <div className="mb-3 text-3xl">{emoji}</div>
        <h3 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#D4AF37]/90">
          Preview
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.293 3.293a1 1 0 011.414 0l4.999 4.999a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

