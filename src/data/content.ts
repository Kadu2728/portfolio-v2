import type { Chapter, Project, StackGroup } from '@/types'
import type { Service } from '@/data/services'
import type { UIStrings } from '@/data/ui'

import { ptUI, enUI } from '@/data/ui'
import { chapters, profile } from '@/data/profile'
import { services, servicesIntro } from '@/data/services'
import { projects } from '@/data/projects'
import { stackGroups, marquee } from '@/data/stack'
import { enChapters, enProfile, enProjects, enServices, enServicesIntro, enStack } from '@/data/en'

export type Bundle = {
  ui: UIStrings
  chapters: Chapter[]
  projects: Project[]
  services: Service[]
  servicesIntro: string
  stack: StackGroup[]
  marquee: readonly string[]
  /** Só o que muda de idioma; e-mail, telefone e links vêm de `profile`. */
  role: string
  location: string
  education: readonly { org: string; course: string; period: string }[]
  experience: readonly {
    org: string
    role: string
    period: string
    place: string
    body: string
    current?: boolean
  }[]
  languages: readonly { code: string; name: string; level: string }[]
}

const pt: Bundle = {
  ui: ptUI,
  chapters,
  projects,
  services,
  servicesIntro,
  stack: stackGroups,
  marquee,
  role: profile.role,
  location: profile.location,
  education: profile.education,
  experience: profile.experience,
  languages: profile.languages,
}

const en: Bundle = {
  ui: enUI,
  chapters: enChapters,
  projects: enProjects,
  services: enServices,
  servicesIntro: enServicesIntro,
  stack: enStack,
  marquee,
  role: enProfile.role,
  location: enProfile.location,
  education: enProfile.education,
  experience: enProfile.experience,
  languages: enProfile.languages,
}

export const bundles = { pt, en } as const

export const getContent = (locale: 'pt' | 'en'): Bundle => bundles[locale]

export const getProjectIn = (locale: 'pt' | 'en', slug: string) =>
  bundles[locale].projects.find((p) => p.slug === slug)
