/**
 * Textos de interface — rótulos, botões, estados.
 * O conteúdo editorial (bio, projetos, serviços) vive nos próprios arquivos.
 */
export type UIStrings = typeof ptUI

export const ptUI = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    stack: 'Competências',
    services: 'O que eu faço',
    projects: 'Projetos',
    contact: 'Contato',
    talk: 'Falar comigo',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    ariaMain: 'Navegação principal',
    skip: 'Pular para o conteúdo',
    switchTo: 'View in English',
  },
  hero: {
    eyebrow: 'Product Owner · Produto, Negócios, Dados e IA',
    headline: ['Problema', 'de negócio', 'vira produto.'],
    /** Índice da linha que recebe o accent. */
    headlineAccent: 2,
    intro:
      'Fui Product Owner e desenvolvedor do CEAP Connect, projeto da minha equipe finalista do NEXT FIAP 2026, onde ficamos em 2º lugar. Identifico o problema, analiso os dados, traduzo a necessidade em requisito e conduzo a construção com IA até o produto publicado.',
    available: 'Buscando estágio ou posição júnior',
    viewProjects: 'Ver projetos',
    downloadCv: 'Baixar CV',
    featured: 'Projeto em destaque',
    viewCase: 'Ver case',
    contactsLabel: 'Contato',
    stats: [
      { v: '2º lugar', l: 'NEXT FIAP 2026' },
      { v: '5', l: 'produtos de ponta a ponta' },
      { v: '8,0+', l: 'média em GTI' },
    ],
  },
  sections: {
    about: 'Sobre',
    proofs: 'Destaques',
    stack: 'Competências',
    services: 'O que eu faço',
    projects: 'Projetos',
    education: 'Cursos e certificações',
    contact: 'Contato',
  },
  proofs: {
    title: ['Três coisas que', 'dá para verificar.'],
  },
  about: {
    title: ['Do problema que ninguém mediu', 'até o produto publicado.'],
    education: 'Formação',
    experience: 'Experiência',
    current: 'Atual',
  },
  stack: {
    title: ['O que eu levo', 'para um time de produto.'],
    intro:
      'Produto e negócio primeiro, base técnica por último — e de propósito. Saber construir é o diferencial dentro de uma vaga de produto, não a identidade.',
  },
  services: {
    title: ['Onde eu entro', 'num time.'],
    provenIn: 'Comprovado em',
    ctaTitle: 'Procurando estágio ou júnior em produto?',
    ctaBody:
      'Me conta o contexto do time e o problema que vocês estão atacando. Respondo com o que eu faria nas duas primeiras semanas.',
    email: 'Falar comigo',
    whatsapp: 'WhatsApp',
  },
  projects: {
    title: ['Problemas reais,', 'produtos construídos.'],
    intro:
      'produtos conduzidos do discovery à publicação. Em cada um eu digo o que é produto publicado e o que é protótipo — a etiqueta no card não é enfeite.',
    featured: 'Projeto em destaque',
    whatItDoes: 'O que ele faz',
    stack: 'Stack',
    viewCase: 'Ver o case completo',
    openLive: 'Abrir ao vivo',
    others: 'Produtos',
    count: 'produtos',
    stages: { published: 'Publicado', prototype: 'Protótipo', repo: 'Repositório' },
    early: 'Primeiros projetos',
    earlyIntro:
      'Anteriores ao foco atual em produto. Ficam aqui porque mostram o caminho até aqui — não porque sustentam o posicionamento.',
  },
  case: {
    back: 'Todos os projetos',
    label: 'O case',
    overview: 'Visão geral',
    challenge: 'O problema',
    solution: 'Minha atuação',
    experience: 'Decisões de produto',
    features: 'O que foi construído',
    tech: 'Tecnologia',
    frontend: 'Front-End',
    backend: 'Back-End',
    tools: 'Ferramentas',
    results: 'Estado e resultado',
    next: 'Próximo projeto',
    live: 'Ver ao vivo',
    code: 'Código',
  },
  certificates: {
    title: ['Aprender é parte', 'do trabalho.'],
    intro:
      'Certificações agrupadas pelo que elas sustentam no trabalho — IA aplicada a produto, dados e base técnica.',
    areas: {
      ai: 'IA e Machine Learning',
      data: 'Dados e BI',
      tech: 'Tecnologia e Cloud',
      other: 'Outros',
    },
    specialization: 'Especialização Anthropic & Claude',
    specializationBody:
      'Quatro certificações Anthropic: API, Claude Code, Model Context Protocol e AI Fluency. É a base do que uso para especificar e construir produto com IA.',
  },
  contact: {
    title: ['Vamos resolver', 'um problema', 'de verdade.'],
    intro:
      'Busco estágio ou posição júnior em Product Owner e Produto, Análise de Negócios, Business Intelligence e Dados ou Projetos de TI. Disponível para atuação presencial, híbrida ou remota em São Paulo.',
    directTitle: 'Prefere o caminho direto?',
    directBody:
      'O WhatsApp costuma ser mais rápido. Para processo seletivo com etapas e prazo, o e-mail funciona melhor — dá para responder com calma.',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    cvLabel: 'Currículo',
    cvValue: 'Baixar em PDF',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      hint: 'Conte o contexto da vaga ou do problema.',
      send: 'Enviar mensagem',
      sending: 'Enviando',
      or: 'ou escrever direto',
      sentTitle: 'Mensagem enviada.',
      sentBody: 'Respondo em até 24 horas. Se for urgente, o WhatsApp é mais rápido.',
      again: 'Enviar outra mensagem',
      offline: 'Sem conexão com o servidor. Tente pelo e-mail ou WhatsApp.',
      honeypot: 'Empresa',
    },
  },
  footer: {
    built: 'Projetado e construído em código.',
  },
  notFound: {
    label: 'Erro 404',
    title: 'Página não encontrada.',
    body: 'O endereço existe, mas não há nada construído aqui.',
    back: 'Voltar ao início',
  },
}

