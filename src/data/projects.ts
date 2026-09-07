import type { Project } from '@/types'

/**
 * Fonte única dos projetos. Alimenta a galeria horizontal, a listagem e as
 * rotas /projects/[slug] — adicionar um projeto é adicionar um objeto aqui.
 */
export const projects: Project[] = [
  {
    slug: 'ceap-connect',
    title: 'CEAP Connect',
    tagline: 'Processo seletivo transformado em jornada gamificada, com IA.',
    year: '2026',
    category: 'Produto',
    role: 'Produto · UX/UI · Full-Stack',
    featured: true,
    overview:
      'O CEAP é uma escola técnica gratuita para jovens em vulnerabilidade social. O CEAP Connect transforma o processo seletivo — que era burocrático e silencioso — numa jornada com missões, progressão e recompensas reais.',
    challenge:
      'Candidato desiste no meio do processo seletivo. Não por falta de capacidade, mas por falta de contexto: não sabe o que vem depois, não sabe se está indo bem, não tem a quem perguntar. O processo é uma caixa preta que só devolve resposta no fim.',
    solution:
      'Quebrei o processo em missões visíveis, com progressão de Iniciante a Mestre CEAP. Cada etapa concluída rende XP e aproxima o candidato de recompensas que valem alguma coisa fora da plataforma: cursos e certificações de AWS, Google, Cisco e Fundação Bradesco. O ciclo fecha num painel onde a equipe confirma cada entrega — prêmio que não chega na mão não é prêmio, é promessa.',
    experience:
      'A decisão mais importante não foi técnica. Foi entender que o público tem entre 14 e 18 anos e chega pelo celular, muitas vezes com internet limitada. Isso definiu tudo: mobile-first, respostas curtas, feedback imediato a cada ação e um assistente de IA disponível 24 horas para quem não tem a quem perguntar em casa.',
    features: [
      'Jornada do candidato com missões e etapas',
      'Sistema de XP, níveis e conquistas',
      'Catálogo de recompensas com cursos e certificações reais',
      'Ciclo completo de resgate com confirmação de entrega',
      'Assistente de IA com respostas em streaming e memória de conversa',
      'Simulados e preparação para a prova',
      'Upload de documentos',
      'Central de notificações',
      'Painel administrativo com acesso restrito',
      'Dashboard de gamificação em tempo real',
    ],
    tech: {
      frontend: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'Render'],
    },
    metrics: [
      { value: '24/7', label: 'assistente de IA' },
      { value: '2ª', label: 'rodada de avaliação' },
      { value: '100%', label: 'em produção' },
    ],
    results: [
      'Apresentado em formato de pitch ao diretor geral do CEAP.',
      'Avançou para uma segunda rodada de avaliação.',
      'O retorno sobre a camada de gamificação orientou a reformulação seguinte do produto.',
    ],
    link: 'https://ceapconnect.vercel.app',
    github: 'https://github.com/Kadu2728/ceapconnect',
  },
  {
    slug: 'vestora',
    title: 'VESTORA',
    tagline: 'Carteira de investimentos com patrimônio e dividendos em tempo real.',
    year: '2026',
    category: 'Plataforma',
    role: 'Full-Stack · Data Visualization',
    featured: true,
    overview:
      'Plataforma de gestão e acompanhamento de investimentos para ações, FIIs e ETFs. Consolida patrimônio, dividendos e rentabilidade num painel único, com autenticação própria e conta demonstrativa.',
    challenge:
      'Quem investe em mais de uma classe de ativo acaba com a informação espalhada: uma corretora mostra ações, outra mostra fundos, a planilha tenta juntar tudo e desatualiza. Ninguém enxerga o patrimônio real num lugar só.',
    solution:
      'Modelei carteira, ativo, posição e provento como entidades separadas, o que permite calcular rentabilidade e dividendos sem duplicar dado. O front consome tudo via React Query, que cuida de cache e revalidação — dado de mercado muda, e recarregar a página inteira a cada mudança seria inaceitável.',
    experience:
      'Investimento é assunto que intimida. Por isso a conta demonstrativa: dá para explorar a ferramenta inteira antes de cadastrar um centavo da carteira real. E os gráficos vêm com Recharts em vez de tabela pura, porque a pergunta que o usuário faz não é "quanto tenho", é "estou melhorando".',
    features: [
      'Carteira consolidada de ações, FIIs e ETFs',
      'Patrimônio, dividendos e rentabilidade em tempo real',
      'Dashboard interativo com gráficos',
      'Conta demonstrativa sem cadastro de dados reais',
      'Autenticação com JWT',
      'Formulários validados de ponta a ponta',
      'Histórico de proventos por ativo',
    ],
    tech: {
      frontend: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Recharts',
        'React Query',
        'React Hook Form',
        'Zod',
        'Axios',
      ],
      backend: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT'],
      tools: ['Vercel', 'Render'],
    },
    metrics: [
      { value: '3', label: 'classes de ativo' },
      { value: 'JWT', label: 'autenticação própria' },
      { value: 'Demo', label: 'conta de teste' },
    ],
    results: ['Em produção, com front, API e banco publicados.'],
    link: 'https://vestora-roan.vercel.app',
    github: 'https://github.com/Kadu2728/Vestora',
  },
  {
    slug: 'vendia',
    title: 'VendIA',
    tagline: 'A IA lê a foto do produto e escreve o anúncio.',
    year: '2026',
    category: 'Produto',
    role: 'Full-Stack · IA Generativa',
    featured: true,
    overview:
      'SaaS de IA Generativa para vendedores de marketplace, com foco em Shopee. Gera anúncio, sugere preço e responde perguntas de cliente.',
    challenge:
      'Vendedor pequeno não tem copywriter. Escreve o anúncio às pressas, com título ruim, e perde busca dentro do próprio marketplace. Contratar redator para cada produto é inviável no volume e na margem.',
    solution:
      'A geração é multimodal: o vendedor envia a foto e a IA lê a imagem, não só o texto digitado. Isso capta detalhe visual que o vendedor esquece de mencionar — cor, material, acabamento. Além do anúncio, sugere faixa de preço comparando concorrentes cadastrados, sempre com justificativa, e responde perguntas de cliente no tom configurado.',
    experience:
      'O tom da resposta é escolha do vendedor — formal, amigável ou direto — porque a voz da loja é dele, não do modelo. E toda sugestão de preço vem acompanhada do porquê: ferramenta que dá número sem explicação não é usada duas vezes.',
    features: [
      'Gerador de anúncio a partir da foto do produto',
      'Análise multimodal de imagem',
      'Sugestão de faixa de preço com justificativa',
      'Comparação com concorrentes cadastrados',
      'Respondedor de perguntas de cliente',
      'Tom configurável: formal, amigável ou direto',
    ],
    tech: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'Alembic', 'PostgreSQL'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'Render'],
    },
    metrics: [
      { value: '3', label: 'ferramentas no MVP' },
      { value: 'Multimodal', label: 'texto + imagem' },
    ],
    results: ['Em produção — front na Vercel, API no Render e banco na Neon.'],
    link: 'https://vend-ia-weld.vercel.app',
    github: 'https://github.com/Kadu2728/VendIA',
  },
  {
    slug: 'giro',
    title: 'GIRO',
    tagline: 'Merchandising offline que calcula o giro sozinho.',
    year: '2026',
    category: 'Aplicação',
    role: 'Produto · Front-End · Arquitetura',
    featured: true,
    overview:
      'PWA de execução de merchandising. Transforma a contagem que o promotor faz na gôndola em decisão de reposição.',
    challenge:
      'Nenhuma indústria enxerga o estoque dentro do varejista. Não existe integração, não existe ERP compartilhado. O único número real é o que o promotor conta com o olho, na gôndola — e esse número morre numa ficha de papel ou numa planilha que ninguém abre.',
    solution:
      'O app deriva o giro da própria contagem, comparando com a visita anterior: o que tinha, mais o que foi reposto, menos o que sobrou. A partir daí projeta os dias de estoque restantes e avisa quando o item não chega até a próxima visita.',
    experience:
      'Duas decisões me tomaram mais tempo que o código. A primeira: giro nunca é digitado, é sempre derivado — campo editável viraria número inventado. A segunda: ruptura só existe se foi conferida; um SKU não contado é "ainda não vi", não "estoque zero". Tratar como iguais destruiria a confiança no dado. E tudo funciona offline, porque sinal de mercado é ruim: a contagem grava no dispositivo e sobe sozinha quando a conexão volta.',
    features: [
      'Cálculo automático de giro entre visitas',
      'Projeção de dias de estoque restantes',
      'Alerta de ruptura antes da próxima visita',
      'Funcionamento offline com sincronização automática',
      'Visão consolidada para o supervisor',
      'Cumprimento de rota e histórico por SKU',
      'Instalável como app no celular',
    ],
    tech: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Framer Motion'],
      backend: ['FastAPI (arquitetado)', 'PostgreSQL (arquitetado)', 'JWT multi-tenant'],
      tools: ['PWA', 'Service Worker'],
    },
    metrics: [
      { value: 'Offline', label: 'first' },
      { value: '14', label: 'rotas' },
    ],
    results: [
      'Contrato de API especificado em FastAPI + PostgreSQL com isolamento multi-tenant por JWT.',
      'O front foi construído contra esse contrato, então a interface não muda quando o back entrar.',
      'Projeto de portfólio, com dados fictícios.',
    ],
    github: 'https://github.com/Kadu2728/GIRO',
  },
  {
    slug: 'finpilot',
    title: 'FinPilot',
    tagline: 'SaaS de gestão financeira para autônomos e pequenos negócios.',
    year: '2026',
    category: 'Plataforma',
    role: 'Full-Stack',
    featured: true,
    overview:
      'Plataforma de gestão financeira com autenticação, dashboard e relatórios. Organiza receitas, despesas e fluxo de caixa de quem não tem departamento financeiro.',
    challenge:
      'Autônomo e pequeno negócio controlam dinheiro em planilha ou no caderno. Funciona até o volume crescer — aí ninguém sabe se o mês fechou no positivo, muito menos se a meta do trimestre está de pé.',
    solution:
      'Modelei receita, despesa e meta como entidades próprias, com API REST protegida por JWT. O dashboard responde a pergunta que importa antes de qualquer outra: entrou mais do que saiu? Os relatórios e indicadores vêm depois, para quem quer aprofundar.',
    experience:
      'Controle financeiro só funciona se o lançamento for rápido. Se registrar uma despesa dá trabalho, a pessoa para de registrar e o sistema inteiro perde sentido — então o caminho até o lançamento é o mais curto da interface.',
    features: [
      'Receitas e despesas',
      'Fluxo de caixa',
      'Metas financeiras',
      'Indicadores e relatórios',
      'Dashboard interativo',
      'Autenticação com JWT',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript'],
      backend: ['FastAPI', 'Python', 'PostgreSQL', 'REST API', 'JWT'],
      tools: ['Railway', 'Vercel'],
    },
    metrics: [{ value: 'JWT', label: 'sessão protegida' }],
    results: ['Em produção — back-end no Railway, front-end na Vercel.'],
    link: 'https://finpilot-omega.vercel.app',
    github: 'https://github.com/Kadu2728/FinPilot',
  },
  {
    slug: 'controlcash',
    title: 'ControlCash',
    tagline: 'Controle financeiro pessoal construído sem framework.',
    year: '2026',
    category: 'Aplicação',
    role: 'Front-End · UX',
    overview:
      'Aplicação de controle de finanças pessoais com dashboard, visualização de dados e persistência local. Feita do zero em JavaScript puro.',
    challenge:
      'Construir uma aplicação com estado real, gráficos e persistência sem recorrer a framework — para provar domínio do que existe embaixo do React, não só do React.',
    solution:
      'Estado gerenciado à mão, renderização controlada por eventos, gráficos com Chart.js e persistência no LocalStorage. Sem build step, sem dependência de runtime.',
    experience:
      'Sem framework, cada re-render é decisão explícita. Isso me obrigou a pensar em quando a interface realmente precisa mudar — disciplina que levei comigo para os projetos em React.',
    features: [
      'Dashboard de organização financeira',
      'Gráficos interativos',
      'Visualização de dados por categoria',
      'Persistência local dos lançamentos',
      'Interface responsiva',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      backend: ['LocalStorage'],
      tools: ['Vercel'],
    },
    results: ['Em produção na Vercel.'],
    link: 'https://controlcash-weld.vercel.app',
    github: 'https://github.com/Kadu2728/ControlCash',
  },
  {
    slug: 'investbem',
    title: 'InvestBem',
    tagline: 'Landing page de fintech construída em torno da conversão.',
    year: '2026',
    category: 'Experiência',
    role: 'UX/UI · Front-End',
    overview:
      'Página de captação para fintech de investimentos, com estética premium e motion trabalhado.',
    challenge:
      'Página de investimento precisa vender confiança antes de vender produto. Excesso de efeito passa amadorismo; falta de efeito passa desatualização. O equilíbrio é o trabalho.',
    solution:
      'Hierarquia visual construída em torno de um único CTA, com planos comparáveis lado a lado e animações de scroll que revelam conteúdo no ritmo da leitura — nunca antes de o usuário chegar lá.',
    experience:
      'As microinterações existem para dar resposta, não para chamar atenção. Cada hover confirma que o elemento é clicável; cada revelação acompanha o scroll em vez de disputar com ele.',
    features: [
      'Hero orientado à conversão',
      'Seção de planos comparativa',
      'Animações de scroll',
      'Microinterações em hover e foco',
      'Design financeiro premium',
      'Totalmente responsivo',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Em produção na Vercel.'],
    link: 'https://investbem.vercel.app',
    github: 'https://github.com/Kadu2728/InvestBem',
  },
  {
    slug: 'investedu',
    title: 'InvestEdu',
    tagline: 'Educação financeira para quem está começando.',
    year: '2026',
    category: 'Experiência',
    role: 'UX/UI · Front-End',
    overview:
      'Plataforma educacional de finanças pessoais com foco em público jovem: trilha de conteúdo, navegação fluida e prova social.',
    challenge:
      'Falar de dinheiro para quem nunca investiu sem soar condescendente nem técnico demais. O tom errado espanta o público nas primeiras linhas.',
    solution:
      'Trilha de conteúdo em etapas curtas, com linguagem acessível sustentada por tipografia e paleta que transmitem credibilidade — o texto é simples, a apresentação é séria.',
    experience:
      'A decisão de tom guiou o design inteiro. Cores sóbrias e tipografia estruturada compensam a linguagem informal, evitando que o conteúdo pareça pouco confiável.',
    features: [
      'Trilha de conteúdo em etapas',
      'Seções de cursos',
      'Depoimentos e prova social',
      'Navegação fluida',
      'Interface limpa e responsiva',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: [],
      tools: [],
    },
  },
  {
    slug: 'barbearia-fino',
    title: 'Barbearia FINOViSÚ',
    tagline: 'Agendamento em poucos toques, para quem chega pelo celular.',
    year: '2026',
    category: 'Experiência',
    role: 'UX/UI · Front-End',
    overview:
      'Experiência digital completa para barbearia: agendamento online, galeria de cortes e identidade visual urbana.',
    challenge:
      'Cliente de barbearia decide no celular, no meio de outra coisa. Se o agendamento tiver mais de três passos, ele desiste e manda mensagem — o que joga o trabalho de volta para o dono.',
    solution:
      'Fluxo de agendamento reduzido ao mínimo e galeria de cortes como argumento de venda. Construído mobile-first e adaptado para desktop depois, porque é de onde vem quase todo o tráfego.',
    experience:
      'A identidade visual urbana não é decoração: é o que diferencia a barbearia das outras três da mesma rua. O site precisa parecer o lugar.',
    features: [
      'Agendamento online simplificado',
      'Galeria de cortes',
      'Identidade visual própria',
      'Layout mobile-first',
      'Interações em hover e toque',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Projeto para cliente real, em produção.'],
    link: 'https://barbearia-fino.vercel.app',
    github: 'https://github.com/Kadu2728/BarbeariaFINO',
  },
  {
    slug: 'dani-brigs',
    title: 'Dani Brigs',
    tagline: 'Cardápio digital que vende pelo canal que a cliente já usava.',
    year: '2026',
    category: 'Experiência',
    role: 'UI · Front-End',
    overview:
      'Experiência digital para confeitaria artesanal em Sapopemba/SP: cardápio navegável, galeria de produtos e pedido direto.',
    challenge:
      'A confeitaria já vendia bem pelo WhatsApp. Impor um carrinho de compras novo quebraria o que funcionava e criaria fricção onde não havia.',
    solution:
      'O cardápio é digital e navegável, mas o pedido sai pelo WhatsApp — o canal que a cliente domina e onde a conversa já acontece. A tecnologia entra para organizar a vitrine, não para substituir o processo de venda.',
    experience:
      'Comida se vende pelo olho. A composição visual prioriza a foto do produto em tamanho generoso, com o texto em papel de apoio.',
    features: [
      'Cardápio digital navegável',
      'Galeria de produtos',
      'Pedido direto via WhatsApp',
      'Composição visual centrada na imagem',
      'Layout mobile-first',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Projeto para cliente real, em produção.'],
    link: 'https://danibrigs.vercel.app',
    github: 'https://github.com/Kadu2728/DoceriaSite',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
