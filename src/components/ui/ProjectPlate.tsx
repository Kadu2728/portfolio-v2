'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn, pad } from '@/lib/utils'
import type { Project } from '@/types'

/**
 * Placa visual do projeto.
 *
 * Com captura de tela, mostra o produto — é o que converte. Sem ela, cai
 * numa composição tipográfica em vez de um retângulo vazio: número, sigla
 * em contorno e a régua de tecnologias.
 *
 * A imagem escurece um pouco no repouso e abre no hover; assim o texto do
 * card continua sendo o que guia a leitura da grade.
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
      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={`Interface do projeto ${project.title}`}
            fill
            sizes={size === 'lg' ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover object-top brightness-[0.72] saturate-[0.95] transition-all duration-700 ease-expo group-hover:scale-[1.03] group-hover:brightness-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/35 to-transparent transition-opacity duration-700 group-hover:opacity-60"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.14] blur-3xl bg-ember transition-opacity duration-700 group-hover:opacity-25"
        />
      )}

      {/* Sigla em contorno: só entra quando não há captura de tela */}
      {!project.image && (
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
      )}

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
