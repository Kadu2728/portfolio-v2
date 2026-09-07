'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Bundle } from '@/data/content'

export type Locale = 'pt' | 'en'

/**
 * Idioma da página.
 *
 * O conteúdo entra por contexto em vez de cada componente importar o arquivo
 * de dados direto: assim a mesma árvore de seções serve às duas rotas, e
 * traduzir não exige duplicar componente.
 *
 * A rota decide o idioma (`/` é pt, `/en` é en) — não o navegador. Detecção
 * automática trocaria a página sob os pés de quem chegou por um link, e o
 * seletor é explícito justamente para que a escolha seja de quem lê.
 */
type Ctx = { locale: Locale; c: Bundle }

const LocaleContext = createContext<Ctx | null>(null)

export function LocaleProvider({
  locale,
  content,
  children,
}: {
  locale: Locale
  content: Bundle
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ locale, c: content }}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale precisa estar dentro de <LocaleProvider>')
  return ctx
}

/** Prefixo de rota do idioma: '' para pt, '/en' para en. */
export const localeHref = (locale: Locale, path = '') =>
  locale === 'en' ? `/en${path}` : path || '/'
