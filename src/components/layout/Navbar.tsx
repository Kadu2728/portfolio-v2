'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navItems, profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/use-active-section'
import { EASE } from '@/lib/motion'
import { cn, pad } from '@/lib/utils'

const ids = navItems.map((i) => i.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const { scrollY } = useScroll()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  const goTo = useCallback((href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  // Aberto, o menu é um diálogo modal: trava o scroll, prende o Tab e fecha
  // no Escape. Sem isso o teclado desaparece atrás do overlay.
  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus()
      return
    }
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a,button') ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[110] transition-all duration-500 ease-expo',
          scrolled
            ? 'h-14 border-b border-line bg-void/70 backdrop-blur-xl'
            : 'h-20 border-b border-transparent'
        )}
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-full max-w-shell items-center justify-between px-6 md:px-10"
        >
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-chalk"
          >
            CE<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => {
              const id = item.href.slice(1)
              const on = active === id
              return (
                <li key={item.href}>
                  <button
                    onClick={() => goTo(item.href)}
                    aria-current={on ? 'true' : undefined}
                    className={cn(
                      'relative flex items-center gap-2 px-4 py-2 font-tech text-micro uppercase transition-colors duration-200',
                      on ? 'text-chalk' : 'text-dim hover:text-ash'
                    )}
                  >
                    <span className="tabular-nums opacity-50">{pad(i + 1)}</span>
                    {item.label}
                    {on && (
                      <motion.span
                        layoutId="nav-dot"
                        transition={{ duration: 0.4, ease: EASE }}
                        className="absolute -bottom-0.5 left-4 h-px w-4 bg-accent"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <button
            ref={triggerRef}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex flex-col items-end gap-1.5 p-2 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4, width: 22 } : { rotate: 0, y: 0, width: 22 }}
              className="block h-px bg-chalk"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4, width: 22 } : { rotate: 0, y: 0, width: 14 }}
              className="block h-px bg-chalk"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[105] flex flex-col justify-center bg-void px-6 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 + i * 0.06, duration: 0.5, ease: EASE }}
                onClick={() => goTo(item.href)}
                className="flex items-baseline gap-5 border-b border-line py-5 text-left"
              >
                <span className="font-tech text-micro text-accent-text tabular-nums">
                  {pad(i + 1)}
                </span>
                <span className="font-display text-3xl font-semibold text-chalk">
                  {item.label}
                </span>
              </motion.button>
            ))}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 font-tech text-micro uppercase text-smoke"
            >
              {profile.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