export const enUI: UIStrings = {
  nav: {
    home: 'Home',
    about: 'About',
    stack: 'Skills',
    services: 'What I do',
    projects: 'Work',
    contact: 'Contact',
    talk: 'Get in touch',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    ariaMain: 'Main navigation',
    skip: 'Skip to content',
    switchTo: 'Ver em português',
  },
  hero: {
    eyebrow: 'Product Owner · Product, Business, Data and AI',
    headline: ['A business', 'problem', 'becomes a product.'],
    headlineAccent: 2,
    intro:
      'I was the Product Owner and developer of CEAP Connect, my team project and a finalist at NEXT FIAP 2026, where we placed 2nd. I find the problem, analyse the data, turn the need into requirements and drive the build with AI until the product ships.',
    available: 'Looking for an internship or junior role',
    viewProjects: 'View work',
    downloadCv: 'Download CV',
    featured: 'Featured project',
    viewCase: 'View case',
    contactsLabel: 'Contact',
    stats: [
      { v: '2nd place', l: 'NEXT FIAP 2026' },
      { v: '5', l: 'products end to end' },
      { v: '8.0+', l: 'GPA in IT Management' },
    ],
  },
  sections: {
    about: 'About',
    proofs: 'Highlights',
    stack: 'Skills',
    services: 'What I do',
    projects: 'Work',
    education: 'Courses and certifications',
    contact: 'Contact',
  },
  proofs: {
    title: ['Three things you', 'can verify.'],
  },
  about: {
    title: ['From the problem nobody measured', 'to a product that shipped.'],
    education: 'Education',
    experience: 'Experience',
    current: 'Current',
  },
  stack: {
    title: ['What I bring to', 'a product team.'],
    intro:
      'Product and business first, technical base last — on purpose. Being able to build is an edge inside a product role, not the identity.',
  },
  services: {
    title: ['Where I fit', 'in a team.'],
    provenIn: 'Proven in',
    ctaTitle: 'Hiring an intern or junior in product?',
    ctaBody:
      'Tell me about the team and the problem you are attacking. I will reply with what I would do in the first two weeks.',
    email: 'Get in touch',
    whatsapp: 'WhatsApp',
  },
  projects: {
    title: ['Real problems,', 'products that exist.'],
    intro:
      'products taken from discovery to release. For each one I say what shipped and what is still a prototype — the label on the card is not decoration.',
    featured: 'Featured project',
    whatItDoes: 'What it does',
    stack: 'Stack',
    viewCase: 'Read the full case',
    openLive: 'Open live',
    others: 'Products',
    count: 'products',
    stages: { published: 'Published', prototype: 'Prototype', repo: 'Repository' },
    early: 'Earlier projects',
    earlyIntro:
      'They predate the current product focus. They stay here because they show the path — not because they carry the positioning.',
  },
  case: {
    back: 'All projects',
    label: 'The case',
    overview: 'Overview',
    challenge: 'The problem',
    solution: 'My role',
    experience: 'Product decisions',
    features: 'What was built',
    tech: 'Technology',
    frontend: 'Front-end',
    backend: 'Back-end',
    tools: 'Tools',
    results: 'Status and outcome',
    next: 'Next project',
    live: 'View live',
    code: 'Code',
  },
  certificates: {
    title: ['Learning is part', 'of the job.'],
    intro:
      'Certifications grouped by what they support in practice — AI applied to product, data and the technical base.',
    areas: {
      ai: 'AI and Machine Learning',
      data: 'Data and BI',
      tech: 'Technology and Cloud',
      other: 'Other',
    },
    specialization: 'Anthropic & Claude specialisation',
    specializationBody:
      'Four Anthropic certifications: API, Claude Code, Model Context Protocol and AI Fluency. That is the base of how I specify and build products with AI.',
  },
  contact: {
    title: ['Let us solve', 'a problem that', 'actually exists.'],
    intro:
      'I am looking for an internship or junior role in Product Ownership, Business Analysis, Business Intelligence and Data, or IT Projects. Available on-site, hybrid or remote in São Paulo.',
    directTitle: 'Prefer the direct route?',
    directBody:
      'WhatsApp is usually faster. For a hiring process with stages and deadlines, email works better — there is room to reply properly.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    cvLabel: 'Résumé',
    cvValue: 'Download PDF',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      hint: 'Tell me about the role or the problem.',
      send: 'Send message',
      sending: 'Sending',
      or: 'or write directly',
      sentTitle: 'Message sent.',
      sentBody: 'I reply within 24 hours. If it is urgent, WhatsApp is faster.',
      again: 'Send another message',
      offline: 'No connection to the server. Try email or WhatsApp.',
      honeypot: 'Company',
    },
  },
  footer: {
    built: 'Designed and built in code.',
  },
  notFound: {
    label: 'Error 404',
    title: 'Page not found.',
    body: 'The address exists, but nothing was built here.',
    back: 'Back to home',
  },
}
