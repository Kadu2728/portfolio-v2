import type { Chapter, Project, StackGroup } from '@/types'
import type { Service } from '@/data/services'

/**
 * Conteúdo editorial em inglês.
 *
 * Os slugs, títulos de projeto e nomes de tecnologia não são traduzidos: são
 * identificadores. Traduzir "VendIA" ou "Next.js" quebraria a rota e a busca.
 */
export const enChapters: Chapter[] = [
  {
    id: 'curiosity',
    index: '01',
    word: 'Curiosity',
    title: 'It started with wanting to know how things work underneath.',
    body: 'No course brought me here. It was opening the element inspector and never quite closing it again. The question was never "how do I make this work", it was "why does it work like this".',
  },
  {
    id: 'code',
    index: '02',
    word: 'Code',
    title: 'I learned that making it work is only half the job.',
    body: 'The other half is doing it in a way the next person understands — including me, three months later. I write code for whoever reads it, not for whoever runs it.',
  },
  {
    id: 'design',
    index: '03',
    word: 'Design',
    title: 'Interface is not decoration. It is where the product happens.',
    body: 'Type hierarchy, consistent spacing, visible focus states, behaviour on a slow connection. The kind of detail nobody praises, but everyone feels when it is missing.',
  },
  {
    id: 'product',
    index: '04',
    word: 'Product',
    title: 'Software without a real problem is an exercise.',
    body: 'Before picking the stack, I want to know who is suffering and why. GIRO exists because I count stock on supermarket shelves. CEAP Connect exists because candidates drop out halfway through the process.',
  },
  {
    id: 'fullstack',
    index: '05',
    word: 'Full-Stack',
    title: 'From the data model to the pixel, without outsourcing decisions.',
    body: 'I can design the table, expose the route, consume it on the front end and ship it to production. That does not make me an expert in everything — it makes me able to deliver the whole product without waiting on anyone.',
  },
]

export const enProfile = {
  role: 'Full-Stack Developer',
  location: 'São Paulo, Brazil',
  education: {
    org: 'FIAP',
    course: 'Information Technology Management',
    period: 'Feb 2026 — Jul 2028',
  },
  experience: [
    {
      org: 'Independent Projects',
      role: 'Full-Stack Developer · Freelance',
      period: 'Jul 2025 — Present',
      place: 'São Paulo · Remote',
      body: 'I design, build and ship web applications end to end — from UX/UI and front end to REST API, database and production. All built on my own, from concept to a live product.',
      current: true,
    },
    {
      org: 'Panco',
      role: 'Merchandising Professional',
      period: 'Jan 2026 — Present',
      place: 'São Paulo, Brazil',
      body: 'In-store execution and stock turnover analysis. GIRO came out of this routine — software for a problem I live every day.',
      current: true,
    },
  ],
  languages: [
    { code: 'PT', name: 'Portuguese', level: 'Native' },
    { code: 'EN', name: 'English', level: 'Intermediate' },
  ],
} as const

export const enStack: StackGroup[] = [
  {
    id: 'frontend',
    label: 'Front-End',
    caption: 'The layer people touch.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Back-End',
    caption: 'The layer that holds the rules.',
    items: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'JWT', 'Alembic'],
  },
  {
    id: 'ai',
    label: 'AI & Tooling',
    caption: 'The layer that speeds up the rest.',
    items: ['Generative AI', 'AI Agents', 'Prompt Engineering', 'Automation', 'Git', 'GitHub'],
  },
]

export const enServicesIntro =
  'I work on the whole product. If you need one piece, I deliver that piece; if you need the whole thing, you will not have to coordinate three people to make it happen.'

