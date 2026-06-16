'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition } from '@/lib/animations'

export function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center pt-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Background gradient blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Disponível para oportunidades
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white mb-4"
            >
              Carlos Eduardo
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Diogo Gavioli
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 font-medium mb-3"
            >
              Junior Full-Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.25 }}
              className="text-sm text-zinc-500 mb-6"
            >
              JavaScript · Python · FastAPI · PostgreSQL · React · Next.js · IA Generativa
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-base"
            >
              Estudante de GTI na <span className="text-white font-medium">FIAP</span>, apaixonado por criar interfaces modernas e back-ends robustos. Combino tecnologia, estratégia de negócio e IA Generativa para construir soluções que geram impacto real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.38 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.a
                href="#projetos"
                onClick={e => { e.preventDefault(); document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-indigo-600/25"
              >
                Ver Projetos
                <ArrowDown size={15} />
              </motion.a>

              <motion.a
                href="mailto:kacadu007@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold transition-all duration-200"
              >
                <Mail size={15} />
                Contato
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.44 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/Kadu2728"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Carlos Eduardo"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 text-sm"
              >
                <Github size={18} />
                <span className="hidden sm:inline">Kadu2728</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="https://www.linkedin.com/in/carlos-eduardo-diogo-192282358"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Carlos Eduardo"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 text-sm"
              >
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="mailto:kacadu007@gmail.com"
                aria-label="Email de Carlos Eduardo"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 text-sm"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">kacadu007@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Foto */}
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Anel de glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10">
                {/* Placeholder iniciais — fica atrás da foto */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white text-5xl font-black select-none z-0">
                  KD
                </div>
                {/* Sua foto — coloque profile.jpg dentro de /public */}
                <Image
                  src="/profile.jpg"
                  alt="Foto de Carlos Eduardo Diogo Gavioli"
                  fill
                  priority
                  className="object-cover relative z-10"
                />
              </div>

              {/* Badge FIAP */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute -bottom-2 -right-2 bg-[#18181b] border border-white/10 rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-400 shadow-xl"
              >
                FIAP · GTI
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: 17, suffix: '+', label: 'Certificados' },
            { value: 6,  suffix: '+', label: 'Projetos' },
            { value: 5,  suffix: '+', label: 'Tecnologias' },
            { value: 3,  suffix: '+', label: 'Anos de Estudo' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <span className="text-3xl md:text-4xl font-black text-white">
                <AnimatedCounterInline target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-zinc-500 mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedCounterInline({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref               = useRef<HTMLSpanElement>(null)
  const isInView          = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    const animate = (time: number) => {
      const elapsed  = time - start
      const progress = Math.min(elapsed / 1500, 1)
      const eased    = 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}