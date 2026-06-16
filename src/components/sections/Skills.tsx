'use client'

import { motion } from 'framer-motion'
import { GlowCard } from '@/components/ui/GlowCard'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'

type SkillGroup = {
  category: string
  icon:     string
  skills:   string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Front-End',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'UI Development'],
  },
  {
    category: 'Back-End',
    icon: '⚙️',
    skills: ['Python', 'FastAPI', 'SQLAlchemy', 'REST APIs', 'JWT', 'Node.js'],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Oracle Database', 'SQL', 'Big Data'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'VS Code', 'Android'],
  },
  {
    category: 'Inteligência Artificial',
    icon: '🤖',
    skills: ['IA Generativa', 'Prompt Engineering', 'Agentic AI', 'AI-Native Engineering', 'LLMs'],
  },
  {
    category: 'Outros',
    icon: '📊',
    skills: ['Digital Marketing', 'Social Media', 'Segurança da Informação', 'Data Governance', 'UX/UI Design'],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 md:py-32 px-6 md:px-10">
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
            Tecnologias
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Minhas{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Stack completa do front ao back, com foco em criar produtos modernos, escaláveis e com ótima experiência do usuário.
          </motion.p>
        </motion.div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <GlowCard key={group.category} delay={i * 0.08} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={group.category}>{group.icon}</span>
                <h3 className="font-bold text-white text-base">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:border-indigo-500/50 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <h3 className="text-sm font-semibold text-zinc-400 mb-4 tracking-widest uppercase">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Resolução de Problemas', 'Trabalho em Equipe', 'Adaptabilidade', 'Pensamento Crítico', 'Comunicação', 'Aprendizado Contínuo', 'Proatividade', 'Inglês Intermediário'].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-indigo-500/20 bg-indigo-500/10 text-indigo-300"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
