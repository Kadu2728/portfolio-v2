export type Service = {
  id: string
  /** Nome do ícone em lucide-react, resolvido no componente. */
  icon: 'layers' | 'server' | 'palette' | 'sparkles' | 'database' | 'rocket'
  title: string
  description: string
  /** O que entra na entrega. Concreto, não adjetivo. */
  includes: string[]
  /**
   * O projeto que prova a capacidade. É o que separa esta seção de uma
   * lista de promessas: cada serviço aponta para código no ar.
   */
  proof: { label: string; slug: string }
}

export const services: Service[] = [
  {
    id: 'fullstack',
    icon: 'layers',
    title: 'Aplicação web completa',
    description:
      'Do modelo de dados à interface, incluindo colocar no ar. Você conversa com uma pessoa só, do início ao fim.',
    includes: [
      'Modelagem do banco e regra de negócio',
      'API e front-end integrados',
      'Autenticação e níveis de acesso',
      'Publicação em produção',
    ],
    proof: { label: 'CEAP Connect', slug: 'ceap-connect' },
  },
  {
    id: 'api',
    icon: 'server',
    title: 'API REST com autenticação',
    description:
      'Back-end para o seu produto ou para integrar sistemas que hoje não se falam, com contrato claro e sessão protegida.',
    includes: [
      'Endpoints REST documentados',
      'Autenticação JWT e isolamento por usuário',
      'Migrations versionadas',
      'Contrato de dados definido antes da tela',
    ],
    proof: { label: 'VESTORA', slug: 'vestora' },
  },
  {
    id: 'interface',
    icon: 'palette',
    title: 'Interface e experiência',
    description:
      'Site ou aplicação que funciona bem no celular, carrega rápido e conduz a pessoa até a ação que importa.',
    includes: [
      'Layout responsivo, pensado a partir do mobile',
      'Design system com tokens, não valores soltos',
      'Acessibilidade: foco visível, contraste, leitor de tela',
      'Microinterações com propósito',
    ],
    proof: { label: 'InvestBem', slug: 'investbem' },
  },
  {
    id: 'ia',
    icon: 'sparkles',
    title: 'IA generativa aplicada',
    description:
      'IA dentro do produto resolvendo algo específico — não um chat genérico colado na lateral da tela.',
    includes: [
      'Assistente com respostas em streaming e memória',
      'Geração multimodal a partir de imagem',
      'Prompt engineering e ajuste de tom',
      'Fronteira clara entre o que a IA decide e o que ela só explica',
    ],
    proof: { label: 'VendIA', slug: 'vendia' },
  },
  {
    id: 'dados',
    icon: 'database',
    title: 'Modelagem e banco de dados',
    description:
      'Estrutura que aguenta o produto crescer, em vez de virar dívida técnica no terceiro mês.',
    includes: [
      'Modelagem relacional em PostgreSQL',
      'Migrations com Alembic',
      'Consultas otimizadas e índices',
      'Automação de relatório e importação de planilha',
    ],
    proof: { label: 'Vértice', slug: 'vertice' },
  },
  {
    id: 'deploy',
    icon: 'rocket',
    title: 'Publicação e infraestrutura',
    description:
      'Tirar o projeto da sua máquina e colocar no ar, com domínio, variáveis de ambiente e deploy automático.',
    includes: [
      'Deploy em Vercel, Render, Railway e Neon',
      'CI/CD com GitHub Actions',
      'Variáveis de ambiente e domínio',
      'PWA instalável e funcionamento offline',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
]

export const servicesIntro =
  'Trabalho o produto inteiro. Se você precisa de uma parte, eu entrego a parte; se precisa da coisa toda, não vai precisar coordenar três pessoas para isso acontecer.'
