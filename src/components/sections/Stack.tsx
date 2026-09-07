'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Marquee } from '@/components/ui/Marquee'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { EASE } from '@/lib/motion'
import { cn, pad } from '@/lib/utils'
import { marquee } from '@/data/stack'
import { useLocale } from '@/lib/locale'

/**
 * STACK — lista tipográfica expansível.
 *
 * Grade de logos é o clichê do gênero: comunica "sei o nome dessas coisas",
 * não "trabalho com elas". Aqui cada camada é uma linha grande que se abre
 * ao ser focada, revelando o conteúdo em stagger.
 *
 * No desktop abre no hover; no mobile, no toque. As duas vias passam pelo
 * mesmo estado, então teclado e leitor de tela funcionam igual.
 */
export function Stack() {
  const { c } = useLocale()
  const stackGroups = c.stack
  const [open, setOpen] = useState<string | null>(stackGroups[0].id)
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="stack"
      aria-labelledby="stack-titulo"
      className="relative overflow-hidden border-t border-line py-section"
    >
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <TechLabel index="02" className="mb-10">
          {c.ui.sections.stack}
        </TechLabel>
        <MaskText
          as="h2"
          lines={c.ui.stack.title}
          className="font-display text-3xl font-bold text-chalk"
        />
        <p id="stack-titulo" className="sr-only">
          Stack técnica
        </p>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-text text-lg text-ash">
            Só está aqui o que já entrou em projeto entregue. A ordem dentro de cada camada é
            intencional: começa pelo que domino melhor.
          </p>
        </Reveal>
      </div>

      {/* Duas fitas em direções opostas criam profundidade sem paralaxe pesado */}
      <div className="my-16 flex flex-col gap-4 md:my-24 md:gap-6">
        <Marquee items={marquee} speed={46} />
        <Marquee items={[...marquee].reverse()} speed={54} reverse />
      </div>

      <div className="mx-auto max-w-shell px-6 md:px-10">
        <ul className="border-t border-line">
          {stackGroups.map((g, i) => {
            const on = open === g.id
            return (
              <li key={g.id} className="border-b border-line">
                <button
                  onClick={() => setOpen(on ? null : g.id)}
                  onMouseEnter={() => !prefersReduced && setOpen(g.id)}
                  aria-expanded={on}
                  aria-controls={`stack-${g.id}`}
                  className="group flex w-full items-baseline gap-5 py-8 text-left md:gap-8 md:py-11"
                >
                  <span className="font-tech text-micro text-dim tabular-nums">{pad(i + 1)}</span>

                  <span className="flex-1">
                    <span
                      className={cn(
                        'block font-display text-4xl font-bold tracking-tight transition-colors duration-300',
                        on ? 'text-chalk' : 'text-dim group-hover:text-ash'
                      )}
                    >
                      {g.label}
                    </span>
                    <span className="mt-2 block font-tech text-micro uppercase text-dim">
                      {g.caption}
                    </span>
                  </span>

                  <motion.span
                    animate={{ rotate: on ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="relative h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current text-smoke" />
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current text-smoke" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      id={`stack-${g.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-wrap gap-x-3 gap-y-3 pb-10 md:pl-14">
                        {g.items.map((item, k) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: k * 0.035, duration: 0.4, ease: EASE }}
                            className="border border-line px-4 py-2 font-tech text-label text-ash transition-colors duration-200 hover:border-accent-line hover:text-accent-text"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
