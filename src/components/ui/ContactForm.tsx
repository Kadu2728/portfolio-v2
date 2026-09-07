'use client'

import { useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'

type Field = 'name' | 'email' | 'message'
type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Formulário de contato.
 *
 * Todo campo tem <label> visível. Placeholder não é rótulo: some ao digitar,
 * some para leitor de tela e deixa quem foi interrompido sem saber o que
 * estava preenchendo.
 *
 * O erro fica ao lado do campo e é ligado por aria-describedby — erro só no
 * topo obriga a pessoa a caçar qual campo falhou.
 */
export function ContactForm() {
  const uid = useId()
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [failure, setFailure] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const fieldId = (f: Field) => `${uid}-${f}`
  const errorId = (f: Field) => `${uid}-${f}-erro`

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrors({})
    setFailure(null)

    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      company: String(data.get('company') ?? ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok) {
        setStatus('sent')
        formRef.current?.reset()
        return
      }
      if (json.errors) {
        setErrors(json.errors)
        setStatus('idle')
        return
      }
      setFailure(json.error ?? 'Não consegui enviar agora.')
      setStatus('error')
    } catch {
      setFailure('Sem conexão com o servidor. Tente pelo e-mail ou WhatsApp.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        role="status"
        className="flex h-full flex-col items-start justify-center border border-accent-line bg-accent-soft p-8"
      >
        <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent-line text-accent-text">
          <Check size={20} />
        </span>
        <p className="font-display text-2xl font-bold text-chalk">Mensagem enviada.</p>
        <p className="mt-3 max-w-sm text-base text-ash">
          Respondo em até 24 horas. Se for urgente, o WhatsApp é mais rápido.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-7 font-tech text-micro uppercase text-dim underline-offset-4 transition-colors hover:text-chalk hover:underline"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    )
  }

  const busy = status === 'sending'

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 border border-line bg-carbon p-8"
    >
      {/* Isca anti-spam: fora da tela e fora da ordem de tabulação, nunca
          escondida com display:none — leitor de tela ignora, robô preenche. */}
      <div className="absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor={`${uid}-company`}>Empresa</label>
        <input id={`${uid}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        id={fieldId('name')}
        name="name"
        label="Nome"
        autoComplete="name"
        error={errors.name}
        errorId={errorId('name')}
        disabled={busy}
      />
      <Field
        id={fieldId('email')}
        name="email"
        type="email"
        label="E-mail"
        autoComplete="email"
        error={errors.email}
        errorId={errorId('email')}
        disabled={busy}
      />
      <Field
        id={fieldId('message')}
        name="message"
        label="Mensagem"
        as="textarea"
        hint="Conte o contexto do projeto e o prazo."
        error={errors.message}
        errorId={errorId('message')}
        disabled={busy}
      />

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={busy}
          className={cn(
            'inline-flex items-center gap-2.5 rounded-sm bg-accent px-7 py-3.5',
            'font-tech text-label uppercase tracking-[0.08em] text-white',
            'transition-colors duration-200 hover:bg-accent-bright',
            'disabled:cursor-not-allowed disabled:opacity-60'
          )}
        >
          {busy ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
          {busy ? 'Enviando' : 'Enviar mensagem'}
        </button>

        <a
          href={`mailto:${profile.email}`}
          className="font-tech text-micro uppercase text-dim underline-offset-4 transition-colors hover:text-chalk hover:underline"
        >
          ou escrever direto
        </a>
      </div>

      <AnimatePresence>
        {failure && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="border-l-2 border-accent pl-4 text-sm text-ash"
          >
            {failure}{' '}
            <a href={`mailto:${profile.email}`} className="text-accent-text underline">
              {profile.email}
            </a>
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}

function Field({
  id,
  name,
  label,
  hint,
  error,
  errorId,
  type = 'text',
  as = 'input',
  autoComplete,
  disabled,
}: {
  id: string
  name: string
  label: string
  hint?: string
  error?: string
  errorId: string
  type?: string
  as?: 'input' | 'textarea'
  autoComplete?: string
  disabled?: boolean
}) {
  const hintId = `${id}-dica`
  const described = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ')

  const shared = {
    id,
    name,
    disabled,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': described || undefined,
    className: cn(
      'w-full rounded-sm border bg-void px-4 py-3 text-base text-chalk',
      'placeholder:text-dim transition-colors duration-200',
      'focus:outline-none focus:border-accent',
      error ? 'border-accent' : 'border-line hover:border-line-strong'
    ),
  }

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-tech text-micro uppercase text-ash">
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea {...shared} rows={5} className={cn(shared.className, 'resize-y')} />
      ) : (
        <input {...shared} type={type} />
      )}

      {hint && !error && (
        <p id={hintId} className="mt-2 text-sm text-dim">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-accent-text">
          {error}
        </p>
      )}
    </div>
  )
}
