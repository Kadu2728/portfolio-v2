'use client'

import { useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Atração magnética: o elemento acompanha o ponteiro dentro dos próprios
 * limites e volta com mola quando o mouse sai.
 *
 * `strength` fica baixo de propósito. Passar de ~0.4 faz o botão "fugir" do
 * cursor, que é justamente o oposto do efeito desejado.
 */
export function Magnetic({
  children,
  strength = 0.32,
  className,
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const prefersReduced = useReducedMotion()

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
