'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { LocaleProvider, localeHref, useLocale, type Locale } from '@/lib/locale'
import { getContent } from '@/data/content'
import { LangSync } from '@/components/LangSync'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { Action } from '@/components/ui/Action'
import { pad } from '@/lib/utils'
import type { Project } from '@/types'

/**
 * Página de case. Uma só implementação para os dois idiomas — o provedor
 * decide o conteúdo, e o projeto já chega traduzido do bundle da rota.
 */
export function CaseStudy({ locale, slug }: { locale: Locale; slug: string }) {
  return (
    <LocaleProvider locale={locale} content={getContent(locale)}>
      <LangSync locale={locale} />
      <Navbar />
      <Body slug={slug} />
      <Footer />
    </LocaleProvider>
  )
}

function Body({ slug }: { slug: string }) {
  const { locale, c } = useLocale()
  const t = c.ui.case

  const i = c.projects.findIndex((p) => p.slug === slug)
  const project = c.projects[i]
  if (!project) return null
  const next = c.projects[(i + 1) % c.projects.length]

  const tech = [
    { label: t.frontend, items: project.tech.frontend },
    { label: t.backend, items: project.tech.backend },
    { label: t.tools, items: project.tech.tools },
  ].filter((g) => g.items.length > 0)

  return (
    <main id="conteudo">
      <header className="relative overflow-hidden border-b border-line px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div aria-hidden="true" className="aura pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-shell">
          <Link
            href={localeHref(locale, '/#projetos')}
            className="mb-12 inline-flex items-center gap-2 font-tech text-micro uppercase text-dim transition-colors hover:text-chalk"
          >
            <ArrowLeft size={14} />
            {t.back}
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-tech text-micro uppercase text-dim">
            <span className="text-accent-text tabular-nums">{pad(i + 1)}</span>
            <span>{project.category}</span>
            <span className="h-3 w-px bg-line-strong" />
            <span className="tabular-nums">{project.year}</span>
            <span className="h-3 w-px bg-line-strong" />
            <span>{project.role}</span>
          </div>

          <MaskText
            as="h1"
            animate
            lines={[project.title]}
            className="mt-8 font-display text-5xl font-bold text-chalk"
          />
          <p className="mt-6 max-w-3xl font-display text-2xl font-medium text-ash">
            {project.tagline}
          </p>

          {(project.link || project.github) && (
            <div className="mt-12 flex flex-wrap gap-4">
              {project.link && (
                <Action href={project.link} target="_blank" rel="noopener noreferrer" arrow>
                  {t.live}
                </Action>
              )}
              {project.github && (
                <Action
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  arrow
                >
                  {t.code}
                </Action>
              )}
            </div>
          )}
        </div>
      </header>

      {project.metrics && (
        <section className="border-b border-line px-6 md:px-10">
          <dl className="mx-auto grid max-w-shell grid-cols-2 md:grid-cols-3">
            {project.metrics.map((m, k) => (
              <div
                key={m.label}
                className={`py-10 ${k > 0 ? 'border-l border-line pl-6 md:pl-10' : 'pr-6'}`}
              >
                <dd className="font-display text-3xl font-bold text-chalk">{m.value}</dd>
                <dt className="mt-1 font-tech text-micro uppercase text-dim">{m.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mx-auto max-w-shell px-6 py-section md:px-10">
        <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <TechLabel>{t.label}</TechLabel>
          </div>
          <div className="space-y-20">
            <Block index="01" title={t.overview} body={project.overview} />
            <Block index="02" title={t.challenge} body={project.challenge} />
            <Block index="03" title={t.solution} body={project.solution} />
            <Block index="04" title={t.experience} body={project.experience} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-carbon px-6 py-section md:px-10">
        <div className="mx-auto max-w-shell">
          <TechLabel className="mb-10">{t.features}</TechLabel>
          <ul className="grid gap-x-10 border-t border-line sm:grid-cols-2">
            {project.features.map((f, k) => (
              <li key={f} className="flex items-baseline gap-5 border-b border-line py-5 text-ash">
                <span className="font-tech text-micro text-dim tabular-nums">{pad(k + 1)}</span>
                <span className="text-base">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-section md:px-10">
        <div className="mx-auto max-w-shell">
          <TechLabel className="mb-10">{t.tech}</TechLabel>
          <div className="grid gap-10 md:grid-cols-3">
            {tech.map((group) => (
              <div key={group.label}>
                <p className="mb-5 font-display text-lg font-semibold text-chalk">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((x) => (
                    <li
                      key={x}
                      className="border border-line px-3 py-1.5 font-tech text-micro text-ash"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {project.results && (
            <div className="mt-16 border-t border-line pt-10">
              <TechLabel className="mb-6">{t.results}</TechLabel>
              <ul className="max-w-3xl space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-4 text-lg text-ash">
                    <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line">
        <Link
          href={localeHref(locale, `/projects/${next.slug}`)}
          className="group block px-6 py-section md:px-10"
        >
          <div className="mx-auto max-w-shell">
            <TechLabel className="mb-8">{t.next}</TechLabel>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-4xl font-bold text-ash transition-colors duration-500 group-hover:text-chalk">
                {next.title}
              </h2>
              <ArrowUpRight
                size={30}
                className="text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              />
            </div>
            <p className="mt-4 max-w-xl text-lg text-dim">{next.tagline}</p>
          </div>
        </Link>
      </section>
    </main>
  )
}

function Block({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <Reveal>
      <article>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-tech text-micro text-accent-text tabular-nums">{index}</span>
          <h2 className="font-display text-2xl font-bold text-chalk">{title}</h2>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-ash">{body}</p>
      </article>
    </Reveal>
  )
}

export type { Project }
