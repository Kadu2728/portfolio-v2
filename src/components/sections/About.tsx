'use client'

import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { TechLabel } from '@/components/ui/Reveal'
import { MaskText } from '@/components/ui/MaskText'
import { EASE, inView } from '@/lib/motion'
import { chapters, profile } from '@/data/profile'

/**
 * SOBRE — narrativa em scroll.
 *
 * A coluna esquerda fica presa e exibe a palavra do capítulo em leitura; a
 * direita rola. A palavra é o elemento gráfico da seção, não um enfeite — é
 * ela que dá a sensação de progressão de Curiosidade a Full-Stack.
 */
export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const i = Math.min(chapters.length - 1, Math.floor(p * chapters.length))
    setIndex(i < 0 ? 0 : i)
  })

  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const active = chapters[index]

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="relative border-t border-line bg-carbon"
    >
      <div className="mx-auto max-w-shell px-6 pt-section md:px-10">
        <TechLabel index="01" className="mb-10">
          Sobre
        </TechLabel>
        <MaskText
          as="h2"
          lines={['Do primeiro "como isso funciona?"', 'até o produto em produção.']}
          className="max-w-4xl font-display text-3xl font-bold text-chalk"
        />
        <p id="sobre-titulo" className="sr-only">
          Sobre Carlos Eduardo
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-shell px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Coluna presa: a palavra do capítulo */}
          <div className="hidden lg:block">
            <div className="sticky top-1/2 -translate-y-1/2 py-24">
              <div className="mb-8 h-px w-full bg-line">
                <motion.div
                  style={{ scaleX: barScale }}
                  className="h-px origin-left bg-accent"
                />
              </div>

              <div className="relative h-[9rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.id}
                    initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 26, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -26, filter: 'blur(6px)' }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="font-display text-4xl font-bold leading-none tracking-tight text-chalk"
                  >
                    {active.word}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="mt-6 font-tech text-micro uppercase text-dim tabular-nums">
                {active.index} / {String(chapters.length).padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Coluna que rola: os capítulos */}
          <div className="py-24 md:py-32">
            {chapters.map((c, i) => (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.7, ease: EASE }}
                className="min-h-[62vh] border-b border-line py-12 last:border-b-0 lg:min-h-[70vh]"
              >
                <div className="mb-6 flex items-center gap-4 lg:hidden">
                  <span className="font-tech text-micro text-accent-text tabular-nums">
                    {c.index}
                  </span>
                  <span className="font-display text-xl font-bold text-chalk">{c.word}</span>
                </div>

                <h3 className="max-w-xl font-display text-2xl font-semibold leading-snug text-chalk">
                  {c.title}
                </h3>
                <p className="mt-5 max-w-text text-lg text-ash">{c.body}</p>

                <span
                  aria-hidden="true"
                  className="mt-8 block h-px w-14 origin-left bg-accent/50"
                  style={{ transform: `scaleX(${1 + i * 0.35})` }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Fecho da seção: formação, experiência e idiomas em régua editorial */}
      <div className="mx-auto max-w-shell px-6 pb-section md:px-10">
        <div className="rule mb-14" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <TechLabel className="mb-5">Formação</TechLabel>
            <p className="font-display text-lg font-semibold text-chalk">
              {profile.education.org}
            </p>
            <p className="mt-1 text-base text-ash">{profile.education.course}</p>
            <p className="mt-2 font-tech text-micro uppercase text-dim">
              {profile.education.period}
            </p>
          </div>

          <div className="md:col-span-2">
            <TechLabel className="mb-5">Experiência</TechLabel>
            <div className="grid gap-8 sm:grid-cols-2">
              {profile.experience.map((e) => (
                <div key={e.org}>
                  <div className="flex items-center gap-3">
                    <p className="font-display text-lg font-semibold text-chalk">{e.org}</p>
                    {e.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-label="Atual" />
                    )}
                  </div>
                  <p className="mt-1 text-base text-ash">{e.role}</p>
                  <p className="mt-2 font-tech text-micro uppercase text-dim">
                    {e.period} · {e.place}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-smoke">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-8">
          {profile.languages.map((l) => (
            <span key={l.code} className="font-tech text-micro uppercase text-dim">
              <span className="text-accent-text">{l.code}</span> · {l.name} — {l.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
