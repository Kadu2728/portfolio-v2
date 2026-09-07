import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { Action } from '@/components/ui/Action'
import { getProject, projects } from '@/data/projects'
import { pad } from '@/lib/utils'

type Params = { params: Promise<{ slug: string }> }

/** Estático em build: são 10 rotas conhecidas, não há motivo para renderizar sob demanda. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline, type: 'article' },
  }
}

export default async function CasePage({ params }: Params) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const i = projects.findIndex((p) => p.slug === slug)
  const next = projects[(i + 1) % projects.length]
  const tech = [
    { label: 'Front-End', items: project.tech.frontend },
    { label: 'Back-End', items: project.tech.backend },
    { label: 'Ferramentas', items: project.tech.tools },
  ].filter((t) => t.items.length > 0)

  return (
    <>
      <Navbar />
      <main id="conteudo">
        {/* ---------- Abertura ---------- */}
        <header className="relative overflow-hidden border-b border-line px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
          <div
            aria-hidden="true"
            className="aura pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-shell">
            <Link
              href="/#projetos"
              className="mb-12 inline-flex items-center gap-2 font-tech text-micro uppercase text-dim transition-colors hover:text-chalk"
            >
              <ArrowLeft size={14} />
              Todos os projetos
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
                    Ver ao vivo
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
                    Código
                  </Action>
                )}
              </div>
            )}
          </div>
        </header>

        {/* ---------- Métricas ---------- */}
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

        {/* ---------- Narrativa ---------- */}
        <section className="mx-auto max-w-shell px-6 py-section md:px-10">
          <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <TechLabel>O case</TechLabel>
            </div>

            <div className="space-y-20">
              <Block index="01" title="Visão geral" body={project.overview} />
              <Block index="02" title="O problema" body={project.challenge} />
              <Block index="03" title="A solução" body={project.solution} />
              <Block index="04" title="Experiência e decisões" body={project.experience} />
            </div>
          </div>
        </section>

        {/* ---------- Funcionalidades ---------- */}
        <section className="border-t border-line bg-carbon px-6 py-section md:px-10">
          <div className="mx-auto max-w-shell">
            <TechLabel className="mb-10">Funcionalidades</TechLabel>
            <ul className="grid gap-x-10 border-t border-line sm:grid-cols-2">
              {project.features.map((f, k) => (
                <li
                  key={f}
                  className="flex items-baseline gap-5 border-b border-line py-5 text-ash"
                >
                  <span className="font-tech text-micro text-dim tabular-nums">{pad(k + 1)}</span>
                  <span className="text-base">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Tecnologia ---------- */}
        <section className="px-6 py-section md:px-10">
          <div className="mx-auto max-w-shell">
            <TechLabel className="mb-10">Tecnologia</TechLabel>
            <div className="grid gap-10 md:grid-cols-3">
              {tech.map((group) => (
                <div key={group.label}>
                  <p className="mb-5 font-display text-lg font-semibold text-chalk">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <li
                        key={t}
                        className="border border-line px-3 py-1.5 font-tech text-micro text-ash"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {project.results && (
              <div className="mt-16 border-t border-line pt-10">
                <TechLabel className="mb-6">Resultado</TechLabel>
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

        {/* ---------- Próximo projeto ---------- */}
        <section className="border-t border-line">
          <Link
            href={`/projects/${next.slug}`}
            className="group block px-6 py-section md:px-10"
          >
            <div className="mx-auto max-w-shell">
              <TechLabel className="mb-8">Próximo projeto</TechLabel>
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
      <Footer />
    </>
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
