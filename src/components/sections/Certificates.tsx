'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MaskText } from '@/components/ui/MaskText'
import { TechLabel, Reveal } from '@/components/ui/Reveal'
import { EASE, inView } from '@/lib/motion'
import { certificates, highlights, institutionOrder } from '@/data/certificates'

/**
 * FORMAÇÃO — densa de propósito.
 *
 * Certificado é volume, não narrativa: o valor está na quantidade e na
 * procedência. Por isso vira uma tabela técnica compacta em vez de cards
 * grandes, que roubariam peso dos projetos logo acima.
 */
export function Certificates() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="formacao"
      aria-labelledby="formacao-titulo"
      className="border-t border-line bg-carbon py-section"
    >
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <TechLabel index="05" className="mb-10">
          Formação contínua
        </TechLabel>
        <MaskText
          as="h2"
          lines={['Aprender é parte', 'do trabalho.']}
          className="font-display text-3xl font-bold text-chalk"
        />
        <p id="formacao-titulo" className="sr-only">
          Certificados
        </p>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-text text-lg text-ash">
            {highlights.total} certificados entre FIAP, Alura, Anthropic, AWS e Santander Open
            Academy — com especialização em {highlights.anthropicFocus}.
          </p>
        </Reveal>

        {/* Destaque de especialização: o diferencial real da lista */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col justify-between gap-6 border border-accent-line bg-accent-soft p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-bold text-chalk">
                Especialização Anthropic &amp; Claude
              </p>
              <p className="mt-2 font-tech text-micro uppercase text-accent-text">
                {highlights.anthropicFocus}
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ash">
              Especialização em IA aplicada a software — o que sustenta o assistente do CEAP
              Connect e a geração multimodal do VendIA.
            </p>
          </div>
        </Reveal>

        {/* Tabela por instituição */}
        <div className="mt-14 border-t border-line">
          {institutionOrder.map((inst) => {
            const list = certificates.filter((c) => c.institution === inst)
            if (!list.length) return null
            return (
              <motion.div
                key={inst}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.55, ease: EASE }}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-[200px_1fr] md:gap-10"
              >
                {/* Só o nome da instituição. A contagem por grupo expunha
                    números pequenos ("AWS 1") que enfraquecem o total. */}
                <div>
                  <p className="font-display text-lg font-semibold text-chalk">{inst}</p>
                </div>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {list.map((c) => (
                    <li
                      key={c.title}
                      className="border border-line px-3 py-1.5 font-tech text-micro text-ash transition-colors duration-200 hover:border-line-strong hover:text-chalk"
                    >
                      {c.title}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
