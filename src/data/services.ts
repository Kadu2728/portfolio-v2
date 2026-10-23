export type Service = {
  id: string
  /** Nome do ícone em lucide-react, resolvido no componente. */
  icon: 'compass' | 'list' | 'chart' | 'sparkles' | 'layers' | 'rocket'
  title: string
  description: string
  /** O que entra na entrega. Concreto, não adjetivo. */
  includes: string[]
  /**
   * O projeto que prova a capacidade. É o que separa esta seção de uma
   * lista de promessas: cada item aponta para algo construído.
   */
  proof: { label: string; slug: string }
}

/**
 * O QUE EU FAÇO — na ordem do fluxo de produto.
 *
 * Não é uma lista de serviços de freelancer: é o recorte do trabalho de
 * produto que eu já executei, cada um amarrado ao projeto que o comprova.
 */
export const services: Service[] = [
  {
    id: 'discovery',
    icon: 'compass',
    title: 'Discovery e definição do problema',
    description:
      'Antes de escrever requisito, entender quem perde o quê. Conversa com quem opera, leitura do processo atual e recorte do problema que vale resolver primeiro.',
    includes: [
      'Entrevista com stakeholder e com quem usa',
      'Mapeamento do processo como ele é hoje',
      'Recorte do problema e hipótese de solução',
      'Proposta de valor e escopo do MVP',
    ],
    proof: { label: 'CEAP Connect', slug: 'ceap-connect' },
  },
  {
    id: 'requisitos',
    icon: 'list',
    title: 'Requisitos e backlog',
    description:
      'Traduzir necessidade de negócio em algo construível e priorizado — com critério de aceite, não com "mais ou menos assim".',
    includes: [
      'User stories com critério de aceite',
      'Regras de negócio documentadas',
      'Backlog por épicos e priorização',
      'Roadmap por entrega, não por data solta',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
  {
    id: 'dados',
    icon: 'chart',
    title: 'Análise de dados e indicadores',
    description:
      'Usar o dado que já existe para decidir prioridade: onde o funil vaza, qual indicador mostra que melhorou, o que vale acompanhar.',
    includes: [
      'Análise de funil e identificação de gargalo',
      'Definição de indicadores do produto',
      'Modelagem relacional em PostgreSQL',
      'Dashboards de acompanhamento',
    ],
    proof: { label: 'VESTORA', slug: 'vestora' },
  },
  {
    id: 'ia',
    icon: 'sparkles',
    title: 'Produto com IA generativa',
    description:
      'IA dentro do produto resolvendo algo específico — e a especificação que define onde ela decide e onde ela só sugere.',
    includes: [
      'Especificação da função da IA no produto',
      'Engenharia de prompt e ajuste de tom',
      'Integração de LLM (Gemini, Claude)',
      'Limite claro entre decisão da IA e decisão da pessoa',
    ],
    proof: { label: 'VendIA', slug: 'vendia' },
  },
  {
    id: 'arquitetura',
    icon: 'layers',
    title: 'Especificação de arquitetura',
    description:
      'Desenhar como as partes conversam antes de construir: contrato de API, modelo de dados e os limites do sistema.',
    includes: [
      'Contrato de API documentado',
      'Modelo de dados e multiempresa',
      'Decisão de stack com trade-off explícito',
      'Testes automatizados e CI',
    ],
    proof: { label: 'FinPilot', slug: 'finpilot' },
  },
  {
    id: 'entrega',
    icon: 'rocket',
    title: 'Construção com IA e publicação',
    description:
      'Conduzir a execução com apoio de IA até o produto no ar — e saber dizer o que é protótipo e o que é produto publicado.',
    includes: [
      'Construção conduzida por especificação e prompts',
      'Deploy em Vercel, Render e Neon',
      'Variáveis de ambiente e CI/CD',
      'PWA instalável e funcionamento offline',
    ],
    proof: { label: 'GIRO', slug: 'giro' },
  },
]

export const servicesIntro =
  'Eu ocupo o espaço entre o problema de negócio e o produto construído. Faço o discovery, escrevo o requisito, priorizo o backlog e conduzo a construção — e a base técnica existe para que a especificação não fique presa esperando alguém disponível.'
