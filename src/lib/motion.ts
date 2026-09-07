import type { Transition, Variants } from 'framer-motion'

/**
 * MOTION SYSTEM
 *
 * Uma curva, três velocidades. Toda animação do site sai daqui — é o que
 * impede o resultado de virar uma coleção de efeitos sem parentesco.
 *
 *   fast  → microinteração (hover, cursor, foco). Responde, não performa.
 *   mid   → revelação de seção. O conteúdo assenta.
 *   slow  → storytelling (hero, transições longas). Tem tempo de respirar.
 */
export const EASE = [0.16, 1, 0.3, 1] as const
export const EASE_POWER = [0.65, 0, 0.35, 1] as const

export const fast: Transition = { duration: 0.2, ease: EASE }
export const mid: Transition = { duration: 0.62, ease: EASE }
export const slow: Transition = { duration: 1.1, ease: EASE }

export const spring: Transition = { type: 'spring', stiffness: 150, damping: 20, mass: 0.6 }
export const springSoft: Transition = { type: 'spring', stiffness: 90, damping: 18, mass: 0.8 }

/** Linha de texto subindo de dentro de uma máscara. O reveal assinatura. */
export const maskUp: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: slow },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: mid },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: mid },
}

/** Corte que abre da esquerda — usado em imagens e blocos grandes. */
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: slow },
}

export const stagger = (each = 0.06, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren: delay } },
})

/**
 * Gatilho de entrada.
 *
 * `amount` em vez de `margin` negativa: encolher a raiz cria uma faixa estreita
 * de disparo, e num scroll rápido o elemento a atravessa entre dois callbacks
 * do IntersectionObserver. Com `once: true` isso é definitivo — a seção fica
 * presa em opacity 0 para sempre. Um limiar baixo dispara com qualquer pedaço
 * do elemento em tela e não tem esse modo de falha.
 */
export const inView = { once: true, amount: 0.1 } as const

/** Sem deslocamento para quem pede movimento reduzido; só presença. */
export const reduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18 } },
}

/** Divide um texto em palavras para animar cada uma isoladamente. */
export const toWords = (text: string) => text.split(' ')
