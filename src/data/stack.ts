import type { StackGroup } from '@/types'

/**
 * COMPETÊNCIAS — na ordem do currículo.
 *
 * Produto vem primeiro e a base técnica vem por último, de propósito: a
 * técnica é diferencial dentro de uma vaga de produto, não a identidade.
 */
export const stackGroups: StackGroup[] = [
  {
    id: 'produto',
    label: 'Produto e Negócios',
    caption: 'Do problema ao que entra no backlog.',
    items: [
      'Product Ownership',
      'Product Discovery',
      'Análise de negócios',
      'Levantamento de requisitos',
      'User stories',
      'Priorização de backlog',
      'Roadmap',
      'MVP',
      'Regras de negócio',
      'Comunicação com stakeholders',
      'UX/UI',
    ],
  },
  {
    id: 'dados',
    label: 'Dados e BI',
    caption: 'O que sustenta a decisão de prioridade.',
    items: [
      'SQL',
      'PostgreSQL',
      'Modelagem de dados relacional',
      'Análise de funil',
      'Definição de indicadores',
      'Dashboards',
      'Excel',
      'Python',
    ],
  },
  {
    id: 'ia',
    label: 'Inteligência Artificial',
    caption: 'Como eu tiro ideia do papel.',
    items: [
      'IA generativa',
      'Engenharia de prompt',
      'Especificação de produtos com IA',
      'Agentes de IA',
      'Integração de LLMs (Gemini e Claude)',
      'Model Context Protocol (MCP)',
      'IA responsável',
    ],
  },
  {
    id: 'projetos',
    label: 'Projetos e Governança',
    caption: 'O método e o que ele precisa respeitar.',
    items: [
      'Scrum',
      'Metodologias ágeis',
      'Gestão de projetos',
      'Fundamentos de PMO',
      'Governança de TI',
      'COBIT 2019',
      'ISO/IEC 38500',
    ],
  },
  {
    id: 'tecnica',
    label: 'Base técnica',
    caption: 'O diferencial: eu consigo construir.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'APIs REST',
      'JWT',
      'Git/GitHub',
      'Testes automatizados',
      'Vercel · Render · Neon',
    ],
  },
]

/** Fita que atravessa a tela. Repetida em loop, sem hierarquia de importância. */
export const marquee = [
  'Product Discovery',
  'Backlog',
  'User Stories',
  'Roadmap',
  'Análise de funil',
  'SQL',
  'PostgreSQL',
  'Indicadores',
  'Dashboards',
  'Scrum',
  'Governança de TI',
  'IA generativa',
  'Engenharia de prompt',
  'Gemini',
  'Claude',
  'MCP',
  'Next.js',
  'FastAPI',
]
