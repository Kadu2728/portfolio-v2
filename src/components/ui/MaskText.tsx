'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Fragment, type ElementType } from 'react'
import { cn } from '@/lib/utils'
import { EASE, inView } from '@/lib/motion'

/**
 * Revelação assinatura: cada linha sobe de dentro de uma máscara.
 *
 * O recorte é o efeito — sem ele o texto só desliza, e desliza qualquer site.
 * Sob movimento reduzido, cai para um fade sem deslocamento.
 */
export function MaskText({
  lines,
  as: Tag = 'h2',
  className,
  lineClassName,
  highlightLast,
  accentIndex,
  delay = 0,
  stagger = 0.09,
  animate = false,
}: {
  lines: readonly string[]
  as?: ElementType
  className?: string
  lineClassName?: string
  /**
   * Classe aplicada só à última linha. Precisa ser por índice: cada linha vive
   * dentro da própria máscara, então um seletor :last-child pegaria todas.
   */
  highlightLast?: string
  /** Índice da linha que recebe o accent, quando não for a última. */
  accentIndex?: number
  delay?: number
  stagger?: number
  /** true = anima na montagem (hero); false = anima ao entrar em tela. */
  animate?: boolean
}) {
  const prefersReduced = useReducedMotion()
  const trigger = animate
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: inView }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        // O Fragment carrega um espaço real entre as linhas: elas são blocos
        // independentes, então sem ele o nome acessível sai grudado
        // ("construoexperiências") para quem usa leitor de tela.
        <Fragment key={line + i}>
          {i > 0 && ' '}
          <motion.span
            initial="hidden"
            {...trigger}
            className="mask-line"
          >
            <motion.span
              className={cn(
                'block',
                lineClassName,
                i === lines.length - 1 && highlightLast,
                accentIndex === i && 'text-accent'
              )}
              variants={{
                // 118%: o recorte agora tem folga embaixo, e 112% deixaria o
                // topo da letra aparecer por baixo da máscara antes da subida.
                hidden: prefersReduced ? { opacity: 0 } : { y: '118%' },
                visible: prefersReduced
                  ? { opacity: 1, transition: { duration: 0.2 } }
                  : {
                      y: '0%',
                      transition: { duration: 1.05, ease: EASE, delay: delay + i * stagger },
                    },
              }}
            >
              {line}
            </motion.span>
          </motion.span>
        </Fragment>
      ))}
    </Tag>
  )
}
