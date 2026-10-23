import type { Chapter, Project, Proof, StackGroup } from '@/types'
import type { Service } from '@/data/services'

/**
 * Conteúdo editorial em inglês.
 *
 * Os slugs, títulos de projeto e nomes de tecnologia não são traduzidos: são
 * identificadores. Traduzir "VendIA" ou "Next.js" quebraria a rota e a busca.
 */
export const enChapters: Chapter[] = [
  {
    id: 'problema',
    index: '01',
    word: 'Problem',
    title: 'Before picking the technology, I want to know who loses what.',
    body: 'GIRO exists because I count stock on supermarket shelves and used to write it on paper. CEAP Connect exists because candidates drop out halfway through the selection process. A product with no identified problem is a programming exercise.',
  },
  {
    id: 'dado',
    index: '02',
    word: 'Data',
    title: 'Opinions about priority are cheap. A funnel is verifiable.',
    body: 'At CEAP I analysed the funnel of the last selection process — 777 applicants, 206 present at the exam — to find the stage where the drop-off actually happened. The backlog was prioritised from that stage, not from the idea that looked nicest.',
  },
  {
    id: 'requisito',
    index: '03',
    word: 'Requirements',
    title: 'Turning a stakeholder conversation into something buildable.',
    body: 'Discovery, business rules, user stories, acceptance criteria, epics, roadmap. The work of turning "we need more engagement" into a list of what goes into the product, in what order, and why.',
  },
  {
    id: 'ia',
    index: '04',
    word: 'AI',
    title: 'I specify and build with AI — I do not ask for magic.',
    body: 'I define the architecture, write the specifications and the prompts, and drive the build. AI speeds up execution; the product decision, the business rule and what counts as acceptable stay with me.',
  },
  {
    id: 'entrega',
    index: '05',
    word: 'Delivery',
    title: 'A product that shipped, not a product slide.',
    body: 'Four products shipped and one prototype in the field. I know the difference and I say which is which — that is what separates a portfolio from a promise.',
  },
]

export const enProfile = {
  role: 'Product Owner · Product, Business and Data',
  location: 'São Paulo, Brazil',

  headline: ['A business', 'problem', 'becomes a product.'],
  headlineTail: 'Not just a screen.',

  intro:
    'I was the Product Owner and developer of CEAP Connect, my team project and a finalist at NEXT FIAP 2026. I find the problem, analyse the data, turn the need into requirements and drive the build with AI until the product ships.',

  education: [
    {
      org: 'FIAP',
      course: 'Information Technology Management',
      period: 'Feb 2026 — Feb 2028',
    },
    {
      org: 'Wizard by Pearson',
      course: 'English',
      period: 'Apr 2021 — Sep 2023 · completed',
    },
  ],

  experience: [
    {
      org: 'Independent projects',
      role: 'Digital Product Development',
      period: '2026 — Present',
      place: 'São Paulo · Remote',
      body: 'I drive my own products end to end: identifying the problem, requirements, prioritisation, specifying the architecture and the prompts, building with AI, shipping and iterating.',
      current: true,
    },
    {
      org: 'Panco',
      role: 'Merchandising Professional',
      period: 'Jan 2026 — Present',
      place: 'São Paulo, Brazil',
      body: 'In-store execution: product organisation, tracking stockouts and shelf turnover. Watching that routine is what led to GIRO.',
      current: true,
    },
  ],

  languages: [
    { code: 'PT', name: 'Portuguese', level: 'Native' },
    { code: 'EN', name: 'English', level: 'Upper-intermediate' },
  ],
} as const

export const enProofs: Proof[] = [
  {
    id: 'next',
    index: '01',
    label: 'Finalist at NEXT FIAP 2026',
    body: 'Product Owner and developer of CEAP Connect, my team project: product vision, backlog prioritisation and development.',
  },
  {
    id: 'ceap',
    index: '02',
    label: 'Institutional approval',
    body: 'I presented CEAP Connect to the Director of CEAP, who approved taking the project forward and referred it to the institution’s IT Coordination.',
  },
  {
    id: 'fiap',
    index: '03',
    label: 'FIAP academic recognition',
    body: 'A grade average above 8.0 in Information Technology Management, recognised with continued access to the Alura platform.',
  },
]

