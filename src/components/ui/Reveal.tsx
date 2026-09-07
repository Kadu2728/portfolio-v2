'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE, inView } from '@/lib/motion'
import { cn } from '@/lib/utils'

/** Entrada padrão de conteúdo secundário. Curta — 18px, não 60. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: prefersReduced ? 0.2 : 0.68, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Rótulo técnico: número + traço + texto. A "metadata" do laboratório. */
export function TechLabel({
  index,
  children,
  className,
}: {
  index?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3 font-tech text-micro uppercase', className)}>
      {index && <span className="text-accent-text tabular-nums">{index}</span>}
      <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
      <span className="text-smoke">{children}</span>
    </div>
  )
}
