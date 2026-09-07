'use client'

import { LocaleProvider, type Locale } from '@/lib/locale'
import { getContent } from '@/data/content'
import { LangSync } from '@/components/LangSync'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stack } from '@/components/sections/Stack'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'

/**
 * A mesma árvore de seções serve às duas rotas — só o conteúdo do provedor
 * muda. Duplicar a página por idioma faria cada ajuste de layout precisar
 * ser feito duas vezes, e uma das duas ficaria para trás.
 */
export function Shell({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale} content={getContent(locale)}>
      <LangSync locale={locale} />
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
