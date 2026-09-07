'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Database,
  Layers,
  Palette,
  Rocket,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { Action } from '@/components/ui/Action'
import { EASE, inView } from '@/lib/motion'
import { pad } from '@/lib/utils'
import { type Service } from '@/data/services'
import { useLocale, localeHref } from '@/lib/locale'
import { profile } from '@/data/profile'

/**
 * SERVIÇOS — o que eu entrego.
 *
 * A seção de projetos mostra o que já fiz; esta responde "o que você pode
 * fazer por mim". São perguntas diferentes, e quem contrata faz a segunda.
 *
 * Cada card aponta para o projeto que prova a capacidade. Sem isso a seção
 * vira lista de promessas — que é o erro comum do formato.
 */
const ICONS: Record<Service['icon'], LucideIcon> = {
  layers: Layers,
  server: Server,
  palette: Palette,
  sparkles: Sparkles,
  database: Database,
  rocket: Rocket,
}

export function Services() {
  const { c } = useLocale()
  const { services, servicesIntro, ui } = { services: c.services, servicesIntro: c.servicesIntro, ui: c.ui }
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="border-t border-line bg-carbon py-section"
    >
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <TechLabel index="03" className="mb-10">
          {c.ui.sections.services}
        </TechLabel>
        <MaskText
          as="h2"
          lines={ui.services.title}
          className="font-display text-4xl font-bold text-chalk"
        />
        <p id="servicos-titulo" className="sr-only">
          {ui.sections.services}
        </p>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-text text-lg text-ash">{servicesIntro}</p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.id} service={s} index={i + 1} />
          ))}
        </ul>

        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-accent-line bg-accent-soft p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-bold text-chalk">
                {ui.services.ctaTitle}
              </p>
              <p className="mt-2 max-w-lg text-base text-ash">
                {ui.services.ctaBody}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Action href={`mailto:${profile.email}`}>{ui.services.email}</Action>
              <Action href={profile.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline">
                {ui.services.whatsapp}
              </Action>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/**
 * Grade sem espaço entre células: o fundo `bg-line` vaza pelo gap de 1px e
 * vira a própria divisória. Menos borda desenhada, mais estrutura.
 */
function Card({ service, index }: { service: Service; index: number }) {
  const { locale, c } = useLocale()
  const Icon = ICONS[service.icon]
  const prefersReduced = useReducedMotion()

  return (
    <motion.li
      initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.55, ease: EASE, delay: ((index - 1) % 3) * 0.07 }}
      className="group flex flex-col bg-void p-8 transition-colors duration-500 hover:bg-graphite"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-carbon text-ash transition-colors duration-300 group-hover:border-accent-line group-hover:text-accent-text">
          <Icon size={19} strokeWidth={1.6} />
        </span>
        <span className="font-tech text-micro text-dim tabular-nums">{pad(index)}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-chalk">{service.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-ash">{service.description}</p>

      <ul className="mt-6 flex-1 space-y-2">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-smoke">
            <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent/70" />
            {item}
          </li>
        ))}
      </ul>

      {/* A prova: o serviço aponta para código no ar, não para um adjetivo. */}
      <Link
        href={localeHref(locale, `/projects/${service.proof.slug}`)}
        className="mt-7 inline-flex items-center gap-2 border-t border-line pt-5 font-tech text-micro uppercase text-dim transition-colors duration-300 hover:text-chalk"
      >
        {c.ui.services.provenIn}
        <span className="text-accent-text">{service.proof.label}</span>
        <ArrowUpRight
          size={13}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.li>
  )
}
