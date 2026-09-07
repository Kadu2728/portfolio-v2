import { NextResponse } from 'next/server'

/**
 * Envio do formulário de contato.
 *
 * A chave do provedor fica só no servidor. Postar direto do navegador para
 * um serviço de e-mail exporia a credencial no bundle, e qualquer pessoa
 * poderia usá-la para disparar mensagens em nome do site.
 *
 * Para ativar: pegue uma access key gratuita em web3forms.com (informa o
 * e-mail, recebe a chave — não cria conta) e defina WEB3FORMS_ACCESS_KEY
 * nas variáveis de ambiente da Vercel.
 */
const ENDPOINT = 'https://api.web3forms.com/submit'

type Payload = {
  name?: unknown
  email?: unknown
  message?: unknown
  /** Campo isca: invisível para gente, preenchido por robô. */
  company?: unknown
}

const asText = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  // Robô preencheu a isca: responde sucesso e descarta em silêncio, para
  // não ensinar o script qual campo o denunciou.
  if (asText(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const name = asText(body.name)
  const email = asText(body.email)
  const message = asText(body.message)

  // Validação no servidor também: a do navegador é conveniência, não defesa.
  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Informe seu nome.'
  if (!isEmail(email)) errors.email = 'Informe um e-mail válido.'
  if (message.length < 10) errors.message = 'Escreva ao menos 10 caracteres.'
  if (name.length > 120 || email.length > 160 || message.length > 4000) {
    errors.message = 'Conteúdo longo demais.'
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY
  if (!key) {
    return NextResponse.json(
      { error: 'O envio ainda não está configurado. Use o e-mail ou o WhatsApp.' },
      { status: 503 }
    )
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: `Contato pelo portfólio — ${name}`,
        from_name: 'Portfólio',
        name,
        email,
        message,
      }),
    })

    if (!res.ok) throw new Error(`provedor respondeu ${res.status}`)
    return NextResponse.json({ ok: true })
  } catch {
    // A mensagem para o usuário não expõe detalhe de infraestrutura, e
    // sempre oferece o caminho alternativo.
    return NextResponse.json(
      { error: 'Não consegui enviar agora. Tente pelo e-mail ou WhatsApp.' },
      { status: 502 }
    )
  }
}
