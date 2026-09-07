import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  // As duas versões entram, cada uma apontando a alternativa por hreflang.
  const alt = (pt: string, en: string) => ({ languages: { 'pt-BR': pt, en } })

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alt(siteUrl, `${siteUrl}/en`),
    },
    {
      url: `${siteUrl}/en`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: alt(siteUrl, `${siteUrl}/en`),
    },
    ...projects.flatMap((p) => {
      const pt = `${siteUrl}/projects/${p.slug}`
      const en = `${siteUrl}/en/projects/${p.slug}`
      return [
        { url: pt, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.8, alternates: alt(pt, en) },
        { url: en, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.7, alternates: alt(pt, en) },
      ]
    }),
  ]
}
