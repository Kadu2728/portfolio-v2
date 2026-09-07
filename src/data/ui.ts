/**
 * Textos de interface — rótulos, botões, estados.
 * O conteúdo editorial (bio, projetos, serviços) vive nos próprios arquivos.
 */
export type UIStrings = typeof ptUI

export const ptUI = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    stack: 'Stack',
    services: 'Serviços',
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
    available: 'Disponível para oportunidades',
    viewProjects: 'Ver projetos',
    downloadCv: 'Baixar CV',
    statsProjects: 'projetos entregues',
    statsLive: 'em produção',
    statsCerts: 'certificados',
    tagline:
      'Construo experiências digitais de ponta a ponta — do modelo de dados à interface. No último ano publiquei seis aplicações full-stack sozinho.',
  },
  sections: {
    about: 'Sobre',
    stack: 'Stack',
    services: 'Serviços',
    projects: 'Projetos',
    education: 'Formação contínua',
    contact: 'Contato',
  },
  about: {
    title: ['Do primeiro "como isso funciona?"', 'até o produto em produção.'],
    education: 'Formação',
    experience: 'Experiência',
    current: 'Atual',
  },
  stack: {
    title: ['As ferramentas que', 'eu realmente uso.'],
    intro:
      'Só está aqui o que já entrou em projeto entregue. A ordem dentro de cada camada é intencional: começa pelo que domino melhor.',
  },
  services: {
    title: ['Como eu', 'te ajudo.'],
    provenIn: 'Feito em',
    ctaTitle: 'Tem um projeto em mente?',
    ctaBody:
      'Me conta o contexto e o prazo. Se não for algo que eu entregue bem, eu digo na primeira resposta.',
    email: 'Falar comigo',
    whatsapp: 'WhatsApp',
  },
  projects: {
    title: ['Produtos reais,', 'no ar e em uso.'],
    intro:
      'projetos construídos sozinho — do modelo de dados à interface, incluindo colocar em produção. Cada um resolve um problema que existe fora da tela.',
    featured: 'Projeto em destaque',
    whatItDoes: 'O que ele faz',
    stack: 'Stack',
    viewCase: 'Ver o case completo',
    openLive: 'Abrir ao vivo',
    others: 'Outros projetos',
    count: 'projetos',
  },
  case: {
    back: 'Todos os projetos',
    label: 'O case',
    overview: 'Visão geral',
    challenge: 'O problema',
    solution: 'A solução',
    experience: 'Experiência e decisões',
    features: 'Funcionalidades',
    tech: 'Tecnologia',
    frontend: 'Front-End',
    backend: 'Back-End',
    tools: 'Ferramentas',
    results: 'Resultado',
    next: 'Próximo projeto',
    live: 'Ver ao vivo',
    code: 'Código',
  },
  certificates: {
    title: ['Aprender é parte', 'do trabalho.'],
    intro: 'certificados entre FIAP, Alura, Anthropic, AWS e Santander Open Academy — com especialização em',
    specialization: 'Especialização Anthropic & Claude',
    specializationBody:
      'Especialização em IA aplicada a software — o que sustenta o assistente do CEAP Connect e a geração multimodal do VendIA.',
  },
  contact: {
    title: ['Vamos construir', 'algo que', 'valha a pena.'],
    intro:
      'Busco minha primeira oportunidade como desenvolvedor — estágio ou júnior — onde eu possa contribuir desde o primeiro dia. Me conta o contexto e o prazo; se não for algo que eu entregue bem, eu digo na primeira resposta.',
    directTitle: 'Prefere o caminho direto?',
    directBody:
      'O WhatsApp costuma ser mais rápido. Para proposta com escopo e prazo, o e-mail funciona melhor — dá para responder com calma.',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    cvLabel: 'Currículo',
    cvValue: 'Baixar em PDF',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      hint: 'Conte o contexto do projeto e o prazo.',
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
    stack: 'Stack',
    services: 'Services',
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
    available: 'Open to opportunities',
    viewProjects: 'View work',
    downloadCv: 'Download CV',
    statsProjects: 'projects shipped',
    statsLive: 'in production',
    statsCerts: 'certificates',
    tagline:
      'I build digital products end to end — from the data model to the interface. Over the past year I shipped six full-stack applications on my own.',
  },
  sections: {
    about: 'About',
    stack: 'Stack',
    services: 'Services',
    projects: 'Work',
    education: 'Continuous learning',
    contact: 'Contact',
  },
  about: {
    title: ['From the first "how does this work?"', 'to a product in production.'],
    education: 'Education',
    experience: 'Experience',
    current: 'Current',
  },
  stack: {
    title: ['The tools I', 'actually use.'],
    intro:
      'Only what has shipped in a real project is listed here. The order inside each layer is intentional: it starts with what I know best.',
  },
  services: {
    title: ['How I', 'can help.'],
    provenIn: 'Proven in',
    ctaTitle: 'Have a project in mind?',
    ctaBody:
      'Tell me the context and the deadline. If it is not something I can deliver well, I will say so in my first reply.',
    email: 'Get in touch',
    whatsapp: 'WhatsApp',
  },
  projects: {
    title: ['Real products,', 'live and in use.'],
    intro:
      'projects built on my own — from the data model to the interface, including shipping to production. Each one solves a problem that exists off-screen.',
    featured: 'Featured project',
    whatItDoes: 'What it does',
    stack: 'Stack',
    viewCase: 'Read the full case',
    openLive: 'Open live',
    others: 'Other projects',
    count: 'projects',
  },
  case: {
    back: 'All projects',
    label: 'The case',
    overview: 'Overview',
    challenge: 'The problem',
    solution: 'The solution',
    experience: 'Experience and decisions',
    features: 'Features',
    tech: 'Technology',
    frontend: 'Front-end',
    backend: 'Back-end',
    tools: 'Tools',
    results: 'Outcome',
    next: 'Next project',
    live: 'View live',
    code: 'Code',
  },
  certificates: {
    title: ['Learning is part', 'of the job.'],
    intro:
      'certificates across FIAP, Alura, Anthropic, AWS and Santander Open Academy — specialising in',
    specialization: 'Anthropic & Claude specialisation',
    specializationBody:
      'Specialisation in AI applied to software — what powers the CEAP Connect assistant and VendIA multimodal generation.',
  },
  contact: {
    title: ['Let us build', 'something', 'worth it.'],
    intro:
      'I am looking for my first developer role — internship or junior — where I can contribute from day one. Tell me the context and the deadline; if it is not something I can deliver well, I will say so in my first reply.',
    directTitle: 'Prefer the direct route?',
    directBody:
      'WhatsApp is usually faster. For a proposal with scope and deadline, email works better — there is room to reply properly.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    cvLabel: 'Résumé',
    cvValue: 'Download PDF',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      hint: 'Tell me the project context and the deadline.',
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
