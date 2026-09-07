'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Fita infinita. Duplica o conteúdo e translada -50%: quando a primeira cópia
 * sai, a segunda já está no lugar exato, então o loop não tem emenda.
 *
 * Anima só `transform` — nada de `left`, que forçaria layout a cada frame.
 */
export function Marquee({
  items,
  speed = 38,
  reverse = false,
  className,
}: {
  items: readonly string[]
  speed?: number
  reverse?: boolean
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  const track = [...items, ...items]

  return (
    <div className={cn('fade-edges overflow-hidden', className)} aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
        animate={prefersReduced ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl font-medium text-smoke transition-colors duration-300 hover:text-chalk">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
