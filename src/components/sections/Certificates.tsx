'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'
import type { Certificate } from '@/types'

const certificates: Certificate[] = [
  // FIAP
  { title: 'Front End',                                institution: 'FIAP'  },
  { title: 'Android',                                  institution: 'FIAP'  },
  { title: 'IA Responsável',                           institution: 'FIAP'  },
  { title: 'Formação Social e Sustentabilidade',       institution: 'FIAP'  },
  { title: 'Algoritmos: Aprenda a Programar',          institution: 'FIAP'  },
  { title: 'Big Data & Analytics',                     institution: 'FIAP'  },
  { title: 'Big Data',                                 institution: 'FIAP'  },
  { title: 'Banco de Dados Oracle',                    institution: 'FIAP'  },
  { title: 'Marketing em Plataformas de Social Media', institution: 'FIAP'  },
  { title: 'Agentes Autônomos (Agentic AI)',           institution: 'FIAP'  },
  { title: 'IA Generativa',                            institution: 'FIAP'  },
  { title: 'Segurança da Informação',                  institution: 'FIAP'  },
  // Alura
  { title: 'AI-Native Software Engineering (Trilha)',  institution: 'Alura' },
  { title: 'IA: Explorando IA Generativa',             institution: 'Alura' },
  { title: 'Engenharia de Software na Era da IA',      institution: 'Alura' },
  { title: 'Segurança da Informação para Todos',       institution: 'Alura' },
  { title: 'SQL: Consultas e Manipulação de Dados',    institution: 'Alura' },
  { title: 'Iniciando em Dados: Aprendendo Python',    institution: 'Alura' },
  // AWS
  { title: 'AWS SimuLearn: Fundamentos da Computação em Nuvem', institution: 'AWS' },
  // Santander Open Academy
  { title: 'Publicidade Digital: Dados, IA e Legalidade', institution: 'Santander Open Academy' },
  { title: 'Storytelling para Marketing Digital',         institution: 'Santander Open Academy' },
]

const fiapCerts  = certificates.filter(c => c.institution === 'FIAP')
const aluraCerts = certificates.filter(c => c.institution === 'Alura')
const outrosCerts = certificates.filter(
  c => c.institution !== 'FIAP' && c.institution !== 'Alura'
)

export function Certificates() {
  return (
    <section id="certificados" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Formação
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Certificados &{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Cursos
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            {certificates.length} certificados de aprendizado contínuo em FIAP, Alura, AWS e Santander
          </motion.p>
        </motion.div>

        {/* FIAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
              <span className="text-sm font-black text-pink-400">F</span>
            </div>
            <h3 className="text-lg font-bold text-white">FIAP — Nano Courses</h3>
            <span className="ml-auto text-xs text-zinc-500 font-medium">{fiapCerts.length} certificados</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fiapCerts.map((cert, i) => (
              <GlowCard key={cert.title} delay={i * 0.05} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Award size={16} className="text-pink-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>

        {/* Alura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-sm font-black text-blue-400">A</span>
            </div>
            <h3 className="text-lg font-bold text-white">Alura</h3>
            <span className="ml-auto text-xs text-zinc-500 font-medium">{aluraCerts.length} certificados</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aluraCerts.map((cert, i) => (
              <GlowCard key={cert.title} delay={i * 0.05} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Award size={16} className="text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>

        {/* AWS e Santander — instituições com um ou dois certificados cada,
            agrupadas num bloco só para não criar seções de uma linha. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <span className="text-sm font-black text-amber-400">+</span>
            </div>
            <h3 className="text-lg font-bold text-white">AWS & Santander</h3>
            <span className="ml-auto text-xs text-zinc-500 font-medium">{outrosCerts.length} certificados</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrosCerts.map((cert, i) => (
              <GlowCard key={cert.title} delay={i * 0.05} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Award size={16} className="text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">{cert.title}</p>
                    <p className="text-xs text-zinc-500 mt-1">{cert.institution}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>

        {/* Banner */}
      </div>
    </section>
  )
}