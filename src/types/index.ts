export type NavItem = { label: string; href: string }

export type Institution =
  | 'FIAP'
  | 'Alura'
  | 'AWS'
  | 'Santander'
  | 'Anthropic'
  | 'Microsoft · LinkedIn'

/**
 * Área antes de instituição: o agrupamento por tema diz em que o estudo foi
 * aplicado, que é a pergunta de quem contrata. Por instituição, a lista só
 * mostrava de onde veio o certificado.
 */
export type CertificateArea = 'ai' | 'data' | 'tech' | 'other'

export type Certificate = {
  title: string
  institution: Institution
  area: CertificateArea
}

export type ProjectCategory = 'Produto' | 'Plataforma' | 'Aplicação' | 'Experiência'

/**
 * Protótipo e produto publicado não são a mesma coisa, e misturar os dois é
 * a forma mais rápida de perder credibilidade numa entrevista.
 */
/** Chave, não rótulo: o texto exibido vem de ui.projects.stages por idioma. */
export type ProjectStage = 'published' | 'prototype' | 'repo'

/** Bloco de métrica exibido no case: valor grande + rótulo pequeno. */
export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  title: string
  /** Uma linha. É o que o usuário lê enquanto o card passa na horizontal. */
  tagline: string
  year: string
  category: ProjectCategory
  /** Publicado ou protótipo. Aparece como etiqueta no card e no case. */
  stage: ProjectStage
  role: string
  /** Featured = ganha o bloco de destaque. */
  featured?: boolean
  /**
   * Projeto anterior ao posicionamento atual. Continua no portfólio, numa
   * seção secundária — tirar do ar apagaria o histórico de aprendizado.
   */
  early?: boolean
  /** Captura de tela em /public/projects. Ausente = cai na placa tipográfica. */
  image?: string

  overview: string
  challenge: string
  solution: string
  /** O ângulo de UX/produto — o que diferencia de "fiz um CRUD". */
  experience: string

  features: string[]
  tech: { frontend: string[]; backend: string[]; tools: string[] }
  metrics?: Metric[]
  results?: string[]

  link?: string
  github?: string
}

export type StackGroup = {
  id: string
  label: string
  caption: string
  items: string[]
}

export type Chapter = {
  id: string
  index: string
  word: string
  title: string
  body: string
}

/** Prova verificável exibida na faixa de destaques, logo abaixo do hero. */
export type Proof = {
  id: string
  index: string
  label: string
  body: string
}