export const enStack: StackGroup[] = [
  {
    id: 'produto',
    label: 'Product and Business',
    caption: 'From the problem to what enters the backlog.',
    items: [
      'Product Ownership',
      'Product Discovery',
      'Business analysis',
      'Requirements gathering',
      'User stories',
      'Backlog prioritisation',
      'Roadmap',
      'MVP',
      'Business rules',
      'Stakeholder communication',
      'UX/UI',
    ],
  },
  {
    id: 'dados',
    label: 'Data and BI',
    caption: 'What backs a priority decision.',
    items: [
      'SQL',
      'PostgreSQL',
      'Relational data modelling',
      'Funnel analysis',
      'Defining indicators',
      'Dashboards',
      'Excel',
      'Python',
    ],
  },
  {
    id: 'ia',
    label: 'Artificial Intelligence',
    caption: 'How I get an idea off paper.',
    items: [
      'Generative AI',
      'Prompt engineering',
      'Specifying products with AI',
      'AI agents',
      'LLM integration (Gemini and Claude)',
      'Model Context Protocol (MCP)',
      'Responsible AI',
    ],
  },
  {
    id: 'projetos',
    label: 'Projects and Governance',
    caption: 'The method, and what it has to respect.',
    items: [
      'Scrum',
      'Agile methodologies',
      'Project management',
      'PMO fundamentals',
      'IT governance',
      'COBIT 2019',
      'ISO/IEC 38500',
    ],
  },
  {
    id: 'tecnica',
    label: 'Technical base',
    caption: 'The edge: I can build it.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'REST APIs',
      'JWT',
      'Git/GitHub',
      'Automated tests',
      'Vercel · Render · Neon',
    ],
  },
]

export const enServicesIntro =
  'I work in the space between a business problem and a product that exists. I run the discovery, write the requirements, prioritise the backlog and drive the build — and the technical base is there so a specification never sits waiting for someone to be available.'

