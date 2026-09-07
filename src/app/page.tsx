import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stack } from '@/components/sections/Stack'
import { Projects } from '@/components/sections/Projects'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'

/**
 * Ritmo da página: impacto (Hero) → respiro (Sobre) → complexidade (Stack)
 * → impacto (Projetos) → densidade (Formação) → conclusão (Contato).
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
