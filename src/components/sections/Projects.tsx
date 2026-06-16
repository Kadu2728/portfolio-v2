'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    title:       'FinPilot',
    description: 'Plataforma SaaS de gestão financeira full-stack com autenticação JWT, dashboard interativo e relatórios em tempo real. Backend em FastAPI + PostgreSQL hospedado no Railway, frontend em Vercel.',
    tags:        ['FastAPI', 'PostgreSQL', 'Python', 'JavaScript', 'REST API', 'JWT', 'Railway', 'Vercel'],
    link:        'https://finpilot-omega.vercel.app',
    featured:    true,
  },
  {
    title:       'ControlCash',
    description: 'App de controle de finanças pessoais com gráficos interativos via Chart.js, persistência de dados no LocalStorage e interface responsiva 100% vanilla.',
    tags:        ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'LocalStorage'],
    featured:    true,
  },
  {
    title:       'InvestBem',
    description: 'Landing page moderna para fintech brasileira de investimentos. Design premium dark com animações de scroll, seção de planos e CTA otimizado para conversão.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Responsive'],
  },
  {
    title:       'InvestEdu',
    description: 'Plataforma educacional de finanças pessoais com foco em jovens. Interface limpa com navegação fluida e seções de cursos e depoimentos.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'UX/UI'],
  },
  {
    title:       'Valore Capital',
    description: 'Landing page institucional para gestora de capital com visual sofisticado, tipografia elegante e layout que transmite credibilidade e confiança.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'Design Premium'],
  },
  {
    title:       'Monteiro & Associados',
    description: 'Site institucional para escritório de advocacia. Layout sóbrio e profissional com paleta dourada, seções de áreas de atuação e formulário de contato.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'UX/UI'],
  },
  {
    title:       'Barbearia FINOViSÚ',
    description: 'Site completo para barbearia com agendamento online, galeria de cortes e design urbano premium. Totalmente responsivo para mobile.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title:       'Dani Brigs Confeitaria',
    description: 'Site de confeitaria artesanal para @danielabrigs em Sapopemba/SP. Cardápio digital, galeria de produtos e integração com WhatsApp.',
    tags:        ['HTML', 'CSS', 'JavaScript', 'Mobile-First'],
  },
  {
    title:       'SatAgro',
    description: 'Projeto de análise agrícola com dados via Python/openpyxl, gerando relatórios em PDF e apresentações PPTX com insights de campanha de marketing.',
    tags:        ['Python', 'openpyxl', 'PDF', 'Data Analysis'],
  },
]

export function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-10 bg-white/[0.01]">
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
            Portfólio
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Projetos{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              em Destaque
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Do SaaS full-stack a landing pages premium — cada projeto construído com foco em performance, design e experiência do usuário.
          </motion.p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <GlowCard key={project.title} delay={i * 0.1} className="p-7 flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-yellow-400 font-semibold tracking-wide uppercase">Destaque</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Ver no GitHub" className="text-zinc-500 hover:text-white transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Visitar projeto" className="text-zinc-500 hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <GlowCard key={project.title} delay={i * 0.07} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 ml-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-600 hover:text-white transition-colors">
                        <Github size={14} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Link" className="text-zinc-600 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Kadu2728"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200"
          >
            <Github size={16} />
            Ver todos os repositórios no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
