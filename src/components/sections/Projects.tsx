'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Star } from 'lucide-react'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { EASE, inView } from '@/lib/motion'
import { pad } from '@/lib/utils'
import { ProjectPlate } from '@/components/ui/ProjectPlate'
import { useLocale, localeHref } from '@/lib/locale'
import type { Project } from '@/types'

/**
 * PROJETOS
 *
 * Dois pesos: o CEAP Connect ocupa um bloco inteiro, com métricas e
 * funcionalidades à vista; os demais entram numa grade regular com resumo.
 *
 * A galeria horizontal saiu: escondia projeto atrás de scroll lateral, e o
 * objetivo aqui é que todos sejam lidos sem esforço.
 */
const HERO_SLUG = 'ceap-connect'

export function Projects() {
  const { c, locale } = useLocale()
  const projects = c.projects
  const t = c.ui.projects
  const hero = projects.find((p) => p.slug === HERO_SLUG)
  const rest = projects.filter((p) => p.slug !== HERO_SLUG)

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="border-t border-line py-section"
    >
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <TechLabel index="04" className="mb-10">
          {c.ui.sections.projects}
        </TechLabel>
        <MaskText
          as="h2"
          lines={t.title}
          className="font-display text-4xl font-bold text-chalk"
        />
        <p id="projetos-titulo" className="sr-only">
          {c.ui.sections.projects}
        </p>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-text text-lg text-ash">
            {projects.length} {t.intro}
          </p>
        </Reveal>

        {hero && <Featured project={hero} />}

        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-5">
            <h3 className="font-display text-2xl font-semibold text-chalk">{t.others}</h3>
            <span className="font-tech text-micro uppercase text-dim tabular-nums">
              {rest.length} {t.count}
            </span>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((p, i) => (
              <Card key={p.slug} project={p} index={i + 2} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Bloco de destaque: o projeto que melhor representa o trabalho. */
function Featured({ project }: { project: Project }) {
  const { locale, c } = useLocale()
  const t = c.ui.projects
  const prefersReduced = useReducedMotion()

  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative mt-16 overflow-hidden rounded-lg border border-line bg-carbon transition-colors duration-500 hover:border-accent-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(224,74,63,0.10),transparent_70%)]"
      />

      {/* A captura abre o bloco: o produto aparece antes do texto sobre ele */}
      {project.image && (
        <div className="relative aspect-[16/7] w-full overflow-hidden border-b border-line">
          <Image
            src={project.image}
            alt={`Interface do projeto ${project.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent"
          />
        </div>
      )}

      <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:p-16">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-sm border border-accent-line bg-accent-soft px-3 py-1.5 font-tech text-micro uppercase text-accent-text">
              <Star size={11} className="fill-current" />
              {t.featured}
            </span>
            <span className="font-tech text-micro uppercase text-dim">
              {project.category} · {project.year}
            </span>
          </div>

          <h3 className="font-display text-4xl font-bold tracking-tight text-chalk">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl font-display text-xl font-medium text-accent-text">
            {project.tagline}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ash">{project.overview}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-smoke">{project.challenge}</p>

          {project.results && (
            <ul className="mt-8 space-y-2.5">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3.5 text-base text-ash">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={localeHref(locale, `/projects/${project.slug}`)}
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 font-tech text-label uppercase text-white transition-colors duration-200 hover:bg-accent-bright"
            >
              {t.viewCase}
              <ArrowUpRight size={15} />
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line-strong px-6 py-3.5 font-tech text-label uppercase text-chalk transition-colors duration-200 hover:border-accent hover:text-accent-text"
              >
                {t.openLive}
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${project.title} no GitHub`}
                className="rounded-sm border border-line p-3.5 text-smoke transition-colors duration-200 hover:border-line-strong hover:text-chalk"
              >
                <Github size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Coluna de apoio: números e o que o produto entrega */}
        <div className="lg:border-l lg:border-line lg:pl-12">
          {project.metrics && (
            <dl className="mb-10 grid grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-2xl font-bold text-chalk">{m.value}</dd>
                  <dt className="mt-1 font-tech text-micro uppercase leading-tight text-dim">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          <p className="mb-4 font-tech text-micro uppercase text-dim">{t.whatItDoes}</p>
          <ul className="mb-10 space-y-2.5">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex gap-3 text-base text-ash">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>

          <p className="mb-3 font-tech text-micro uppercase text-dim">{t.stack}</p>
          <ul className="flex flex-wrap gap-2">
            {[...project.tech.frontend, ...project.tech.backend, ...project.tech.tools]
              .slice(0, 10)
              .map((t) => (
                <li
                  key={t}
                  className="rounded-xs border border-line px-2.5 py-1 font-tech text-micro text-smoke"
                >
                  {t}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

/** Card de projeto: título, resumo e stack. Sem imagem — o texto é o argumento. */
function Card({ project, index }: { project: Project; index: number }) {
  const { locale } = useLocale()
  const prefersReduced = useReducedMotion()

  return (
    <motion.li
      initial={{ opacity: 0, y: prefersReduced ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 3) * 0.07 }}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-carbon transition-colors duration-500 hover:border-accent-line hover:bg-steel">
        <Link
          href={localeHref(locale, `/projects/${project.slug}`)}
          className="absolute inset-0 z-10"
          aria-label={`Ver o case de ${project.title}`}
        />

        <ProjectPlate project={project} index={index} />

        <div className="relative flex flex-1 flex-col p-6">
          <h4 className="font-display text-2xl font-semibold text-chalk">{project.title}</h4>
          <p className="mt-2 text-base font-medium text-accent-text">{project.tagline}</p>
          <p className="mt-4 flex-1 text-base leading-relaxed text-ash">{project.overview}</p>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="font-tech text-micro uppercase text-dim">{project.role}</span>
            <span className="relative z-20 flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código de ${project.title}`}
                  className="text-dim transition-colors hover:text-chalk"
                >
                  <Github size={15} />
                </a>
              )}
              <ArrowUpRight
                size={17}
                className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  )
}
