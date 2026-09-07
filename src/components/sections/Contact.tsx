'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { Action } from '@/components/ui/Action'
import { ContactForm } from '@/components/ui/ContactForm'
import { profile } from '@/data/profile'
import { useLocale } from '@/lib/locale'

const buildChannels = (c: ReturnType<typeof useLocale>['c']) => [
  { label: c.ui.contact.email, value: profile.email, href: `mailto:${profile.email}`, ext: false },
  { label: c.ui.contact.whatsapp, value: profile.phone, href: profile.whatsapp, ext: true },
  { label: 'GitHub', value: profile.githubUser, href: profile.github, ext: true },
  { label: 'LinkedIn', value: 'Carlos Eduardo Diogo', href: profile.linkedin, ext: true },
  { label: c.ui.contact.cvLabel, value: c.ui.contact.cvValue, href: profile.cv, ext: false },
]

/**
 * CONTATO — clímax.
 *
 * A headline cresce enquanto a seção entra: o texto escala com o scroll, o
 * que faz a página terminar em crescendo em vez de simplesmente acabar.
 */
export function Contact() {
  const { c } = useLocale()
  const channels = buildChannels(c)
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0.25, 1])

  return (
    <section
      ref={ref}
      id="contato"
      aria-labelledby="contato-titulo"
      className="relative overflow-hidden border-t border-line py-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(224,74,63,0.11),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-shell px-6 md:px-10">
        <TechLabel index="06" className="mb-10">
          {c.ui.sections.contact}
        </TechLabel>

        <motion.div
          style={prefersReduced ? undefined : { scale, opacity }}
          className="origin-left"
        >
          <MaskText
            as="h2"
            lines={c.ui.contact.title}
            className="font-display text-5xl font-bold leading-[0.92] text-chalk"
            highlightLast="text-accent"
          />
        </motion.div>
        <p id="contato-titulo" className="sr-only">
          {c.ui.sections.contact}
        </p>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-text text-lg text-ash">
            {c.ui.contact.intro}
          </p>
        </Reveal>

        {/* Formulário à esquerda, canais diretos à direita: quem prefere
            escrever agora resolve ali; quem prefere o próprio cliente de
            e-mail ou o WhatsApp não precisa passar pelo formulário. */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal delay={0.16}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.22}>
            <div className="flex h-full flex-col justify-between gap-8 border border-line bg-carbon p-8">
              <div>
                <p className="font-tech text-micro uppercase text-dim">{c.ui.contact.directTitle}</p>
                <p className="mt-4 text-base leading-relaxed text-ash">
                  {c.ui.contact.directBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Action href={`mailto:${profile.email}`} arrow>
                  {c.ui.contact.email}
                </Action>
                <Action
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  {c.ui.contact.whatsapp}
                </Action>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 border-t border-line">
          {channels.map((c, i) => (
            <li key={c.label}>
              <motion.a
                href={c.href}
                target={c.ext ? '_blank' : undefined}
                rel={c.ext ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex items-center gap-6 border-b border-line py-7"
              >
                <span className="w-24 shrink-0 font-tech text-micro uppercase text-dim">
                  {c.label}
                </span>
                <span className="flex-1 truncate font-display text-xl font-medium text-ash transition-colors duration-300 group-hover:text-chalk md:text-2xl">
                  {c.value}
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
