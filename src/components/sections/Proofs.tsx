'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel } from '@/components/ui/Reveal'
import { EASE, inView } from '@/lib/motion'
import { useLocale } from '@/lib/locale'

/**
 * DESTAQUES — a faixa de provas.
 *
 * Vem logo depois do hero porque é a primeira pergunta de quem recruta:
 * "o que dessa história é verificável?". Três itens, cada um com data,
 * instituição ou número que existe fora do portfólio.
 *
 * Sem número inventado e sem adjetivo: o texto é o do currículo.
 */
export function Proofs() {
  const { c } = useLocale()
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="destaques"
      aria-labelledby="destaques-titulo"
      className="border-t border-line bg-carbon py-section"
    >
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <TechLabel className="mb-10">{c.ui.sections.proofs}</TechLabel>
        <MaskText
          as="h2"
          lines={c.ui.proofs.title}
          className="font-display text-3xl font-bold text-chalk"
        />
        <p id="destaques-titulo" className="sr-only">
          {c.ui.sections.proofs}
        </p>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {c.proofs.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="flex flex-col bg-void p-8 transition-colors duration-500 hover:bg-graphite"
            >
              <span className="font-tech text-micro text-accent-text tabular-nums">{p.index}</span>
              <p className="mt-5 font-display text-xl font-semibold leading-snug text-chalk">
                {p.label}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ash">{p.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
