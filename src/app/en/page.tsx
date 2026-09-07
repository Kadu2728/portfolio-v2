import type { Metadata } from 'next'
import { Shell } from '@/components/Shell'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'

const title = `${profile.short} — Full-Stack Developer`
const description =
  'Full-stack developer in São Paulo. I build digital products end to end — from the data model to the interface. Next.js, React, TypeScript, FastAPI and PostgreSQL.'

export const metadata: Metadata = {
  title,
  description,
  // hreflang diz ao buscador que as duas páginas são a mesma em idiomas
  // diferentes — sem isso elas competem entre si na indexação.
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: { 'pt-BR': siteUrl, en: `${siteUrl}/en` },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/en`,
    title,
    description,
  },
}

export default function HomeEn() {
  return <Shell locale="en" />
}
