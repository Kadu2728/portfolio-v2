'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Cursor customizado — deliberadamente discreto.
 *
 * Um ponto pequeno que vira anel ao encostar em algo clicável. Sem rótulo,
 * sem escala exagerada: a função é confirmar alvo, não performar.
 *
 * Detecta elementos interativos por seletor, sem exigir atributo em cada
 * componente — assim nada precisa "se cadastrar" para funcionar.
 *
 * O cursor nativo continua visível por baixo. Escondê-lo quebra a expectativa
 * de quem depende dele e não acrescenta nada a um efeito desta escala.
 */
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary'

export function Cursor() {
  const [on, setOn] = useState(false)
  const [hot, setHot] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 1000, damping: 45, mass: 0.28 })
  const sy = useSpring(y, { stiffness: 1000, damping: 45, mass: 0.28 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return
    setOn(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const t = e.target as HTMLElement | null
      setHot(!!t?.closest?.(INTERACTIVE))
    }
    const out = () => setVisible(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', out)
    }
  }, [x, y])

  if (!on) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.span
        animate={{
          width: hot ? 34 : 7,
          height: hot ? 34 : 7,
          borderWidth: hot ? 1 : 0,
          backgroundColor: hot ? 'rgba(224,74,63,0)' : '#E04A3F',
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className="block rounded-full border-accent"
      />
    </motion.div>
  )
}
