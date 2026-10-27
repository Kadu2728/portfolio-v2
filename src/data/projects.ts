import type { Project } from '@/types'

/**
 * Fonte única dos projetos. Alimenta a listagem e as rotas /projects/[slug].
 *
 * Ordem: os cinco do posicionamento atual primeiro, depois os marcados como
 * `early` — projetos anteriores, que continuam acessíveis numa seção
 * secundária. Cada entrada declara o `stage`: produto publicado, protótipo
 * ou repositório. Misturar os três é o jeito mais rápido de perder
 * credibilidade numa conversa.
 */
export const projects: Project[] = [
  {
    slug: 'ceap-connect',
    image: '/projects/ceap-connect.webp',
    title: 'CEAP Connect',
    tagline: 'Acompanha o candidato da inscrição ao resultado, para enfrentar a evasão.',
    year: '2026',
    category: 'Produto',
    stage: 'published',
    role: 'Product Owner · Discovery · Construção com IA',
    featured: true,
    overview:
      'Challenge FIAP, projeto da minha equipe finalista do NEXT FIAP 2026 — ficamos em 2º lugar. Plataforma web publicada que acompanha o candidato do CEAP — escola técnica gratuita para jovens — da inscrição ao resultado do processo seletivo.',
    challenge:
      'O candidato desaparece no meio do processo seletivo. A coordenação só descobre a desistência quando a sala da prova tem menos gente do que a lista de inscritos, e nessa altura não há mais nada a fazer. Faltava enxergar quem estava em risco enquanto ainda dava tempo de agir.',
    solution:
      'Fiz o discovery com a área de Projetos e Inovação do CEAP e analisei o funil do último processo seletivo: 777 inscritos e 206 presentes na prova. Com a etapa de maior evasão identificada, priorizei o backlog para atacá-la — score de risco explicável, console de intervenção para a coordenação, módulo de responsáveis e assistente de IA para quem não tem a quem perguntar em casa.',
    experience:
      'Como PO, documentei o backlog por épicos, o roadmap e a arquitetura antes de construir, e conduzi a execução com IA a partir dessas especificações. O score precisava ser explicável: um número que diz "risco alto" sem dizer por quê não é usado por quem atende o candidato. E o público tem entre 14 e 18 anos e chega pelo celular — isso definiu mobile-first e feedback imediato em cada ação.',
    features: [
      'Score de risco de evasão explicável',
      'Console de intervenção para a coordenação',
      'Módulo de responsáveis',
      'Assistente de IA (Gemini) para dúvidas do candidato',
      'Gestão de documentos da inscrição',
      'Simulados e preparação para a prova',
      'Backlog por épicos, roadmap e arquitetura documentados',
      'Back-end com 141 testes automatizados e CI',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['FastAPI', 'Python', 'PostgreSQL', 'JWT'],
      tools: ['Google Gemini', 'Vercel', 'Neon', 'GitHub Actions'],
    },
    metrics: [
      { value: '777', label: 'inscritos no funil analisado' },
      { value: '206', label: 'presentes na prova' },
      { value: '141', label: 'testes automatizados' },
    ],
    results: [
      'Finalista e 2º lugar no NEXT FIAP 2026 — projeto da equipe, com atuação como Product Owner e desenvolvedor.',
      'Apresentado ao Diretor do CEAP, que aprovou o avanço do projeto e o encaminhou à Coordenação de TI.',
      'Os números acima descrevem o funil que analisei para priorizar o backlog. Não são redução de evasão medida.',
    ],
    link: 'https://ceapconnect.vercel.app',
    github: 'https://github.com/Kadu2728/ceapconnect',
  },
  {
    slug: 'giro',
    image: '/projects/giro.webp',
    title: 'GIRO',
    tagline: 'SaaS B2B de merchandising nascido das minhas anotações em papel.',
    year: '2026',
    category: 'Produto',
    stage: 'prototype',
    role: 'Product Owner · Regras de negócio · Arquitetura',
    featured: true,
    overview:
      'Protótipo de aplicativo para promotores de merchandising. Nasceu das anotações em papel que eu mesmo usava na rotina da Panco — o problema veio do campo, não de um briefing.',
    challenge:
      'A indústria não enxerga o estoque dentro do varejista. O único número real é o que o promotor conta na gôndola, e esse número morre numa ficha de papel ou numa planilha que ninguém abre. Quem decide reposição decide sem dado.',
    solution:
      'Transformei observação de operação em regra de negócio. Duas delas sustentam o produto: o giro é sempre calculado a partir de contagens consecutivas, nunca digitado; e a ruptura só é registrada quando o promotor confirma a gôndola vazia. Especifiquei a arquitetura completa e construí o protótipo PWA com dados de demonstração.',
    experience:
      'As duas regras acima me tomaram mais tempo que a interface, e são o que separa o produto de um formulário. Campo de giro editável viraria número inventado; SKU não contado é "ainda não vi", não "estoque zero" — tratar como iguais destruiria a confiança no dado. O modo offline existe porque sinal de mercado é ruim: a contagem grava no dispositivo e sobe quando a conexão volta.',
    features: [
      'Giro calculado a partir de contagens consecutivas',
      'Ruptura registrada só com confirmação na gôndola',
      'Fila local de sincronização para funcionar offline',
      'Protótipo PWA instalável no celular',
      'Dados de demonstração para navegar sem cadastro',
      'Visão consolidada para o supervisor',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI (especificado)', 'PostgreSQL (especificado)'],
      tools: ['PWA', 'Service Worker', 'Vercel'],
    },
    metrics: [
      { value: 'Offline', label: 'fila local de sincronização' },
      { value: 'PWA', label: 'instalável no celular' },
    ],
    results: [
      'É protótipo: o front-end está no ar com dados de demonstração.',
      'O back-end (FastAPI e PostgreSQL) e o isolamento multiempresa estão especificados na arquitetura e ainda não implementados.',
      'A interface foi construída contra esse contrato, então ela não muda quando o back-end entrar.',
    ],
    link: 'https://giro-azure.vercel.app',
    github: 'https://github.com/Kadu2728/GIRO',
  },
  {
    slug: 'vendia',
    image: '/projects/vendia.webp',
    title: 'VendIA',
    tagline: 'IA generativa para quem vende em marketplace e não tem time.',
    year: '2026',
    category: 'Produto',
    stage: 'published',
    role: 'Produto · Escopo do MVP · Construção com IA',
    featured: true,
    overview:
      'Ferramenta publicada que ajuda pequenos vendedores de marketplace a criar anúncios, definir preços e responder clientes.',
    challenge:
      'O vendedor pequeno disputa a mesma vitrine que uma loja grande, sem redator, sem analista de preço e sem alguém no atendimento. O anúncio sai às pressas, perde busca dentro do próprio marketplace e a venda vai para quem tem equipe.',
    solution:
      'Defini a proposta de valor e cortei o escopo do MVP em três funcionalidades — geração de anúncio, sugestão de preço e apoio às respostas a clientes — em vez de prometer uma suíte. Desenhei os prompts e a integração com o Google Gemini, com Claude como alternativa.',
    experience:
      'A sugestão de preço sempre vem com a justificativa: ferramenta que devolve número sem explicar não é usada duas vezes. E o tom da resposta ao cliente é escolha do vendedor, porque a voz da loja é dele, não do modelo.',
    features: [
      'Geração de anúncio a partir dos dados do produto',
      'Sugestão de faixa de preço com justificativa',
      'Apoio às respostas a clientes, com tom configurável',
      'Prompts desenhados por função, não um chat genérico',
      'Integração com Google Gemini (Claude como alternativa)',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'GitHub Actions'],
    },
    metrics: [
      { value: '3', label: 'funcionalidades no MVP' },
      { value: 'Gemini', label: 'LLM integrado' },
    ],
    results: [
      'Publicado e disponível para teste — front-end na Vercel, API em FastAPI e banco PostgreSQL.',
      'Integração contínua configurada no GitHub Actions.',
    ],
    link: 'https://vend-ia-weld.vercel.app',
    github: 'https://github.com/Kadu2728/VendIA',
  },
  {
    slug: 'vestora',
    image: '/projects/vestora.webp',
    title: 'VESTORA',
    tagline: 'Indicadores de carteira definidos antes de desenhar o dashboard.',
    year: '2026',
    category: 'Plataforma',
    stage: 'published',
    role: 'Produto · Indicadores · Modelagem de dados',
    featured: true,
    overview:
      'Plataforma publicada para acompanhar uma carteira de ações, FIIs e ETFs, com patrimônio, rentabilidade e dividendos num lugar só.',
    challenge:
      'Quem investe em mais de uma classe de ativo acaba com a informação espalhada: uma corretora mostra ações, outra mostra fundos e a planilha que tentava juntar tudo desatualiza. A pergunta real — "estou melhorando?" — fica sem resposta.',
    solution:
      'Comecei pelos indicadores: o que precisa ser respondido antes de desenhar tela. Modelei carteira, ativo, posição e provento como entidades separadas no PostgreSQL, o que permite calcular rentabilidade, dividendos e evolução patrimonial sem duplicar dado — e é essa modelagem que alimenta os dashboards.',
    experience:
      'Investimento é assunto que intimida, e cadastro é atrito. Incluí uma conta demo que gera uma carteira de exemplo sem exigir cadastro, para quem quer entender o produto antes de colocar dado real.',
    features: [
      'Carteira consolidada de ações, FIIs e ETFs',
      'Indicadores de rentabilidade, dividendos e evolução patrimonial',
      'Modelagem relacional que evita dado duplicado',
      'Conta demo com carteira de exemplo, sem cadastro',
      'Autenticação com JWT',
      'Histórico de proventos por ativo',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Recharts'],
      backend: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT'],
      tools: ['Vercel', 'Render'],
    },
    metrics: [
      { value: '3', label: 'classes de ativo' },
      { value: 'Demo', label: 'carteira de exemplo sem cadastro' },
    ],
    results: ['Publicado — front-end na Vercel, API no Render e banco PostgreSQL.'],
    link: 'https://vestora-roan.vercel.app',
    github: 'https://github.com/Kadu2728/Vestora',
  },
  {
    slug: 'finpilot',
    image: '/projects/finpilot.webp',
    title: 'FinPilot',
    tagline: 'Receitas, despesas e metas para quem não tem departamento financeiro.',
    year: '2026',
    category: 'Plataforma',
    stage: 'published',
    role: 'Requisitos · Modelagem de dados · Construção',
    featured: true,
    overview:
      'SaaS para pequenas empresas e profissionais autônomos controlarem receitas, despesas e metas.',
    challenge:
      'Autônomo e pequeno negócio controlam dinheiro em planilha ou no caderno. Funciona até o volume crescer — aí ninguém sabe se o mês fechou no positivo, muito menos se a meta do trimestre está de pé.',
    solution:
      'Levantei os requisitos de controle de receitas, despesas, metas e fluxo de caixa e modelei os dados em PostgreSQL. Construí a API REST em FastAPI com autenticação JWT e documentação via OpenAPI/Swagger, com os relatórios em gráficos.',
    experience:
      'Controle financeiro só funciona se o lançamento for rápido: se registrar uma despesa dá trabalho, a pessoa para de registrar e o sistema perde sentido. Por isso o caminho até o lançamento é o mais curto da interface, e o dashboard responde primeiro a pergunta mais simples — entrou mais do que saiu?',
    features: [
      'Receitas, despesas e fluxo de caixa',
      'Metas financeiras',
      'Relatórios em gráficos',
      'API REST documentada em OpenAPI/Swagger',
      'Autenticação com JWT',
    ],
    tech: {
      frontend: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
      tools: ['Railway', 'Vercel'],
    },
    metrics: [
      { value: 'OpenAPI', label: 'contrato documentado' },
      { value: 'JWT', label: 'sessão protegida' },
    ],
    results: ['Publicado — front-end na Vercel e API no Railway.'],
    link: 'https://finpilot-omega.vercel.app',
    github: 'https://github.com/Kadu2728/FinPilot',
  },

  /* ---------- Projetos anteriores ao posicionamento atual ---------- */
  {
    slug: 'giro-varejo',
    image: '/projects/giro-varejo.webp',
    title: 'GIRO — Landing',
    tagline: 'A página que apresenta o GIRO a quem decide a compra.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
    overview:
      'Landing page do GIRO: apresenta a ferramenta de execução de merchandising para a indústria, que é quem contrata, não quem usa no dia a dia.',
    challenge:
      'Quem usa o GIRO é o promotor, mas quem decide a compra é a indústria — e os dois não têm a mesma pergunta. O promotor quer saber se é rápido de preencher; a indústria quer saber que informação vai receber de volta.',
    solution:
      'A página fala com quem decide: explica o que a contagem em gôndola vira depois de processada — giro, projeção de ruptura, cumprimento de rota — antes de falar de tela ou de tecnologia.',
    experience:
      'Separei a landing do aplicativo em dois projetos porque são dois públicos e dois objetivos. Misturar os dois na mesma interface obrigaria uma das audiências a atravessar conteúdo que não é para ela.',
    features: [
      'Apresentação do produto para a indústria',
      'Explicação do ciclo: contagem, giro e ruptura',
      'Layout responsivo',
      'Animações de scroll',
      'Chamada para conhecer o aplicativo',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Publicado na Vercel.'],
    link: 'https://giro-varejo.vercel.app',
  },
  {
    slug: 'vitrine',
    image: '/projects/vitrine.webp',
    title: 'Vitrine',
    tagline: 'Auditoria de gôndola por visão computacional.',
    year: '2026',
    category: 'Aplicação',
    stage: 'prototype',
    role: 'Produto · Visão Computacional · Python',
    early: true,
    overview:
      'Biblioteca e CLI que analisam a foto de uma gôndola e devolvem número: quantos produtos estão expostos, como o espaço está dividido entre regiões e onde há buraco na prateleira.',
    challenge:
      'A indústria paga — em dinheiro, bonificação e acordo comercial — para que seus produtos ocupem um espaço determinado de prateleira, e não tem como verificar se aquele espaço está sendo ocupado. A informação existe: está na foto que o promotor tira. Só que ela morre ali como imagem.',
    solution:
      'A foto entra, o número sai. O pipeline corrige orientação e perspectiva, detecta produtos por trás de um protocolo com implementações trocáveis, remove duplicatas, agrupa em prateleiras e calcula share por contagem e por área linear. A saída é a imagem anotada mais um JSON com schema versionado.',
    experience:
      'Não tem front-end, e isso é decisão de arquitetura: a imagem anotada é a interface e o `--json` é a API. Uma camada web adicionaria superfície de manutenção sem adicionar capacidade.',
    features: [
      'Correção de orientação e de perspectiva',
      'Detecção por protocolo, com implementações trocáveis',
      'Agrupamento em prateleiras',
      'Share por contagem, por área linear e ocupação',
      'Detecção de espaço vazio na prateleira',
      'Imagem anotada e JSON com schema versionado',
      'Histórico por ponto de venda em SQLite',
    ],
    tech: {
      frontend: ['CLI (Typer)', 'Rich'],
      backend: ['Python', 'OpenCV', 'NumPy', 'Pydantic', 'SQLite'],
      tools: ['YOLO / Ultralytics', 'GitHub Actions'],
    },
    results: [
      'Funciona de ponta a ponta em foto avulsa e em lote.',
      'É protótipo: o detector ainda não tem peso treinado em gôndola, e as métricas de detecção seguem não medidas — declarado no próprio README.',
      'Não identifica SKU nem marca: produto é classe única.',
    ],
    github: 'https://github.com/Kadu2728/vitrine',
  },
  {
    slug: 'vertice',
    image: '/projects/vertice.webp',
    title: 'Vértice',
    tagline: 'Marcação a mercado de títulos públicos, explicada em linguagem natural.',
    year: '2026',
    category: 'Plataforma',
    stage: 'prototype',
    role: 'Arquitetura · Back-End · IA aplicada',
    early: true,
    overview:
      'Simulador que calcula a marcação a mercado de títulos do Tesouro e explica o resultado em texto, sem exigir que o investidor entenda a matemática por trás.',
    challenge:
      'Milhões de investidores têm títulos públicos e não entendem por que o valor de mercado muda todo dia. Quando a taxa de juros se move, prefixados e indexados ao IPCA sofrem marcação a mercado — o preço sobe ou desce sem nada "errado" ter acontecido.',
    solution:
      'O sistema é dividido em dois mundos que nunca se misturam. O motor determinístico calcula todo preço, taxa e imposto em Python puro. A camada de IA só explica em texto o que o motor já calculou.',
    experience:
      'A fronteira entre os dois é a razão de existir do projeto. Um validador extrai todo valor monetário do texto gerado e descarta a resposta se algo não bater com o payload original, caindo num template estático. Se um número aparece na tela, ele veio do motor — a IA nunca estima valor financeiro.',
    features: [
      'Motor de precificação determinístico e isolado',
      'Explicação em linguagem natural gerada por IA',
      'Validador que descarta texto com número divergente',
      'Fallback para template estático quando a validação falha',
      'Golden tests contra o preço oficial do Tesouro Transparente',
      'Decisões arquiteturais registradas em ADRs',
    ],
    tech: {
      frontend: ['TypeScript', 'Node 20'],
      backend: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'Alembic'],
      tools: ['pytest', 'mypy estrito'],
    },
    results: [
      'Os golden tests recalculam títulos reais em datas reais e comparam com o preço oficial publicado pelo Tesouro Transparente.',
      'A LTN bate com tolerância de R$ 0,01.',
      'NTN-F e NTN-B têm resíduo de precisão documentado e ainda não resolvido, com tolerância visível no código.',
    ],
    github: 'https://github.com/Kadu2728/vertice',
  },
  {
    slug: 'controle-produtos',
    image: '/projects/controle-produtos.webp',
    title: 'Controle de Produtos',
    tagline: 'CRUD com autenticação em PHP puro, sem nenhuma dependência.',
    year: '2026',
    category: 'Aplicação',
    stage: 'repo',
    role: 'Full-Stack · PHP',
    early: true,
    overview:
      'Sistema web de cadastro e controle de produtos com autenticação de usuários, desenvolvido como teste prático para vaga de estágio. API REST em PHP e front-end em JavaScript puro, com dados em MySQL.',
    challenge:
      'Entregar um CRUD completo com autenticação e rastreio de quem cadastrou cada item — provando domínio de fundamentos, não de framework.',
    solution:
      'API REST escrita à mão em PHP, front-end em JavaScript puro consumindo essa API e MySQL como persistência. A tabela de produtos registra ID, data de cadastro, usuário responsável, descrição, quantidade e valor.',
    experience:
      'Nenhuma dependência externa: sem framework, sem Composer, sem npm install. Quem clona o repositório roda o projeto com o que já está na máquina — decisão que elimina o atrito de setup em avaliação técnica.',
    features: [
      'Autenticação de usuários',
      'Cadastro, edição e remoção de produtos',
      'Registro de qual usuário cadastrou cada item',
      'API REST documentada',
      'Zero dependências externas',
    ],
    tech: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['PHP', 'MySQL', 'REST API'],
      tools: [],
    },
    results: ['Desenvolvido como teste prático para vaga de estágio. Disponível no repositório.'],
    github: 'https://github.com/Kadu2728/crud-produtos',
  },
  {
    slug: 'controlcash',
    image: '/projects/controlcash.webp',
    title: 'ControlCash',
    tagline: 'Controle financeiro pessoal construído sem framework.',
    year: '2026',
    category: 'Aplicação',
    stage: 'published',
    role: 'Front-End · UX',
    early: true,
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
    results: ['Publicado na Vercel.'],
    link: 'https://controlcash-weld.vercel.app',
    github: 'https://github.com/Kadu2728/ControlCash',
  },
  {
    slug: 'investbem',
    image: '/projects/investbem.webp',
    title: 'InvestBem',
    tagline: 'Landing page de fintech construída em torno da conversão.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
    overview:
      'Página de captação para fintech de investimentos, com estética premium e motion trabalhado.',
    challenge:
      'Página de investimento precisa vender confiança antes de vender produto. Excesso de efeito passa amadorismo; falta de efeito passa desatualização. O equilíbrio é o trabalho.',
    solution:
      'Hierarquia visual construída em torno de um único CTA, com planos comparáveis lado a lado e animações de scroll que revelam conteúdo no ritmo da leitura.',
    experience:
      'As microinterações existem para dar resposta, não para chamar atenção. Cada hover confirma que o elemento é clicável; cada revelação acompanha o scroll em vez de disputar com ele.',
    features: [
      'Hero orientado à conversão',
      'Seção de planos comparativa',
      'Animações de scroll',
      'Microinterações em hover e foco',
      'Totalmente responsivo',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Publicado na Vercel.'],
    link: 'https://investbem.vercel.app',
    github: 'https://github.com/Kadu2728/InvestBem',
  },
  {
    slug: 'barbearia-fino',
    image: '/projects/barbearia-fino.webp',
    title: 'Barbearia FINOViSÚ',
    tagline: 'Agendamento em poucos toques, para quem chega pelo celular.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
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
    results: ['Projeto para cliente real, publicado.'],
    link: 'https://barbearia-fino.vercel.app',
    github: 'https://github.com/Kadu2728/BarbeariaFINO',
  },
  {
    slug: 'dani-brigs',
    image: '/projects/dani-brigs.webp',
    title: 'Dani Brigs',
    tagline: 'Cardápio digital que vende pelo canal que a cliente já usava.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UI · Front-End',
    early: true,
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
    results: ['Projeto para cliente real, publicado.'],
    link: 'https://danibrigs.vercel.app',
    github: 'https://github.com/Kadu2728/DoceriaSite',
  },
]

/** Os cinco do posicionamento atual. */
export const mainProjects = projects.filter((p) => !p.early)
/** Anteriores — continuam no portfólio, numa seção secundária. */
export const earlyProjects = projects.filter((p) => p.early)

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
