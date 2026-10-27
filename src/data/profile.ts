import type { Chapter, NavItem, Proof } from '@/types'

export const profile = {
  name: 'Carlos Eduardo Diogo Gavioli',
  short: 'Carlos Eduardo',
  initials: 'CE',
  role: 'Product Owner · Produto, Negócios e Dados',
  location: 'São Paulo, Brasil',
  email: 'kacadu007@gmail.com',
  phone: '(11) 99358-2543',
  whatsapp: 'https://wa.me/5511993582543',
  github: 'https://github.com/Kadu2728',
  githubUser: 'Kadu2728',
  linkedin: 'https://www.linkedin.com/in/carlos-eduardo-diogo-gavioli-192282358',
  available: true,
  cv: '/cv-carlos-eduardo-diogo.pdf',

  /** Headline do hero, quebrada em linhas com comportamento próprio. */
  headline: ['Problema', 'de negócio', 'vira produto.'],
  headlineTail: 'Não apenas tela.',

  intro:
    'Fui Product Owner e desenvolvedor do CEAP Connect, projeto da minha equipe finalista do NEXT FIAP 2026, onde ficamos em 2º lugar. Identifico o problema, analiso os dados, traduzo a necessidade em requisito e conduzo a construção com IA até o produto publicado.',

  education: [
    {
      org: 'FIAP',
      course: 'Gestão da Tecnologia da Informação',
      period: 'Fev 2026 — Fev 2028',
    },
    {
      org: 'Wizard by Pearson',
      course: 'Inglês',
      period: 'Abr 2021 — Set 2023 · concluído',
    },
  ],

  experience: [
    {
      org: 'Projetos independentes',
      role: 'Desenvolvimento de Produtos Digitais',
      period: '2026 — Presente',
      place: 'São Paulo · Remoto',
      body: 'Conduzo produtos próprios do início ao fim: identificação do problema, requisitos, priorização, especificação da arquitetura e dos prompts, construção com IA, publicação e evolução.',
      current: true,
    },
    {
      org: 'Panco',
      role: 'Profissional de Merchandising',
      period: 'Jan 2026 — Presente',
      place: 'São Paulo, SP',
      body: 'Execução no ponto de venda, com organização de produtos, acompanhamento de ruptura e giro. Foi observando essa rotina que nasceu o GIRO.',
      current: true,
    },
  ],

  languages: [
    { code: 'PT', name: 'Português', level: 'Nativo' },
    { code: 'EN', name: 'Inglês', level: 'Intermediário-avançado' },
  ],
} as const

/**
 * Provas, não adjetivos. Cada uma é verificável e sai do currículo — é a
 * primeira coisa que um recrutador precisa ver depois do título.
 */
export const proofs: Proof[] = [
  {
    id: 'next',
    index: '01',
    label: 'Finalista e 2º lugar no NEXT FIAP 2026',
    body: 'Product Owner e desenvolvedor do CEAP Connect, projeto da minha equipe: visão do produto, priorização do backlog e desenvolvimento.',
  },
  {
    id: 'ceap',
    index: '02',
    label: 'Aprovação institucional',
    body: 'Apresentei o CEAP Connect ao Diretor do CEAP, que aprovou o avanço do projeto e o encaminhou à Coordenação de TI da instituição.',
  },
  {
    id: 'fiap',
    index: '03',
    label: 'Reconhecimento acadêmico FIAP',
    body: 'Média superior a 8,0 em Gestão da Tecnologia da Informação, reconhecida com a continuidade do acesso à plataforma Alura.',
  },
]

/** `key` casa com os rótulos em ui.nav; o href é igual nos dois idiomas. */
export const navItems = [
  { key: 'home', href: '#inicio' },
  { key: 'about', href: '#sobre' },
  { key: 'stack', href: '#stack' },
  { key: 'services', href: '#servicos' },
  { key: 'projects', href: '#projetos' },
  { key: 'contact', href: '#contato' },
] as const satisfies readonly { key: string; href: string }[]

/**
 * A narrativa do About. Cada capítulo tem uma palavra-chave que domina a tela
 * enquanto a seção está presa no scroll — a palavra é o elemento gráfico.
 *
 * A sequência é a do trabalho de produto: problema, dado, requisito,
 * construção, entrega. Não é a história de como aprendi a programar.
 */
export const chapters: Chapter[] = [
  {
    id: 'problema',
    index: '01',
    word: 'Problema',
    title: 'Antes de escolher a tecnologia, eu quero saber quem perde o quê.',
    body: 'O GIRO existe porque eu conto estoque em gôndola e anotava no papel. O CEAP Connect existe porque candidato desiste no meio do processo seletivo. Produto sem problema identificado é exercício de programação.',
  },
  {
    id: 'dado',
    index: '02',
    word: 'Dado',
    title: 'Opinião sobre prioridade é barata. Funil é verificável.',
    body: 'No CEAP eu analisei o funil do último processo seletivo — 777 inscritos, 206 presentes na prova — para achar a etapa onde a evasão realmente acontecia. O backlog foi priorizado a partir dessa etapa, não da ideia que parecia mais bonita.',
  },
  {
    id: 'requisito',
    index: '03',
    word: 'Requisito',
    title: 'Traduzir conversa de stakeholder em algo construível.',
    body: 'Discovery, regra de negócio, user story, critério de aceite, épico, roadmap. É o trabalho de transformar "precisamos engajar mais" em uma lista do que entra no produto, em que ordem e por quê.',
  },
  {
    id: 'ia',
    index: '04',
    word: 'IA',
    title: 'Eu especifico e construo com IA — não peço mágica.',
    body: 'Defino a arquitetura, escrevo as especificações e os prompts e conduzo a construção. A IA acelera a execução; a decisão de produto, a regra de negócio e o que é aceitável continuam sendo minhas.',
  },
  {
    id: 'entrega',
    index: '05',
    word: 'Entrega',
    title: 'Produto no ar, não slide de produto.',
    body: 'Quatro produtos publicados e um protótipo em campo. Sei a diferença entre as duas coisas e digo qual é qual — porque é isso que separa portfólio de promessa.',
  },
]
