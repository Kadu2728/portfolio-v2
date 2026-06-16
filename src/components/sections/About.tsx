'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'

export function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Texto */}
          <div>
            <motion.p
              variants={fadeUp}
              transition={defaultTransition}
              className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Sobre mim
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6"
            >
              Desenvolvedor apaixonado por{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                tecnologia e inovação
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="text-zinc-400 leading-relaxed mb-4"
            >
              Sou Carlos Eduardo Diogo Gavioli, desenvolvedor Full-Stack Júnior baseado em São Paulo. Estou cursando Gestão de Tecnologia da Informação na <span className="text-white font-medium">FIAP</span>, e tenho me dedicado a construir soluções web modernas que combinam design premium com performance real.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.25 }}
              className="text-zinc-400 leading-relaxed mb-6"
            >
              Tenho forte interesse em <span className="text-white font-medium">IA Generativa</span> e Engenharia de Software com IA, aplicando essas tecnologias no meu fluxo de desenvolvimento. Sou comunicativo, colaborativo e movido por desafios — sempre buscando aprender algo novo e contribuir de forma efetiva em equipe.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="flex items-center gap-2 text-zinc-500 text-sm"
            >
              <MapPin size={14} className="text-indigo-400" />
              <span>São Paulo, SP · Brasil</span>
            </motion.div>
          </div>

          {/* Cards de formação e experiência */}
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Formação */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#18181b] hover:border-indigo-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Formação Acadêmica</p>
                  <h3 className="text-white font-bold text-base">FIAP</h3>
                </div>
              </div>
              <p className="text-zinc-300 font-semibold text-sm mb-1">GTI — Gestão de Tecnologia da Informação</p>
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <Calendar size={12} />
                <span>Fev 2026 – Jul 2028</span>
              </div>
            </div>

            {/* Experiência */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#18181b] hover:border-indigo-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Experiência</p>
                  <h3 className="text-white font-bold text-base">Panco</h3>
                </div>
              </div>
              <p className="text-zinc-300 font-semibold text-sm mb-1">Profissional de Merchandising</p>
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                <Calendar size={12} />
                <span>Jan 2026 – Presente · São Paulo, SP</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Atual
              </div>
            </div>

            {/* Idiomas */}
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-6">
              <div className="text-center">
                <p className="text-white font-bold text-sm">🇧🇷 Português</p>
                <p className="text-zinc-500 text-xs mt-0.5">Nativo</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-white font-bold text-sm">🇺🇸 Inglês</p>
                <p className="text-zinc-500 text-xs mt-0.5">Intermediário</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