export const enServices: Service[] = [
  {
    id: 'fullstack',
    icon: 'layers',
    title: 'Complete web application',
    description:
      'From the data model to the interface, including shipping it. You talk to one person, start to finish.',
    includes: [
      'Database modelling and business rules',
      'API and front end integrated',
      'Authentication and access levels',
      'Deployment to production',
    ],
    proof: { label: 'CEAP Connect', slug: 'ceap-connect' },
  },
  {
    id: 'api',
    icon: 'server',
    title: 'REST API with authentication',
    description:
      'A back end for your product, or to connect systems that do not talk to each other today, with a clear contract and a protected session.',
    includes: [
      'Documented REST endpoints',
      'JWT authentication and per-user isolation',
      'Versioned migrations',
      'Data contract defined before the screen',
    ],
    proof: { label: 'VESTORA', slug: 'vestora' },
  },
  {
    id: 'interface',
    icon: 'palette',
    title: 'Interface and experience',
    description:
      'A site or application that works well on a phone, loads fast and leads people to the action that matters.',
    includes: [
      'Responsive layout, designed mobile-first',
      'Design system with tokens, not scattered values',
      'Accessibility: visible focus, contrast, screen readers',
      'Micro-interactions with a purpose',
    ],
    proof: { label: 'InvestBem', slug: 'investbem' },
  },
  {
    id: 'ia',
    icon: 'sparkles',
    title: 'Applied generative AI',
    description:
      'AI inside the product solving something specific — not a generic chat bubble stuck to the corner of the screen.',
    includes: [
      'Assistant with streaming responses and memory',
      'Multimodal generation from an image',
      'Prompt engineering and tone control',
      'A clear line between what AI decides and what it only explains',
    ],
    proof: { label: 'VendIA', slug: 'vendia' },
  },
  {
    id: 'dados',
    icon: 'database',
    title: 'Data modelling and databases',
    description:
      'A structure that survives the product growing, instead of becoming technical debt in the third month.',
    includes: [
      'Relational modelling in PostgreSQL',
      'Migrations with Alembic',
      'Optimised queries and indexes',
      'Report automation and spreadsheet ingestion',
    ],
    proof: { label: 'Vértice', slug: 'vertice' },
  },
  {
    id: 'deploy',
    icon: 'rocket',
    title: 'Deployment and infrastructure',
    description:
      'Getting the project off your machine and onto the internet, with a domain, environment variables and automatic deploys.',
    includes: [
      'Deploys on Vercel, Render, Railway and Neon',
      'CI/CD with GitHub Actions',
      'Environment variables and domain setup',
      'Installable PWA with offline support',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
]

export const enProjects: Project[] = [
  {
    slug: 'ceap-connect',
    title: 'CEAP Connect',
    tagline: 'An admissions process turned into a gamified journey, with AI.',
    year: '2026',
    category: 'Produto',
    role: 'Product · UX/UI · Full-Stack',
    featured: true,
    overview:
      'CEAP is a free technical school for young people in social vulnerability. CEAP Connect turns its admissions process — bureaucratic and silent — into a journey with missions, progression and real rewards.',
    challenge:
      'Candidates drop out halfway through. Not for lack of ability, but for lack of context: they do not know what comes next, whether they are doing well, or who to ask. The process is a black box that only answers at the end.',
    solution:
      'I broke the process into visible missions, with progression from Beginner to CEAP Master. Every completed step earns XP and moves the candidate closer to rewards that are worth something outside the platform: courses and certificates from AWS, Google, Cisco and Fundação Bradesco. The loop closes in a panel where staff confirm each delivery — a prize that never reaches your hand is not a prize, it is a promise.',
    experience:
      'The most important decision was not technical. It was understanding that the audience is 14 to 18 years old and arrives on a phone, often on limited data. That set everything: mobile-first, short responses, immediate feedback on every action, and a 24/7 AI assistant for those who have nobody at home to ask.',
    features: [
      'Candidate journey with missions and stages',
      'XP, levels and achievements',
      'Reward catalogue with real courses and certificates',
      'Full redemption loop with delivery confirmation',
      'AI assistant with streaming responses and conversation memory',
      'Mock exams and test preparation',
      'Document upload',
      'Notification centre',
      'Admin panel with restricted access',
      'Real-time gamification dashboard',
    ],
    tech: {
      frontend: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'Render'],
    },
    metrics: [
      { value: '24/7', label: 'AI assistant' },
      { value: 'Approved', label: 'for the next stage' },
      { value: '100%', label: 'in production' },
    ],
    results: [
      'Presented as an investor-style pitch to the director-general of CEAP.',
      'The proposal was approved to advance to the next stage, with the IT Coordination team.',
      'Feedback on the gamification layer drove the following redesign of the product.',
    ],
    link: 'https://ceapconnect.vercel.app',
    github: 'https://github.com/Kadu2728/ceapconnect',
  },
  {
    slug: 'vestora',
    title: 'VESTORA',
    tagline: 'An investment portfolio with net worth and dividends in real time.',
    year: '2026',
    category: 'Plataforma',
    role: 'Full-Stack · Data Visualisation',
    featured: true,
    overview:
      'A platform to manage and track investments in stocks, REITs and ETFs. It consolidates net worth, dividends and returns into a single dashboard, with its own authentication and a demo account.',
    challenge:
      'Anyone investing across more than one asset class ends up with the information scattered: one broker shows stocks, another shows funds, and the spreadsheet trying to hold it together goes stale. Nobody sees the real position in one place.',
    solution:
      'I modelled portfolio, asset, position and dividend as separate entities, which makes it possible to compute returns and payouts without duplicating data. The front end consumes everything through React Query, which handles caching and revalidation — market data moves, and reloading the whole page on every change would be unacceptable.',
    experience:
      'Investing is an intimidating subject. Hence the demo account: you can explore the entire tool before entering a single real position. And the charts use Recharts rather than plain tables, because the question people ask is not "how much do I have", it is "am I doing better".',
    features: [
      'Consolidated portfolio of stocks, REITs and ETFs',
      'Net worth, dividends and returns in real time',
      'Interactive dashboard with charts',
      'Demo account with no real data required',
      'JWT authentication',
      'Forms validated end to end',
      'Dividend history per asset',
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
      { value: '3', label: 'asset classes' },
      { value: 'JWT', label: 'own authentication' },
      { value: 'Demo', label: 'test account' },
    ],
    results: ['In production, with front end, API and database all deployed.'],
    link: 'https://vestora-roan.vercel.app',
    github: 'https://github.com/Kadu2728/Vestora',
  },
  {
    slug: 'vendia',
    title: 'VendIA',
    tagline: 'The AI reads the product photo and writes the listing.',
    year: '2026',
    category: 'Produto',
    role: 'Full-Stack · Generative AI',
    featured: true,
    overview:
      'A generative-AI SaaS for marketplace sellers, focused on Shopee. It writes listings, suggests prices and answers customer questions.',
    challenge:
      'Small sellers do not have a copywriter. They write the listing in a hurry, with a weak title, and lose search visibility inside the marketplace itself. Hiring a writer per product does not work at that volume or margin.',
    solution:
      'Generation is multimodal: the seller uploads a photo and the AI reads the image, not just the text typed in. That captures visual detail sellers forget to mention — colour, material, finish. Beyond the listing, it suggests a competitive price range from registered competitors, always with a rationale, and answers customer questions in the configured tone.',
    experience:
      'The tone of the reply is the seller’s choice — formal, friendly or direct — because the voice of the shop belongs to them, not to the model. And every price suggestion comes with the reasoning: a tool that hands you a number without explaining it does not get used twice.',
    features: [
      'Listing generator from the product photo',
      'Multimodal image analysis',
      'Competitive price range with rationale',
      'Comparison against registered competitors',
      'Customer question responder',
      'Configurable tone: formal, friendly or direct',
    ],
    tech: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'Alembic', 'PostgreSQL'],
      tools: ['Google Gemini', 'Neon', 'Vercel', 'Render'],
    },
    metrics: [
      { value: '3', label: 'tools in the MVP' },
      { value: 'Multimodal', label: 'text + image' },
    ],
    results: ['In production — front end on Vercel, API on Render and database on Neon.'],
    link: 'https://vend-ia-weld.vercel.app',
    github: 'https://github.com/Kadu2728/VendIA',
  },
  {
    slug: 'giro',
    title: 'GIRO',
    tagline: 'Offline-first merchandising that computes stock turnover on its own.',
    year: '2026',
    category: 'Aplicação',
    role: 'Product · Front-End · Architecture',
    featured: true,
    overview:
      'A merchandising execution PWA. It turns the count a field rep makes at the shelf into a restocking decision.',
    challenge:
      'No consumer goods company can see stock inside the retailer. There is no integration and no shared ERP. The only real number is the one the rep counts by eye at the shelf — and that number dies on a paper form or in a spreadsheet nobody opens.',
    solution:
      'The app derives turnover from the count itself, comparing against the previous visit: what was there, plus what was restocked, minus what is left. From there it projects the days of stock remaining and flags when an item will not last until the next visit.',
    experience:
      'Two decisions took longer than the code. First: turnover is never typed, it is always derived — an editable field would become an invented number. Second: a stockout only exists if it was checked; an uncounted SKU means "not seen yet", not "zero stock". Treating them the same would destroy trust in the data. And everything works offline, because supermarket signal is poor: the count is stored on the device and syncs on its own when the connection returns.',
    features: [
      'Automatic turnover calculation between visits',
      'Projection of remaining days of stock',
      'Stockout alert before the next visit',
      'Offline operation with automatic sync',
      'Consolidated view for the supervisor',
      'Route compliance and per-SKU history',
      'Installable as a phone app',
    ],
    tech: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Framer Motion'],
      backend: ['FastAPI (specified)', 'PostgreSQL (specified)', 'Multi-tenant JWT'],
      tools: ['PWA', 'Service Worker'],
    },
    metrics: [
      { value: 'Offline', label: 'first' },
      { value: '14', label: 'routes' },
    ],
    results: [
      'API contract specified in FastAPI + PostgreSQL with multi-tenant isolation via JWT.',
      'The front end was built against that contract, so the interface will not change when the back end lands.',
      'Portfolio project, running on fictional data.',
    ],
    github: 'https://github.com/Kadu2728/GIRO',
  },
  {
    slug: 'vitrine',
    title: 'Vitrine',
    tagline: 'Shelf auditing through computer vision.',
    year: '2026',
    category: 'Aplicação',
    role: 'Product · Computer Vision · Python',
    overview:
      'A library and CLI that analyse a photo of a supermarket shelf and return numbers: how many products are on display, how the space is split between regions, and where the gaps are.',
    challenge:
      'Consumer goods companies pay — in cash, in rebates, in trade agreements — for their products to occupy a given amount of shelf space, and have no way to verify that the space is actually being used. The information exists: it is in the photo the field rep takes. It just dies there as an image, and the number that survives is the one someone typed on a clipboard, which nobody can audit later.',
    solution:
      'The photo goes in, the number comes out. The pipeline corrects EXIF orientation and perspective, detects products behind a protocol with three interchangeable implementations, removes duplicates, groups them into shelves and computes share by count, share by linear area and occupancy side by side. The output is the annotated image plus JSON with a versioned schema.',
    experience:
      'There is no front end, and that is an architectural decision rather than a limitation. The annotated image is the interface and `--json` is the API. A web layer would add maintenance surface without adding capability — and the side effect is the point: with no pretty screen, there is nowhere to hide a problem. The Gradio demo page exists, but lives outside the product and consumes the library like any other client.',
    features: [
      'EXIF orientation and perspective correction',
      'Detection behind a protocol, with interchangeable implementations',
      'Duplicate detection removal before counting',
      'Shelf grouping with a relative threshold',
      'Share by count, share by linear area and occupancy',
      'Empty shelf space detection',
      'Annotated image and JSON with a versioned schema',
      'Precision, recall and AP@50 measured over an annotated dataset',
      'Parallel batch processing, resumable after interruption',
      'Per-store history in SQLite',
    ],
    tech: {
      frontend: ['CLI (Typer)', 'Rich', 'Gradio (demo)'],
      backend: ['Python', 'OpenCV', 'NumPy', 'Pydantic', 'Pillow', 'SQLite'],
      tools: ['YOLO / Ultralytics', 'GitHub Actions'],
    },
    results: [
      'Works end to end on single photos and in batch: analyze, batch, history and benchmark.',
      'Phase 3 of 4: the real detector still has no weights trained on shelves, and detection metrics remain unmeasured — stated in the README itself.',
      'It does not identify SKU or brand: a product is a single class, and share is measured between regions of the shelf.',
    ],
    github: 'https://github.com/Kadu2728/vitrine',
  },
  {
    slug: 'vertice',
    title: 'Vértice',
    tagline: 'Government bond mark-to-market, explained in plain language.',
    year: '2026',
    category: 'Plataforma',
    role: 'Architecture · Back-End · Applied AI',
    overview:
      'A simulator that computes the mark-to-market value of Brazilian treasury bonds and explains the result in plain text, without requiring the investor to follow the maths behind it.',
    challenge:
      'Millions of people hold government bonds and do not understand why their market value changes every day. When interest rates move, fixed-rate and inflation-linked bonds get marked to market — the price rises or falls with nothing having gone wrong.',
    solution:
      'The system is split into two worlds that never mix. The deterministic engine computes every price, rate, tax and displayed value in pure Python, with no dependency on a framework, a database or AI. The AI layer only explains, in text, what the engine already computed.',
    experience:
      'The boundary between the two is the reason the project exists. A validator extracts every monetary value from the generated text and discards the response if anything fails to match the original payload, falling back to a deterministic static template. If a number appears on screen, it came from the engine — the AI never invents, estimates or corrects a financial value.',
    features: [
      'Deterministic, isolated pricing engine',
      'Plain-language explanation generated by AI',
      'Validator that discards text with mismatched numbers',
      'Fallback to a static template when validation fails',
      'Treasury bond data ingestion',
      'Golden tests against official Tesouro Transparente prices',
      'Architectural decisions recorded as ADRs',
    ],
    tech: {
      frontend: ['TypeScript', 'Node 20'],
      backend: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'Alembic'],
      tools: ['pytest', 'strict mypy', 'Design tokens'],
    },
    results: [
      'Golden tests recompute real bonds on real dates and compare against the official price published by Tesouro Transparente.',
      'The LTN matches within R$ 0.01 — real validation, not an estimate.',
      'NTN-F and NTN-B have a documented, unresolved precision residual, with a wider tolerance visible in the code and never loosened silently.',
    ],
    github: 'https://github.com/Kadu2728/vertice',
  },
  {
    slug: 'controle-produtos',
    title: 'Product Manager',
    tagline: 'A CRUD with authentication in plain PHP, with zero dependencies.',
    year: '2026',
    category: 'Aplicação',
    role: 'Full-Stack · PHP',
    overview:
      'A web system to register and manage products with user authentication, built as a practical test for an internship position. REST API in PHP and a front end in plain HTML, CSS and JavaScript, with data in MySQL.',
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
      'Table with ID, date, description, quantity and value',
      'Documented REST API',
      'Zero external dependencies',
    ],
    tech: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['PHP', 'MySQL', 'REST API', 'JWT'],
      tools: [],
    },
    results: ['Built as a practical test for a software development internship.'],
    github: 'https://github.com/Kadu2728/crud-produtos',
  },
  {
    slug: 'finpilot',
    title: 'FinPilot',
    tagline: 'A financial management SaaS for freelancers and small businesses.',
    year: '2026',
    category: 'Plataforma',
    role: 'Full-Stack',
    overview:
      'A financial management platform with authentication, dashboard and reports. It organises income, expenses and cash flow for people who do not have a finance department.',
    challenge:
      'Freelancers and small businesses track money in a spreadsheet or a notebook. That works until the volume grows — then nobody knows whether the month closed in the black, let alone whether the quarterly target still stands.',
    solution:
      'I modelled income, expense and target as first-class entities, with a REST API protected by JWT. The dashboard answers the question that matters before any other: did more come in than went out? Reports and indicators come after, for whoever wants to dig deeper.',
    experience:
      'Financial tracking only works if entry is fast. If logging an expense is a chore, people stop logging, and the whole system loses its purpose — so the path to an entry is the shortest one in the interface.',
    features: [
      'Income and expenses',
      'Cash flow',
      'Financial targets',
      'Indicators and reports',
      'Interactive dashboard',
      'JWT authentication',
    ],
    tech: {
      frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript'],
      backend: ['FastAPI', 'Python', 'PostgreSQL', 'REST API', 'JWT'],
      tools: ['Railway', 'Vercel'],
    },
    metrics: [{ value: 'JWT', label: 'protected session' }],
    results: ['In production — back end on Railway, front end on Vercel.'],
    link: 'https://finpilot-omega.vercel.app',
    github: 'https://github.com/Kadu2728/FinPilot',
  },
  {
    slug: 'controlcash',
    title: 'ControlCash',
    tagline: 'Personal finance tracking built without a framework.',
    year: '2026',
    category: 'Aplicação',
    role: 'Front-End · UX',
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
    results: ['In production on Vercel.'],
    link: 'https://controlcash-weld.vercel.app',
    github: 'https://github.com/Kadu2728/ControlCash',
  },
  {
    slug: 'investbem',
    title: 'InvestBem',
    tagline: 'A fintech landing page built around conversion.',
    year: '2026',
    category: 'Experiência',
    role: 'UX/UI · Front-End',
    overview:
      'A lead capture page for an investment fintech, with a premium aesthetic and considered motion.',
    challenge:
      'An investment page has to sell trust before it sells a product. Too much effect reads as amateur; too little reads as outdated. The balance is the work.',
    solution:
      'Visual hierarchy built around a single call to action, with comparable plans side by side and scroll animations that reveal content at reading pace — never before the reader gets there.',
    experience:
      'The micro-interactions exist to respond, not to draw attention. Every hover confirms that an element is clickable; every reveal follows the scroll instead of competing with it.',
    features: [
      'Conversion-oriented hero',
      'Comparative plans section',
      'Scroll animations',
      'Hover and focus micro-interactions',
      'Premium financial design',
      'Fully responsive',
    ],
    tech: { frontend: ['JavaScript', 'HTML5', 'CSS3'], backend: [], tools: ['Vercel'] },
    results: ['In production on Vercel.'],
    link: 'https://investbem.vercel.app',
    github: 'https://github.com/Kadu2728/InvestBem',
  },
  {
    slug: 'barbearia-fino',
    title: 'Barbearia FINOViSÚ',
    tagline: 'Booking in a few taps, for people arriving on a phone.',
    year: '2026',
    category: 'Experiência',
    role: 'UX/UI · Front-End',
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
    results: ['Built for a real client, in production.'],
    link: 'https://barbearia-fino.vercel.app',
    github: 'https://github.com/Kadu2728/BarbeariaFINO',
  },
  {
    slug: 'dani-brigs',
    title: 'Dani Brigs',
    tagline: 'A digital menu that sells through the channel the client already used.',
    year: '2026',
    category: 'Experiência',
    role: 'UI · Front-End',
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
    results: ['Built for a real client, in production.'],
    link: 'https://danibrigs.vercel.app',
    github: 'https://github.com/Kadu2728/DoceriaSite',
  },
]
