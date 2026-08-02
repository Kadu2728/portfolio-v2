'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'

const contactLinks = [
  {
    icon:  Mail,
    label: 'E-mail',
    value: 'kacadu007@gmail.com',
    href:  'mailto:kacadu007@gmail.com',
    color: 'text-indigo-400',
    bg:    'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon:  Github,
    label: 'GitHub',
    value: 'github.com/Kadu2728',
    href:  'https://github.com/Kadu2728',
    color: 'text-zinc-300',
    bg:    'bg-white/[0.06] border-white/[0.10]',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'Carlos Eduardo Diogo',
    href:  'https://www.linkedin.com/in/carlos-eduardo-diogo-192282358',
    color: 'text-blue-400',
    bg:    'bg-blue-500/10 border-blue-500/20',
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 px-6 md:px-10">
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
            Contato
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Vamos{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Trabalhar Juntos?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Busco minha primeira oportunidade como desenvolvedor — estágio ou júnior — onde eu possa contribuir desde o primeiro dia. Me manda uma mensagem que eu respondo rápido.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Cards de contato */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6, borderColor: 'rgba(99,102,241,0.4)' }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#18181b] transition-colors duration-200 group"
                >
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${link.bg}`}>
                    <Icon size={18} className={link.color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-0.5">{link.label}</p>
                    <p className="text-white font-semibold text-sm truncate group-hover:text-indigo-300 transition-colors">{link.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 text-center flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Send size={24} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pronto para colaborar</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                Seja para um projeto full-stack, uma landing page premium ou uma integração com IA — estou disponível e animado para entregar resultado.
              </p>
            </div>
            <motion.a
              href="mailto:kacadu007@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors duration-200 shadow-lg shadow-indigo-600/25"
            >
              <Mail size={16} />
              Enviar E-mail
            </motion.a>
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-diogo-192282358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors duration-200 underline underline-offset-4"
            >
              Ou conecte-se no LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
