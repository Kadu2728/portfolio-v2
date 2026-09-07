'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Progresso da página: um fio de 1px no topo. Discreto por exigência — o
 * indicador informa, não decora.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 240, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[120] h-px origin-left bg-accent"
    />
  )
}
