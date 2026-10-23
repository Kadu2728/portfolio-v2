import type { Certificate, CertificateArea } from '@/types'

/**
 * Certificações do currículo, agrupadas por área de aplicação.
 *
 * Sem contagem total e sem carga horária: o que importa é em que o estudo
 * foi aplicado, e número redondo sem comprovação só convida a pergunta
 * errada numa entrevista.
 */
export const certificates: Certificate[] = [
  // IA e Machine Learning
  { title: 'Building with the Claude API', institution: 'Anthropic', area: 'ai' },
  { title: 'Claude Code in Action', institution: 'Anthropic', area: 'ai' },
  { title: 'Model Context Protocol (MCP)', institution: 'Anthropic', area: 'ai' },
  { title: 'AI Fluency', institution: 'Anthropic', area: 'ai' },
  { title: 'AI-Native Software Engineering', institution: 'Alura', area: 'ai' },
  { title: 'Inteligência Artificial Responsável', institution: 'FIAP', area: 'ai' },
  { title: 'Chatbots e Agentes Autônomos (Agentic AI)', institution: 'FIAP', area: 'ai' },
  { title: 'Machine Learning Foundations', institution: 'AWS', area: 'ai' },
  {
    title: 'Fundamentos para uma Carreira em IA Generativa',
    institution: 'Microsoft · LinkedIn',
    area: 'ai',
  },

  // Dados e BI
  { title: 'Big Data & Analytics', institution: 'FIAP', area: 'data' },
  { title: 'Banco de Dados Oracle', institution: 'FIAP', area: 'data' },
  { title: 'SQL', institution: 'Alura', area: 'data' },
  { title: 'Bootcamp Excel com IA e Claude', institution: 'Santander', area: 'data' },

  // Tecnologia e Cloud
  { title: 'Engenharia de Software', institution: 'FIAP', area: 'tech' },
  { title: 'Python Development', institution: 'FIAP', area: 'tech' },
  { title: 'Front-End', institution: 'FIAP', area: 'tech' },
  { title: 'AWS SimuLearn: Cloud Computing Essentials', institution: 'AWS', area: 'tech' },
  { title: 'Segurança da Informação', institution: 'Alura', area: 'tech' },

  // Outros
  { title: 'Marketing em Plataformas de Social Media', institution: 'FIAP', area: 'other' },
  { title: 'Publicidade Digital', institution: 'Santander', area: 'other' },
  { title: 'Storytelling', institution: 'Santander', area: 'other' },
]

/** Ordem de exibição dos grupos — IA primeiro, por ser o diferencial. */
export const areaOrder: readonly CertificateArea[] = ['ai', 'data', 'tech', 'other'] as const

export const highlights = {
  anthropicFocus: 'Engenharia de IA aplicada a produto',
  /** Quatro certificações Anthropic nomeadas no currículo. */
  anthropicCount: '4',
}
