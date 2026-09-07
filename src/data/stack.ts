import type { StackGroup } from '@/types'

export const stackGroups: StackGroup[] = [
  {
    id: 'frontend',
    label: 'Front-End',
    caption: 'A camada que a pessoa toca.',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'backend',
    label: 'Back-End',
    caption: 'A camada que sustenta a regra.',
    items: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'JWT', 'Alembic'],
  },
  {
    id: 'ai',
    label: 'IA & Ferramentas',
    caption: 'A camada que acelera o resto.',
    items: [
      'Generative AI',
      'AI Agents',
      'Prompt Engineering',
      'Automation',
      'Git',
      'GitHub',
    ],
  },
]

/** Fita que atravessa a tela. Repetida em loop, sem hierarquia de importância. */
export const marquee = [
  'Next.js',
  'React',
  'TypeScript',
  'FastAPI',
  'Python',
  'PostgreSQL',
  'Tailwind',
  'Framer Motion',
  'SQLAlchemy',
  'JWT',
  'Alembic',
  'Generative AI',
  'AI Agents',
  'Prompt Engineering',
  'Git',
  'Vercel',
  'Render',
  'Neon',
]
