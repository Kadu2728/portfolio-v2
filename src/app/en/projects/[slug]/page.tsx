import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/CaseStudy'
import { getProjectIn } from '@/data/content'
import { projects } from '@/data/projects'
import { siteUrl } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

/** Os slugs são os mesmos nos dois idiomas: são identificadores, não texto. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectIn('en', slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `${siteUrl}/en/projects/${slug}`,
      languages: {
        'pt-BR': `${siteUrl}/projects/${slug}`,
        en: `${siteUrl}/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: 'article',
      locale: 'en_US',
    },
  }
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  if (!getProjectIn('en', slug)) notFound()
  return <CaseStudy locale="en" slug={slug} />
}
