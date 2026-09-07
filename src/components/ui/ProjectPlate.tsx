'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn, pad } from '@/lib/utils'
import type { Project } from '@/types'

/**
 * Placa visual do projeto.
 *
 * Não tenho screenshot dos projetos, e inventar um mockup falso seria pior
 * que não ter: o visitante clica, abre o link e vê outra coisa. Então a
 * placa é uma composição tipográfica real — número, sigla em contorno,
 * categoria e uma régua de tecnologias.
 *
 * Quando houver captura de tela, é só trocar este componente por <Image>;
 * o restante do card não muda.
 */
export function ProjectPlate({
  project,
  index,
  size = 'md',
}: {
  project: Project
  index: number
  size?: 'md' | 'lg'
}) {
  const prefersReduced = useReducedMotion()
  const mark = project.title
    .replace(/[^A-Za-zÀ-ÿ ]/g, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden border-b border-line bg-graphite',
        size === 'lg' ? 'aspect-[16/9]' : 'aspect-[16/10]'
      )}
    >
      {/* Luz de canto — o único uso do gradiente ember, contido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.14] blur-3xl bg-ember transition-opacity duration-700 group-hover:opacity-25"
      />

      {/* Sigla em contorno, deslocada da margem — composição assimétrica */}
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={prefersReduced ? undefined : {}}
        className={cn(
          'absolute select-none font-display font-bold leading-none tracking-tighter',
          'text-transparent transition-transform duration-700 ease-expo group-hover:scale-[1.04]',
          size === 'lg' ? 'bottom-[-6%] left-[-2%] text-[13rem]' : 'bottom-[-8%] left-[-3%] text-[8rem]'
        )}
        style={{ WebkitTextStroke: '1px rgba(243,240,232,0.10)' }}
      >
        {mark}
      </motion.span>

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-tech text-micro text-accent-text tabular-nums">{pad(index)}</span>
          <span className="font-tech text-micro uppercase text-smoke">{project.category}</span>
        </div>

        <div>
          <span className="mb-3 block h-px w-10 bg-accent transition-all duration-500 ease-expo group-hover:w-20" />
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {[...project.tech.frontend, ...project.tech.backend].slice(0, 4).map((t) => (
              <li key={t} className="font-tech text-micro uppercase text-smoke">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
