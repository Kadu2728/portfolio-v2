'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Sobre',         href: '#sobre' },
  { label: 'Habilidades',   href: '#habilidades' },
  { label: 'Projetos',      href: '#projetos' },
  { label: 'Certificados',  href: '#certificados' },
  { label: 'Contato',       href: '#contato' },
]

export function Navbar() {
  const scrolled = useScroll(50)
  const [open, setOpen] = useState(false)

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-6 md:px-10',
          'flex items-center justify-between h-16',
          'transition-all duration-300',
          scrolled && 'bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06]'
        )}
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-lg tracking-tight text-white"
        >
          Kadu<span className="text-indigo-400">.</span>dev
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleLink(item.href)}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <motion.a
          href="mailto:kacadu007@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors duration-200"
        >
          Contato
        </motion.a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="md:hidden text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleLink(item.href)}
                className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="mailto:kacadu007@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.06 }}
              className="mt-4 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg"
            >
              Contato
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
