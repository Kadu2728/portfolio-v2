'use client'

import { cn } from '@/lib/utils'
import { useLocale } from '@/lib/locale'
import type { ProjectStage } from '@/types'

/**
 * Etiqueta de estado do projeto.
 *
 * Publicado recebe o accent; protótipo e repositório ficam em neutro. A
 * diferença de peso é intencional: é ela que impede que um protótipo seja
 * lido como produto no ar numa passada rápida pela grade.
 */
const TONE: Record<ProjectStage, string> = {
  published: 'border-accent-line bg-accent-soft text-accent-text',
  prototype: 'border-line-strong text-ash',
  repo: 'border-line text-smoke',
}

export function StageTag({ stage, className }: { stage: ProjectStage; className?: string }) {
  const { c } = useLocale()
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center rounded-xs border px-2 py-1 font-tech text-micro uppercase',
        TONE[stage],
        className
      )}
    >
      {c.ui.projects.stages[stage]}
    </span>
  )
}
