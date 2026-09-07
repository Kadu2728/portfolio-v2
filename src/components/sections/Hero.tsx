'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { MaskText } from '@/components/ui/MaskText'
import { Action } from '@/components/ui/Action'
import { Marquee } from '@/components/ui/Marquee'
import { EASE } from '@/lib/motion'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { highlights } from '@/data/certificates'
import { marquee } from '@/data/stack'

/**
 * HERO
 *
 * Composição assimétrica em duas colunas: o nome domina a esquerda em escala
 * de cartaz e o retrato ocupa a direita como peça gráfica de verdade — não
 * como avatar de 48px no rodapé.
 *
 * A ordem de leitura é deliberada: quem é → o que faz → a prova (números) →
 * como falar comigo. Um recrutador precisa dos quatro em cinco segundos.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

  // Halo preso ao ponteiro, guardado em motion values para não re-renderizar
  // o React a cada movimento do mouse.
  const mx = useMotionValue(50)
  const my = useMotionValue(20)
  const sx = useSpring(mx, { stiffness: 55, damping: 20 })
  const sy = useSpring(my, { stiffness: 55, damping: 20 })
  const halo = useMotionTemplate`radial-gradient(560px circle at ${sx}% ${sy}%, rgba(224,74,63,0.16), transparent 62%)`

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const lift = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const photoLift = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

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
    transition: { duration: 0.75, ease: EASE, delay: prefersReduced ? 0 : d },
  })

  const stats = [
    { v: String(projects.length), l: 'projetos entregues' },
    { v: '6', l: 'em produção' },
    { v: highlights.total, l: 'certificados' },
  ]

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 md:pt-28"
    >
      {/* Três camadas de luz. Fundo quase preto e liso lê como luto; a luz
          quente atrás do retrato e o degradê de base dão volume e calor. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(58%_46%_at_72%_28%,rgba(224,74,63,0.22),transparent_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(46%_38%_at_18%_12%,rgba(243,240,232,0.055),transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon to-transparent" />
        </motion.div>
        <motion.div style={{ background: halo }} className="absolute inset-0" />
      </div>

      <motion.div
        style={prefersReduced ? undefined : { y: lift, opacity: fade }}
        className="relative mx-auto grid w-full max-w-shell flex-1 grid-cols-1 items-center gap-12 px-6 py-10 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      >
        {/* ---------- Coluna de identidade ----------
            Vem primeiro no mobile: com a foto acima, o nome caía abaixo da
            dobra e a primeira coisa lida deixava de ser quem a pessoa é. */}
        <div className="order-1">
          <motion.div
            {...seq(0.15)}
            className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-tech text-micro uppercase text-smoke"
          >
            <span className="flex items-center gap-2 text-chalk">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Disponível para oportunidades
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span>{profile.location}</span>
          </motion.div>

          {/* O nome em escala de cartaz — é a primeira coisa que se lê */}
          <MaskText
            as="h1"
            animate={ready}
            delay={0.3}
            stagger={0.09}
            lines={['Carlos', 'Eduardo']}
            className="font-display text-6xl font-bold uppercase text-chalk"
            highlightLast="text-accent"
          />

          <motion.div {...seq(0.95)} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <p className="font-display text-xl font-semibold text-chalk md:text-2xl">
              {profile.role}
            </p>
            <span className="rounded-xs border border-line px-2.5 py-1 font-tech text-micro uppercase text-smoke">
              UX/UI · IA
            </span>
          </motion.div>

          <motion.p {...seq(1.08)} className="mt-7 max-w-text text-lg text-ash">
            Construo experiências digitais de ponta a ponta — do modelo de dados à interface.
            No último ano publiquei seis aplicações full-stack sozinho.
          </motion.p>

          <motion.div {...seq(1.22)} className="mt-9 flex flex-wrap items-center gap-3">
            <Action
              href="#projetos"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver projetos
              <ArrowDown size={14} />
            </Action>
            <Action href={`mailto:${profile.email}`} variant="outline">
              <Mail size={14} />
              Falar comigo
            </Action>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 px-4 py-4 font-tech text-label uppercase tracking-[0.08em] text-ash transition-colors duration-200 hover:text-chalk"
            >
              <Download size={14} />
              Baixar CV
            </a>

            <span className="ml-1 flex items-center gap-1">
              {[
                { href: profile.github, Icon: Github, label: 'GitHub' },
                { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-smoke transition-colors duration-200 hover:text-chalk"
                >
                  <Icon size={18} />
                </a>
              ))}
            </span>
          </motion.div>
        </div>

        {/* ---------- Retrato ---------- */}
        <motion.div
          style={prefersReduced ? undefined : { y: photoLift }}
          className="order-2 justify-self-center lg:justify-self-end"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
            animate={ready ? { clipPath: 'inset(0% 0 0 0)', opacity: 1 } : {}}
            transition={{ duration: 1.1, ease: EASE, delay: prefersReduced ? 0 : 0.5 }}
            className="group relative"
          >
            {/* Moldura deslocada: profundidade sem sombra e sem glass */}
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full border border-accent-line transition-all duration-700 ease-expo group-hover:-bottom-1.5 group-hover:-right-1.5"
            />

            <div className="relative aspect-[4/5] w-[13rem] overflow-hidden bg-graphite sm:w-[17rem] lg:w-[22rem]">
              {/* Iniciais na camada de baixo — fallback natural se a foto falhar */}
              <span className="absolute inset-0 flex select-none items-center justify-center font-display text-6xl font-bold text-line-strong">
                {profile.initials}
              </span>

              {!photoFailed && (
                <Image
                  src="/profile.jpg"
                  alt={`Retrato de ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 304px, 352px"
                  onError={() => setPhotoFailed(true)}
                  // Foto colorida. Em preto e branco sobre fundo quase preto
                  // a composição inteira lê como luto — é a peça que traz
                  // pele, calor e presença humana para a dobra.
                  className="relative object-cover brightness-[1.06] saturate-[1.08] transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                />
              )}

              {/* Véu inferior: garante contraste da legenda sobre qualquer foto */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-void/85 to-transparent"
              />

              <span className="absolute bottom-4 left-4 font-tech text-micro uppercase text-chalk">
                {profile.education.org} · GTI
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ---------- Barra de prova + fita de stack ---------- */}
      <motion.div {...seq(1.45)} className="relative border-t border-line">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <dl className="grid grid-cols-3 divide-x divide-line">
            {stats.map((s, i) => (
              <div key={s.l} className={i === 0 ? 'py-6 pr-5' : 'py-6 pl-5 md:pl-8'}>
                <dd className="font-display text-2xl font-bold tabular-nums text-chalk md:text-3xl">
                  {s.v}
                </dd>
                <dt className="mt-0.5 font-tech text-micro uppercase text-smoke">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-t border-line py-3.5">
          <Marquee items={marquee} speed={52} className="opacity-60" />
        </div>
      </motion.div>
    </section>
  )
}
