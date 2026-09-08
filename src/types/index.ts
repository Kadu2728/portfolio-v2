export type NavItem = { label: string; href: string }

export type Institution =
  | 'FIAP'
  | 'Alura'
  | 'AWS'
  | 'Santander Open Academy'
  | 'Anthropic'

export type Certificate = { title: string; institution: Institution }

export type ProjectCategory = 'Produto' | 'Plataforma' | 'Aplicação' | 'Experiência'

/** Bloco de métrica exibido no case: valor grande + rótulo pequeno. */
export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  title: string
  /** Uma linha. É o que o usuário lê enquanto o card passa na horizontal. */
  tagline: string
  year: string
  category: ProjectCategory
  role: string
  /** Featured = ganha o bloco de destaque. */
  featured?: boolean
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
