'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PlazaCard(
  { emoji, title, blurb, href }:
  { emoji: string; title: string; blurb: string; href: string }
) {
  return (
    <Link href={href}>
      <motion.div whileHover={{ y: -2, scale: 1.01 }} className="card p-6 group relative">
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="font-seriflux text-2xl text-gold drop-shadow-[0_0_20px_rgba(212,175,55,.25)]">{title}</h3>
        <p className="text-white/80 mt-1">{blurb}</p>
        <span className="absolute right-4 bottom-4 text-gold/90 group-hover:translate-x-1 transition">→</span>
      </motion.div>
    </Link>
  )
}

