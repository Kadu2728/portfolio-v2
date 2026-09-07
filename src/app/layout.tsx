import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Cursor } from '@/components/ui/Cursor'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'
import './globals.css'

/**
 * Duas famílias, papéis distintos: Archivo carrega a voz editorial (headlines
 * e corpo) e Space Grotesk carrega a voz técnica (rótulos, números, metadata).
 * O contraste entre as duas é parte da identidade.
 */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const title = `${profile.short} — ${profile.role}`
const description =
  'Desenvolvedor full-stack em São Paulo. Construo experiências digitais do modelo de dados à interface — Next.js, React, TypeScript, FastAPI e PostgreSQL.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${profile.short}` },
  description,
  keywords: [
    'desenvolvedor full-stack',
    'creative developer',
    'React',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'Python',
    'PostgreSQL',
    'IA Generativa',
    'UX/UI',
    'São Paulo',
    'portfólio',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': siteUrl, en: `${siteUrl}/en` },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: `${profile.short} · Portfólio`,
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  colorScheme: 'dark',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: '+5511993582543',
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'FIAP' },
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'IA Generativa'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${grotesk.variable}`}>
      <head>
        {/*
          Rede de segurança: o Framer Motion emite o estado inicial já no HTML
          do servidor, então sem JS todo o conteúdo ficaria em opacity 0 —
          página em branco para leitor sem script, erro de bundle ou rede que
          cai no meio. Este bloco devolve tudo ao estado final legível.
        */}
        <noscript>
          <style>{`
            [style*="opacity:0"],
            [style*="opacity: 0"] {
              opacity: 1 !important;
              transform: none !important;
              clip-path: none !important;
              filter: none !important;
            }
            .mask-line > * { transform: none !important; }
          `}</style>
        </noscript>
      </head>
      <body className="bg-void text-chalk antialiased">
        <a
          href="#conteudo"
          className="sr-only bg-accent px-4 py-2 font-tech text-micro uppercase text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300]"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <Cursor />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
