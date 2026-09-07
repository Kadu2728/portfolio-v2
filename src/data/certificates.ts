import type { Certificate } from '@/types'

export const certificates: Certificate[] = [
  { title: 'Front End', institution: 'FIAP' },
  { title: 'Android', institution: 'FIAP' },
  { title: 'Algoritmos: Aprenda a Programar', institution: 'FIAP' },
  { title: 'IA Responsável', institution: 'FIAP' },
  { title: 'Agentes Autônomos (Agentic AI)', institution: 'FIAP' },
  { title: 'IA Generativa', institution: 'FIAP' },
  { title: 'Big Data & Analytics', institution: 'FIAP' },
  { title: 'Big Data', institution: 'FIAP' },
  { title: 'Banco de Dados Oracle', institution: 'FIAP' },
  { title: 'Segurança da Informação', institution: 'FIAP' },
  { title: 'Formação Social e Sustentabilidade', institution: 'FIAP' },
  { title: 'Marketing em Plataformas de Social Media', institution: 'FIAP' },

  { title: 'AI-Native Software Engineering', institution: 'Alura' },
  { title: 'Iniciando em Dados: Aprendendo Python', institution: 'Alura' },
  { title: 'SQL: Consultas e Manipulação de Dados', institution: 'Alura' },
  { title: 'Engenharia de Software na Era da IA', institution: 'Alura' },
  { title: 'Segurança da Informação para Todos', institution: 'Alura' },
  { title: 'IA: Explorando IA Generativa', institution: 'Alura' },

  { title: 'AI Fluency: Framework & Foundations', institution: 'Anthropic' },

  { title: 'AWS SimuLearn: Fundamentos da Computação em Nuvem', institution: 'AWS' },
  { title: 'Publicidade Digital: Dados, IA e Legalidade', institution: 'Santander Open Academy' },
  { title: 'Storytelling para Marketing Digital', institution: 'Santander Open Academy' },
]

/** Ordem de exibição dos grupos — Anthropic em destaque, por especialização. */
export const institutionOrder = [
  'Anthropic',
  'FIAP',
  'Alura',
  'AWS',
  'Santander Open Academy',
] as const

export const highlights = {
  total: '40+',
  anthropic: '13+',
  anthropicFocus: 'Engenharia de IA e Engenharia de Prompt',
}
