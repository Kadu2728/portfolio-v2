'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { useLocale } from '@/lib/locale'

export function Footer() {
  const { c } = useLocale()
  return (
    <footer className="border-t border-line px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-shell flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold text-chalk"
          >
            {profile.short}
            <span className="text-accent">.</span>
          </motion.p>
          <p className="mt-1 font-tech text-micro uppercase text-dim">{c.role}</p>
        </div>

        <p className="max-w-xs font-tech text-micro uppercase leading-relaxed text-dim">
          {c.ui.footer.built}
          <br />
          <span className="text-smoke">© {new Date().getFullYear()} · {c.location}</span>
        </p>
      </div>
    </footer>
  )
}
