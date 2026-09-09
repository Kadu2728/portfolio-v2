'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react'
import { MaskText } from '@/components/ui/MaskText'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useLocale, localeHref } from '@/lib/locale'
import { profile } from '@/data/profile'
import { highlights } from '@/data/certificates'

/**
 * HERO
 *
 * Composição em camadas: o retrato ocupa a direita e sangra no fundo, a
 * headline domina a esquerda e o case em destaque flutua ao lado.
 *
 * O retrato não é um card recortado — recebe máscara nas bordas para se
 * dissolver no fundo. É o que separa composição de "foto colada na página".
 */
export function Hero() {
  const { locale, c } = useLocale()
  const t = c.ui.hero
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

  const featured = c.projects.find((p) => p.slug === 'ceap-connect')

  const mx = useMotionValue(60)
  const my = useMotionValue(25)
  const sx = useSpring(mx, { stiffness: 50, damping: 20 })
  const sy = useSpring(my, { stiffness: 50, damping: 20 })
  const halo = useMotionTemplate`radial-gradient(620px circle at ${sx}% ${sy}%, rgba(224,74,63,0.16), transparent 60%)`

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const lift = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const photoShift = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  useEffect(() => {
    setReady(true)
    const move = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 100)
      my.set((e.clientY / window.innerHeight) * 100)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  const seq = (d: number) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 16 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: EASE, delay: prefersReduced ? 0 : d },
  })

  const contacts = [
    { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { Icon: MessageCircle, label: profile.phone, href: profile.whatsapp, ext: true },
    { Icon: Github, label: profile.githubUser, href: profile.github, ext: true },
    { Icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, ext: true },
    { Icon: Download, label: t.downloadCv, href: profile.cv, download: true },
  ]

  // Dissolve as bordas do retrato no fundo em vez de recortar num retângulo.
  const mask =
    'radial-gradient(76% 70% at 62% 44%, black 40%, transparent 78%), linear-gradient(to right, transparent, black 26%)'

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 md:pt-32"
    >
      {/* ---------- Retrato: camada de fundo, sangrando pela direita ---------- */}
      <motion.div
        style={prefersReduced ? undefined : { y: photoShift }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.7, ease: EASE, delay: 0.15 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[64%]"
      >
        {/* Luz de recorte atrás da silhueta */}
        <div className="absolute inset-0 bg-[radial-gradient(46%_56%_at_58%_42%,rgba(224,74,63,0.28),transparent_70%)]" />

        {!photoFailed && (
          <div
            className="absolute inset-0"
            style={{
              maskImage: mask,
              WebkitMaskImage: mask,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/profile.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 64vw"
              onError={() => setPhotoFailed(true)}
              className="object-cover object-[58%_30%] opacity-40 contrast-[1.12] saturate-[0.85] lg:opacity-75"
            />
          </div>
        )}

        {/* Véu à esquerda: garante contraste do texto sobre a foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-transparent lg:via-void/40" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-void to-transparent" />
      </motion.div>

      <motion.div style={{ background: halo }} aria-hidden="true" className="absolute inset-0" />

      {/* ---------- Conteúdo ----------
          Uma camada de paralaxe só para o hero inteiro. Quando só o bloco de
          texto subia, ele descia por cima do card e da régua de números no
          meio do scroll — texto sobre texto. */}
      <motion.div
        style={prefersReduced ? undefined : { y: lift, opacity: fade }}
        className="relative w-full"
      >
        <div className="mx-auto w-full max-w-shell px-6 md:px-10">
          <motion.div {...seq(0.2)} className="mb-8 flex items-center gap-4">
            <span className="font-tech text-micro text-accent tabular-nums">01</span>
            <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
            <span className="font-tech text-micro uppercase text-smoke">{t.eyebrow}</span>
          </motion.div>

          <MaskText
            as="h1"
            animate={ready}
            delay={0.32}
            stagger={0.085}
            lines={t.headline}
            // Sem leading próprio: o 0.96 do token já é o mínimo que mantém o
            // acento de "CÓDIGO" longe da linha de cima.
            className="font-display text-5xl font-bold uppercase text-chalk"
            accentIndex={t.headlineAccent}
          />

          <motion.p {...seq(1.05)} className="mt-7 max-w-md text-base leading-relaxed text-ash">
            {t.intro}
          </motion.p>

          <motion.div {...seq(1.2)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="#projetos"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition-all duration-300 ease-expo group-hover:scale-110 group-hover:bg-accent-bright">
                <ArrowRight size={18} />
              </span>
              <span className="font-tech text-label uppercase tracking-[0.10em] text-chalk">
                {t.viewProjects}
              </span>
            </Link>

            <span className="flex items-center gap-2 font-tech text-micro uppercase text-smoke">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {t.available}
            </span>
          </motion.div>

          {/* ---------- Contatos: todos na primeira dobra ---------- */}
          <motion.ul
            {...seq(1.35)}
            aria-label={t.contactsLabel}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {contacts.map(({ Icon, label, href, ext, download }) => (
              <li key={label}>
                <a
                  href={href}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  download={download}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-sm border border-line bg-carbon/70 px-3.5 py-2.5',
                    'font-tech text-micro text-ash backdrop-blur-sm transition-colors duration-200',
                    'hover:border-accent-line hover:text-chalk'
                  )}
                >
                  <Icon size={13} className="shrink-0 text-smoke" />
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---------- Case em destaque ---------- */}
        {featured && (
          <motion.div
            {...seq(1.5)}
            className="relative mx-auto mt-10 w-full max-w-shell px-6 md:px-10 lg:-mt-4 lg:flex lg:justify-end"
          >
            <Link
              href={localeHref(locale, `/projects/${featured.slug}`)}
              className="group block w-full rounded-sm border border-line bg-carbon/80 p-6 backdrop-blur-md transition-colors duration-500 hover:border-accent-line lg:max-w-sm"
            >
              <span className="flex items-center gap-2 font-tech text-micro uppercase text-accent-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t.featured}
              </span>
              <p className="mt-4 font-display text-2xl font-bold uppercase text-chalk">
                {featured.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ash">{featured.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-tech text-micro uppercase text-chalk">
                {t.viewCase}
                <ArrowUpRight
                  size={13}
                  className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>
        )}

        {/* ---------- Números ---------- */}
        <motion.div {...seq(1.65)} className="relative mx-auto mt-10 w-full max-w-shell px-6 md:px-10">
          <dl className="flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-line pt-6">
            {[
              { v: String(c.projects.length), l: t.statsProjects },
              { v: '6', l: t.statsLive },
              { v: highlights.total, l: t.statsCerts },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2.5">
                <dd className="font-display text-xl font-bold tabular-nums text-chalk">{s.v}</dd>
                <dt className="font-tech text-micro uppercase text-dim">{s.l}</dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  )
}
