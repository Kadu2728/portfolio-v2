'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type GlowCardProps = {
  children:  ReactNode
  className?: string
  delay?:     number
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, borderColor: 'rgba(99,102,241,0.4)' }}
      className={cn(
        'glow-card rounded-2xl border border-white/[0.08] bg-[#18181b]',
        'transition-colors duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
