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
              Sou Carlos Eduardo Diogo Gavioli, desenvolvedor full-stack baseado em São Paulo. No último ano construí e publiquei <span className="text-white font-medium">seis aplicações full-stack de ponta a ponta, sozinho</span> — do modelo de dados à interface, incluindo o deploy. Curso Gestão de Tecnologia da Informação na <span className="text-white font-medium">FIAP</span> enquanto construo produtos reais com Next.js, React, TypeScript, FastAPI e PostgreSQL.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.25 }}
              className="text-zinc-400 leading-relaxed mb-6"
            >
              Aplico <span className="text-white font-medium">IA Generativa</span> e prompt engineering em produtos de verdade, não em experimentos — assistentes que respondem em streaming, geração multimodal a partir de imagem. No momento estou aprofundando back-end, arquitetura em nuvem e IA Generativa aplicada a software. Busco minha primeira oportunidade como desenvolvedor, estágio ou júnior, onde eu possa contribuir desde o primeiro dia e continuar aprendendo rápido.
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

            {/* Experiência — Full Stack */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#18181b] hover:border-indigo-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Experiência</p>
                  <h3 className="text-white font-bold text-base">Projetos Independentes</h3>
                </div>
              </div>
              <p className="text-zinc-300 font-semibold text-sm mb-1">Full Stack Developer · Autônomo</p>
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                <Calendar size={12} />
                <span>Jul 2025 – Presente · São Paulo, SP · Remoto</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                Projeto, construo e publico aplicações web full-stack de ponta a ponta — do UX/UI e front-end à API REST, banco de dados e produção. Todos os projetos desenvolvidos sozinho, do conceito ao produto no ar.
              </p>

              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wide mb-2">Projetos selecionados</p>
              <ul className="flex flex-col gap-2.5 mb-3">
                <li className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">CEAP Connect</span> — plataforma gamificada de experiência do candidato (jornada, missões, conquistas) criada para reduzir a desistência durante processos seletivos. Apresentada em formato de pitch ao diretor geral do CEAP e aprovada para uma segunda rodada de avaliação.
                </li>
                <li className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">VendIA</span> — SaaS de IA Generativa para vendedores de marketplace: gerador automático de anúncios, sugestão de preço e respondedor de perguntas.
                </li>
                <li className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">VESTORA</span> — gestor de carteira de investimentos (ações, FIIs e ETFs) com autenticação JWT, conta demonstrativa e dashboard interativo.
                </li>
                <li className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">FinPilot</span> — SaaS de gestão financeira para autônomos e pequenos negócios.
                </li>
              </ul>

              <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                <span className="text-zinc-400 font-medium">Foco:</span> interfaces responsivas, APIs REST seguras com JWT, modelagem de dados relacional e deploy com CI/CD (Vercel, Render, Railway e Neon).
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Atual
              </div>
            </div>

            {/* Experiência — Panco */}
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
                <p className="text-zinc-500 text-xs mt-0.5">Fluente</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