export const enServices: Service[] = [
  {
    id: 'discovery',
    icon: 'compass',
    title: 'Discovery and problem definition',
    description:
      'Before writing a requirement, understanding who loses what. Talking to the people who operate the process, reading how it works today and framing the problem worth solving first.',
    includes: [
      'Interviews with stakeholders and with users',
      'Mapping the process as it is today',
      'Framing the problem and the solution hypothesis',
      'Value proposition and MVP scope',
    ],
    proof: { label: 'CEAP Connect', slug: 'ceap-connect' },
  },
  {
    id: 'requisitos',
    icon: 'list',
    title: 'Requirements and backlog',
    description:
      'Turning a business need into something buildable and prioritised — with acceptance criteria, not with "roughly like this".',
    includes: [
      'User stories with acceptance criteria',
      'Documented business rules',
      'Backlog by epics and prioritisation',
      'A roadmap by delivery, not by loose dates',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
  {
    id: 'dados',
    icon: 'chart',
    title: 'Data analysis and indicators',
    description:
      'Using the data that already exists to decide priority: where the funnel leaks, which indicator shows it improved, what is worth tracking.',
    includes: [
      'Funnel analysis and bottleneck identification',
      'Defining product indicators',
      'Relational modelling in PostgreSQL',
      'Dashboards for tracking',
    ],
    proof: { label: 'VESTORA', slug: 'vestora' },
  },
  {
    id: 'ia',
    icon: 'sparkles',
    title: 'Products with generative AI',
    description:
      'AI inside the product solving something specific — and the specification that defines where it decides and where it only suggests.',
    includes: [
      'Specifying what the AI does in the product',
      'Prompt engineering and tone control',
      'LLM integration (Gemini, Claude)',
      'A clear line between the AI’s call and the person’s call',
    ],
    proof: { label: 'VendIA', slug: 'vendia' },
  },
  {
    id: 'arquitetura',
    icon: 'layers',
    title: 'Architecture specification',
    description:
      'Designing how the parts talk before building: the API contract, the data model and the limits of the system.',
    includes: [
      'Documented API contract',
      'Data model and multi-tenancy',
      'Stack decisions with explicit trade-offs',
      'Automated tests and CI',
    ],
    proof: { label: 'FinPilot', slug: 'finpilot' },
  },
  {
    id: 'entrega',
    icon: 'rocket',
    title: 'Building with AI and shipping',
    description:
      'Driving execution with AI support until the product is live — and being able to say what is a prototype and what shipped.',
    includes: [
      'A build driven by specification and prompts',
      'Deploys on Vercel, Render and Neon',
      'Environment variables and CI/CD',
      'Installable PWA and offline support',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
]

export const enProjects: Project[] = [
  {
    slug: 'ceap-connect',
    image: '/projects/ceap-connect.webp',
    title: 'CEAP Connect',
    tagline: 'Following the candidate from application to result, to tackle drop-off.',
    year: '2026',
    category: 'Produto',
    stage: 'published',
    role: 'Product Owner · Discovery · Building with AI',
    featured: true,
    overview:
      'A FIAP Challenge project, my team’s entry and a finalist at NEXT FIAP 2026. A live web platform that follows candidates at CEAP — a free technical school for young people — from application to the result of the selection process.',
    challenge:
      'Candidates disappear halfway through the selection process. The coordination team only finds out when the exam room has fewer people than the list of applicants, and by then there is nothing left to do. What was missing was seeing who was at risk while there was still time to act.',
    solution:
      'I ran the discovery with CEAP’s Projects and Innovation team and analysed the funnel of the last selection process: 777 applicants and 206 present at the exam. With the biggest drop-off stage identified, I prioritised the backlog around it — an explainable risk score, an intervention console for the coordination team, a guardians module and an AI assistant for candidates with nobody at home to ask.',
    experience:
      'As PO, I documented the backlog by epics, the roadmap and the architecture before building, and drove execution with AI from those specifications. The score had to be explainable: a number saying "high risk" without saying why does not get used by the person calling the candidate. And the audience is 14 to 18 years old, arriving on a phone — that set mobile-first and immediate feedback on every action.',
    features: [
      'Explainable drop-off risk score',
      'Intervention console for the coordination team',
      'Guardians module',
      'AI assistant (Gemini) for candidate questions',
      'Application document management',
      'Mock exams and test preparation',
      'Backlog by epics, roadmap and architecture documented',
      'Back end with 141 automated tests and CI',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['FastAPI', 'Python', 'PostgreSQL', 'JWT'],
      tools: ['Google Gemini', 'Vercel', 'Neon', 'GitHub Actions'],
    },
    metrics: [
      { value: '777', label: 'applicants in the funnel analysed' },
      { value: '206', label: 'present at the exam' },
      { value: '141', label: 'automated tests' },
    ],
    results: [
      'Finalist at NEXT FIAP 2026 — a team project, with my role as Product Owner and developer.',
      'Presented to the Director of CEAP, who approved taking the project forward and referred it to the IT Coordination team.',
      'The numbers above describe the funnel I analysed to prioritise the backlog. They are not a measured reduction in drop-off.',
    ],
    link: 'https://ceapconnect.vercel.app',
    github: 'https://github.com/Kadu2728/ceapconnect',
  },
  {
    slug: 'giro',
    image: '/projects/giro.webp',
    title: 'GIRO',
    tagline: 'A B2B merchandising SaaS born from my own paper notes.',
    year: '2026',
    category: 'Produto',
    stage: 'prototype',
    role: 'Product Owner · Business rules · Architecture',
    featured: true,
    overview:
      'A prototype app for merchandising field reps. It came out of the paper notes I used myself on the job at Panco — the problem came from the field, not from a brief.',
    challenge:
      'Consumer goods companies cannot see stock inside the retailer. The only real number is the one the rep counts on the shelf, and that number dies on a paper form or in a spreadsheet nobody opens. Whoever decides replenishment decides without data.',
    solution:
      'I turned field observation into business rules. Two of them hold the product up: turnover is always calculated from consecutive counts, never typed in; and a stockout is only recorded when the rep confirms the shelf is empty. I specified the full architecture and built the PWA prototype with demo data.',
    experience:
      'Those two rules took me longer than the interface, and they are what separates the product from a form. An editable turnover field would become an invented number; an uncounted SKU is "I have not seen it yet", not "zero stock" — treating them as equal would destroy trust in the data. Offline mode exists because in-store signal is bad: the count saves on the device and syncs when the connection returns.',
    features: [
      'Turnover calculated from consecutive counts',
      'Stockouts recorded only with shelf confirmation',
      'Local sync queue so it works offline',
      'Installable PWA prototype',
      'Demo data to explore without signing up',
      'Consolidated view for the supervisor',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI (specified)', 'PostgreSQL (specified)'],
      tools: ['PWA', 'Service Worker', 'Vercel'],
    },
    metrics: [
      { value: 'Offline', label: 'local sync queue' },
      { value: 'PWA', label: 'installable on a phone' },
    ],
    results: [
      'It is a prototype: the front end is live with demo data.',
      'The back end (FastAPI and PostgreSQL) and multi-tenant isolation are specified in the architecture and not yet implemented.',
      'The interface was built against that contract, so it does not change when the back end arrives.',
    ],
    link: 'https://giro-azure.vercel.app',
    github: 'https://github.com/Kadu2728/GIRO',
  },
  {
    slug: 'vendia',
    image: '/projects/vendia.webp',
    title: 'VendIA',
    tagline: 'Generative AI for marketplace sellers with no team behind them.',
    year: '2026',
    category: 'Produto',
    stage: 'published',
    role: 'Product · MVP scope · Building with AI',
    featured: true,
    overview:
      'A live tool that helps small marketplace sellers write listings, set prices and answer customers.',
    challenge:
      'A small seller competes in the same shop window as a large store, with no copywriter, no pricing analyst and nobody on support. The listing goes out in a rush, loses search inside the marketplace itself, and the sale goes to whoever has a team.',
    solution:
      'I defined the value proposition and cut the MVP scope down to three features — listing generation, price suggestion and support for customer replies — instead of promising a suite. I designed the prompts and the Google Gemini integration, with Claude as the alternative.',
    experience:
      'The price suggestion always comes with the reasoning: a tool that returns a number without explaining it does not get used twice. And the tone of the customer reply is the seller’s choice, because the voice of the shop is theirs, not the model’s.',
    features: [
      'Listing generation from the product details',
      'Price range suggestion with reasoning',
      'Support for customer replies, with configurable tone',
      'Prompts designed per function, not a generic chat',
      'Google Gemini integration (Claude as the alternative)',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'GitHub Actions'],
    },
    metrics: [
      { value: '3', label: 'features in the MVP' },
      { value: 'Gemini', label: 'LLM integrated' },
    ],
    results: [
      'Live and open to testing — front end on Vercel, a FastAPI API and a PostgreSQL database.',
      'Continuous integration set up on GitHub Actions.',
    ],
    link: 'https://vend-ia-weld.vercel.app',
    github: 'https://github.com/Kadu2728/VendIA',
  },
  {
    slug: 'vestora',
    image: '/projects/vestora.webp',
    title: 'VESTORA',
    tagline: 'Portfolio indicators defined before any dashboard was drawn.',
    year: '2026',
    category: 'Plataforma',
    stage: 'published',
    role: 'Product · Indicators · Data modelling',
    featured: true,
    overview:
      'A live platform to track a portfolio of stocks, REITs and ETFs, with holdings, returns and dividends in one place.',
    challenge:
      'Anyone invested in more than one asset class ends up with the information scattered: one broker shows stocks, another shows funds, and the spreadsheet that tried to join them goes stale. The real question — "am I doing better?" — goes unanswered.',
    solution:
      'I started from the indicators: what has to be answered before a screen is drawn. I modelled portfolio, asset, position and payout as separate entities in PostgreSQL, which makes it possible to compute returns, dividends and portfolio growth without duplicating data — and that model is what feeds the dashboards.',
    experience:
      'Investing is an intimidating subject, and signing up is friction. I included a demo account that generates an example portfolio with no registration, for anyone who wants to understand the product before putting real data in.',
    features: [
      'Consolidated portfolio of stocks, REITs and ETFs',
      'Indicators for returns, dividends and portfolio growth',
      'Relational model that avoids duplicated data',
      'Demo account with an example portfolio, no signup',
      'JWT authentication',
      'Payout history per asset',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Recharts'],
      backend: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT'],
      tools: ['Vercel', 'Render'],
    },
    metrics: [
      { value: '3', label: 'asset classes' },
      { value: 'Demo', label: 'example portfolio, no signup' },
    ],
    results: ['Live — front end on Vercel, API on Render and a PostgreSQL database.'],
    link: 'https://vestora-roan.vercel.app',
    github: 'https://github.com/Kadu2728/Vestora',
  },
  {
    slug: 'finpilot',
    image: '/projects/finpilot.webp',
    title: 'FinPilot',
    tagline: 'Income, expenses and targets for people with no finance department.',
    year: '2026',
    category: 'Plataforma',
    stage: 'published',
    role: 'Requirements · Data modelling · Build',
    featured: true,
    overview:
      'A SaaS for small businesses and freelancers to track income, expenses and targets.',
    challenge:
      'Freelancers and small businesses track money in a spreadsheet or a notebook. That works until the volume grows — then nobody knows whether the month closed in the black, let alone whether the quarterly target still stands.',
    solution:
      'I gathered the requirements for tracking income, expenses, targets and cash flow and modelled the data in PostgreSQL. I built the REST API in FastAPI with JWT authentication and OpenAPI/Swagger documentation, with reports rendered as charts.',
    experience:
      'Financial tracking only works if entry is fast: if logging an expense is a chore, people stop logging and the system loses its purpose. So the path to an entry is the shortest one in the interface, and the dashboard answers the simplest question first — did more come in than went out?',
    features: [
      'Income, expenses and cash flow',
      'Financial targets',
      'Reports as charts',
      'REST API documented in OpenAPI/Swagger',
      'JWT authentication',
    ],
    tech: {
      frontend: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
      tools: ['Railway', 'Vercel'],
    },
    metrics: [
      { value: 'OpenAPI', label: 'documented contract' },
      { value: 'JWT', label: 'protected session' },
    ],
    results: ['Live — front end on Vercel and API on Railway.'],
    link: 'https://finpilot-omega.vercel.app',
    github: 'https://github.com/Kadu2728/FinPilot',
  },

  /* ---------- Projects that predate the current positioning ---------- */
  {
    slug: 'giro-varejo',
    image: '/projects/giro-varejo.webp',
    title: 'GIRO — Landing',
    tagline: 'The page that pitches GIRO to whoever signs off on it.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
    overview:
      'GIRO landing page: it presents the merchandising execution tool to the consumer goods company — the buyer, not the daily user.',
    challenge:
      'The person using GIRO is the field rep, but the person signing off is the company — and they do not ask the same question. The rep wants to know whether it is quick to fill in; the company wants to know what information comes back.',
    solution:
      'The page speaks to the decision maker: it explains what the shelf count becomes once processed — turnover, stockout projection, route compliance — before mentioning a screen or a technology.',
    experience:
      'I split the landing page from the application into two projects because they are two audiences with two goals. Merging them into one interface would force one audience to wade through content written for the other.',
    features: [
      'Product pitch for the consumer goods company',
      'Explanation of the count, turnover and stockout cycle',
      'Responsive layout',
      'Scroll animations',
      'Call to action to explore the app',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: [],
      tools: ['Vercel'],
    },
    results: ['Live on Vercel.'],
    link: 'https://giro-varejo.vercel.app',
  },
  {
    slug: 'vitrine',
    image: '/projects/vitrine.webp',
    title: 'Vitrine',
    tagline: 'Shelf auditing through computer vision.',
    year: '2026',
    category: 'Aplicação',
    stage: 'prototype',
    role: 'Product · Computer Vision · Python',
    early: true,
    overview:
      'A library and CLI that analyse a photo of a supermarket shelf and return numbers: how many products are on display, how the space is split between regions, and where the gaps are.',
    challenge:
      'Consumer goods companies pay — in cash, in rebates, in trade agreements — for their products to occupy a given amount of shelf space, and have no way to verify that the space is actually being used. The information exists: it is in the photo the field rep takes. It just dies there as an image.',
    solution:
      'The photo goes in, the number comes out. The pipeline corrects orientation and perspective, detects products behind a protocol with interchangeable implementations, removes duplicates, groups them into shelves and computes share by count and by linear area. The output is the annotated image plus JSON with a versioned schema.',
    experience:
      'There is no front end, and that is an architectural decision: the annotated image is the interface and `--json` is the API. A web layer would add maintenance surface without adding capability.',
    features: [
      'Orientation and perspective correction',
      'Detection behind a protocol, with interchangeable implementations',
      'Shelf grouping',
      'Share by count, share by linear area and occupancy',
      'Empty shelf space detection',
      'Annotated image and JSON with a versioned schema',
      'Per-store history in SQLite',
    ],
    tech: {
      frontend: ['CLI (Typer)', 'Rich'],
      backend: ['Python', 'OpenCV', 'NumPy', 'Pydantic', 'SQLite'],
      tools: ['YOLO / Ultralytics', 'GitHub Actions'],
    },
    results: [
      'Works end to end on single photos and in batch.',
      'It is a prototype: the detector still has no weights trained on shelves, and detection metrics remain unmeasured — stated in the README itself.',
      'It does not identify SKU or brand: a product is a single class.',
    ],
    github: 'https://github.com/Kadu2728/vitrine',
  },
  {
    slug: 'vertice',
    image: '/projects/vertice.webp',
    title: 'Vértice',
    tagline: 'Government bond mark-to-market, explained in plain language.',
    year: '2026',
    category: 'Plataforma',
    stage: 'prototype',
    role: 'Architecture · Back-End · Applied AI',
    early: true,
    overview:
      'A simulator that computes the mark-to-market value of Brazilian treasury bonds and explains the result in plain text, without requiring the investor to follow the maths behind it.',
    challenge:
      'Millions of people hold government bonds and do not understand why their market value changes every day. When interest rates move, fixed-rate and inflation-linked bonds get marked to market — the price rises or falls with nothing having gone wrong.',
    solution:
      'The system is split into two worlds that never mix. The deterministic engine computes every price, rate and tax in pure Python. The AI layer only explains, in text, what the engine already computed.',
    experience:
      'The boundary between the two is the reason the project exists. A validator extracts every monetary value from the generated text and discards the response if anything fails to match the original payload, falling back to a static template. If a number appears on screen, it came from the engine — the AI never estimates a financial value.',
    features: [
      'Deterministic, isolated pricing engine',
      'Plain-language explanation generated by AI',
      'Validator that discards text with mismatched numbers',
      'Fallback to a static template when validation fails',
      'Golden tests against official Tesouro Transparente prices',
      'Architectural decisions recorded as ADRs',
    ],
    tech: {
      frontend: ['TypeScript', 'Node 20'],
      backend: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'Alembic'],
      tools: ['pytest', 'strict mypy'],
    },
    results: [
      'Golden tests recompute real bonds on real dates and compare against the official price published by Tesouro Transparente.',
      'The LTN matches within R$ 0.01.',
      'NTN-F and NTN-B have a documented, unresolved precision residual, with the tolerance visible in the code.',
    ],
    github: 'https://github.com/Kadu2728/vertice',
  },
  {
    slug: 'controle-produtos',
    image: '/projects/controle-produtos.webp',
    title: 'Product Manager',
    tagline: 'A CRUD with authentication in plain PHP, with zero dependencies.',
    year: '2026',
    category: 'Aplicação',
    stage: 'repo',
    role: 'Full-Stack · PHP',
    early: true,
    overview:
      'A web system to register and manage products with user authentication, built as a practical test for an internship position. REST API in PHP and a front end in plain JavaScript, with data in MySQL.',
    challenge:
      'Deliver a complete CRUD with authentication and a record of who registered each item — proving command of fundamentals rather than of a framework.',
    solution:
      'A REST API written by hand in PHP, a front end in plain JavaScript consuming that API, and MySQL for persistence. The product table records ID, registration date, responsible user, description, quantity and value.',
    experience:
      'No external dependencies: no framework, no Composer, no npm install. Anyone cloning the repository runs the project with what is already on the machine — a decision that removes the setup friction that usually gets in the way during a technical assessment.',
    features: [
      'User authentication',
      'Create, edit and remove products',
      'Record of which user registered each item',
      'Documented REST API',
      'Zero external dependencies',
    ],
    tech: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['PHP', 'MySQL', 'REST API'],
      tools: [],
    },
    results: ['Built as a practical test for a software development internship. Available in the repository.'],
    github: 'https://github.com/Kadu2728/crud-produtos',
  },
  {
    slug: 'controlcash',
    image: '/projects/controlcash.webp',
    title: 'ControlCash',
    tagline: 'Personal finance tracking built without a framework.',
    year: '2026',
    category: 'Aplicação',
    stage: 'published',
    role: 'Front-End · UX',
    early: true,
    overview:
      'A personal finance application with a dashboard, data visualisation and local persistence. Built from scratch in plain JavaScript.',
    challenge:
      'Build an application with real state, charts and persistence without reaching for a framework — to prove command of what sits underneath React, not just of React.',
    solution:
      'State managed by hand, rendering driven by events, charts with Chart.js and persistence in LocalStorage. No build step, no runtime dependency.',
    experience:
      'Without a framework, every re-render is an explicit decision. That forced me to think about when the interface actually needs to change — a discipline I carried into the React projects.',
    features: [
      'Financial organisation dashboard',
      'Interactive charts',
      'Data visualisation by category',
      'Local persistence of entries',
      'Responsive interface',
    ],
    tech: {
      frontend: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      backend: ['LocalStorage'],
      tools: ['Vercel'],
    },
    results: ['Live on Vercel.'],
    link: 'https://controlcash-weld.vercel.app',
    github: 'https://github.com/Kadu2728/ControlCash',
  },
  {
    slug: 'investbem',
    image: '/projects/investbem.webp',
    title: 'InvestBem',
    tagline: 'A fintech landing page built around conversion.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
    overview:
      'A lead capture page for an investment fintech, with a premium aesthetic and considered motion.',
    challenge:
      'An investment page has to sell trust before it sells a product. Too much effect reads as amateur; too little reads as outdated. The balance is the work.',
    solution:
      'Visual hierarchy built around a single call to action, with comparable plans side by side and scroll animations that reveal content at reading pace.',
    experience:
      'The micro-interactions exist to respond, not to draw attention. Every hover confirms that an element is clickable; every reveal follows the scroll instead of competing with it.',
    features: [
      'Conversion-oriented hero',
      'Comparative plans section',
      'Scroll animations',
      'Hover and focus micro-interactions',
      'Fully responsive',
    ],
    tech: { frontend: ['JavaScript', 'HTML5', 'CSS3'], backend: [], tools: ['Vercel'] },
    results: ['Live on Vercel.'],
    link: 'https://investbem.vercel.app',
    github: 'https://github.com/Kadu2728/InvestBem',
  },
  {
    slug: 'barbearia-fino',
    image: '/projects/barbearia-fino.webp',
    title: 'Barbearia FINOViSÚ',
    tagline: 'Booking in a few taps, for people arriving on a phone.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UX/UI · Front-End',
    early: true,
    overview:
      'A complete digital experience for a barbershop: online booking, a gallery of cuts and an urban visual identity.',
    challenge:
      'Barbershop customers decide on their phone, in the middle of something else. If booking takes more than three steps, they give up and send a message instead — which pushes the work back onto the owner.',
    solution:
      'A booking flow reduced to the minimum, with the gallery of cuts as the selling argument. Built mobile-first and adapted to desktop afterwards, because that is where nearly all the traffic comes from.',
    experience:
      'The urban visual identity is not decoration: it is what separates this barbershop from the other three on the same street. The site has to feel like the place.',
    features: [
      'Simplified online booking',
      'Gallery of cuts',
      'Distinct visual identity',
      'Mobile-first layout',
      'Hover and touch interactions',
    ],
    tech: { frontend: ['JavaScript', 'HTML5', 'CSS3'], backend: [], tools: ['Vercel'] },
    results: ['Built for a real client, live.'],
    link: 'https://barbearia-fino.vercel.app',
    github: 'https://github.com/Kadu2728/BarbeariaFINO',
  },
  {
    slug: 'dani-brigs',
    image: '/projects/dani-brigs.webp',
    title: 'Dani Brigs',
    tagline: 'A digital menu that sells through the channel the client already used.',
    year: '2026',
    category: 'Experiência',
    stage: 'published',
    role: 'UI · Front-End',
    early: true,
    overview:
      'A digital experience for an artisanal confectionery in Sapopemba, São Paulo: a browsable menu, a product gallery and direct ordering.',
    challenge:
      'The confectionery was already selling well over WhatsApp. Imposing a new shopping cart would break what worked and add friction where there was none.',
    solution:
      'The menu is digital and browsable, but the order goes out over WhatsApp — the channel the client knows and where the conversation already happens. Technology comes in to organise the shop window, not to replace the sales process.',
    experience:
      'Food sells through the eye. The visual composition puts the product photo first, at a generous size, with the text playing a supporting role.',
    features: [
      'Browsable digital menu',
      'Product gallery',
      'Direct ordering via WhatsApp',
      'Image-led visual composition',
      'Mobile-first layout',
    ],
    tech: { frontend: ['JavaScript', 'HTML5', 'CSS3'], backend: [], tools: ['Vercel'] },
    results: ['Built for a real client, live.'],
    link: 'https://danibrigs.vercel.app',
    github: 'https://github.com/Kadu2728/DoceriaSite',
  },
]
