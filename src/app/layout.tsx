import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title:       'Carlos Eduardo Diogo | Full-Stack Developer',
  description: 'Portfólio de Carlos Eduardo Diogo Gavioli — Junior Full-Stack Developer especializado em JavaScript, Python, FastAPI, React, Next.js e IA Generativa. São Paulo, Brasil.',
  keywords:    ['desenvolvedor', 'full-stack', 'JavaScript', 'Python', 'React', 'Next.js', 'FastAPI', 'São Paulo', 'portfólio'],
  authors:     [{ name: 'Carlos Eduardo Diogo Gavioli' }],
  openGraph: {
    title:       'Carlos Eduardo Diogo | Full-Stack Developer',
    description: 'Portfólio de Carlos Eduardo Diogo Gavioli — Junior Full-Stack Developer em São Paulo.',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#09090b] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
