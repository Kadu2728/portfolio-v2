import type { Chapter, NavItem } from '@/types'

export const profile = {
  name: 'Carlos Eduardo Diogo Gavioli',
  short: 'Carlos Eduardo',
  initials: 'CE',
  role: 'Full-Stack Developer',
  location: 'São Paulo, Brasil',
  email: 'kacadu007@gmail.com',
  phone: '(11) 99358-2543',
  whatsapp: 'https://wa.me/5511993582543',
  github: 'https://github.com/Kadu2728',
  githubUser: 'Kadu2728',
  linkedin: 'https://www.linkedin.com/in/carlos-eduardo-diogo-192282358',
  available: true,
  cv: '/cv-carlos-eduardo-diogo.pdf',

  /** Headline do hero, quebrada em linhas com comportamento próprio. */
  headline: ['Eu construo', 'experiências', 'digitais.'],
  headlineTail: 'Não apenas aplicações.',

  intro:
    'Desenvolvedor full-stack em São Paulo. Trabalho o produto inteiro — modelo o banco, escrevo a API e desenho a interface que a pessoa toca. No último ano publiquei seis aplicações de ponta a ponta, sozinho.',

  education: {
    org: 'FIAP',
    course: 'Gestão de Tecnologia da Informação',
    period: 'Fev 2026 — Jul 2028',
  },

  experience: [
    {
      org: 'Projetos Independentes',
      role: 'Full Stack Developer · Autônomo',
      period: 'Jul 2025 — Presente',
      place: 'São Paulo · Remoto',
      body: 'Projeto, construo e publico aplicações web de ponta a ponta — do UX/UI e front-end à API REST, banco de dados e produção. Todos desenvolvidos sozinho, do conceito ao produto no ar.',
      current: true,
    },
    {
      org: 'Panco',
      role: 'Profissional de Merchandising',
      period: 'Jan 2026 — Presente',
      place: 'São Paulo, SP',
      body: 'Execução em ponto de venda e análise de giro. É dessa rotina que nasceu o GIRO — software para um problema que eu vivo todo dia.',
      current: true,
    },
  ],

  languages: [
    { code: 'PT', name: 'Português', level: 'Nativo' },
    { code: 'EN', name: 'Inglês', level: 'Fluente' },
  ],
} as const

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

/**
 * A narrativa do About. Cada capítulo tem uma palavra-chave que domina a tela
 * enquanto a seção está presa no scroll — a palavra é o elemento gráfico.
 */
export const chapters: Chapter[] = [
  {
    id: 'curiosity',
    index: '01',
    word: 'Curiosidade',
    title: 'Começou querendo saber como as coisas funcionam por dentro.',
    body: 'Não foi um curso que me trouxe até aqui. Foi abrir o inspetor de elementos e não conseguir mais fechar. A pergunta nunca foi "como faço isso funcionar", e sim "por que funciona assim".',
  },
  {
    id: 'code',
    index: '02',
    word: 'Código',
    title: 'Aprendi que fazer funcionar é só metade do trabalho.',
    body: 'A outra metade é fazer de um jeito que a próxima pessoa entenda — inclusive eu, três meses depois. Escrevo código pensando em quem vai ler, não em quem vai executar.',
  },
  {
    id: 'design',
    index: '03',
    word: 'Design',
    title: 'Interface não é enfeite. É onde o produto acontece.',
    body: 'Hierarquia tipográfica, espaçamento consistente, estado de foco visível, resposta em rede lenta. Detalhe que ninguém elogia, mas todo mundo sente quando falta.',
  },
  {
    id: 'product',
    index: '04',
    word: 'Produto',
    title: 'Software sem problema real é exercício.',
    body: 'Antes de escolher a stack, eu quero saber quem sofre com o quê. O GIRO existe porque eu conto estoque em gôndola. O CEAP Connect existe porque candidato desiste no meio do processo.',
  },
  {
    id: 'fullstack',
    index: '05',
    word: 'Full-Stack',
    title: 'Do modelo de dados ao pixel, sem terceirizar decisão.',
    body: 'Consigo desenhar a tabela, expor a rota, consumir no front e colocar em produção. Isso não me faz especialista em tudo — me faz capaz de entregar o produto inteiro sem esperar por ninguém.',
  },
]
