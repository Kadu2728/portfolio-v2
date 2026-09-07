'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/locale'

/**
 * Ajusta o `lang` do documento ao idioma da rota.
 *
 * O App Router tem um único root layout, e o atributo `lang` do <html> é
 * escrito ali — então o HTML inicial de /en sairia como pt-BR. Leitor de
 * tela lê o DOM vivo, e é ele quem depende desse atributo para escolher a
 * pronúncia; deixar errado faria o conteúdo em inglês ser lido com fonemas
 * portugueses.
 *
 * Para o buscador, o sinal que vale é o hreflang declarado no metadata de
 * cada rota, que já aponta as duas versões uma para a outra.
 */
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
  }, [locale])

  return null
}
