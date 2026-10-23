import type { Metadata } from 'next'
import { Shell } from '@/components/Shell'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'

const title = `${profile.short} — Product Owner`
const description =
  'Product Owner and IT Management student at FIAP, in São Paulo. I turn a business problem into a digital product: discovery, requirements, data analysis and building with generative AI.'

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
