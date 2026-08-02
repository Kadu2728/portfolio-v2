import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title:       'Carlos Eduardo Diogo | Full-Stack Developer',
  description: 'Portfólio de Carlos Eduardo Diogo Gavioli — Full-Stack Developer em São Paulo. Seis aplicações full-stack construídas e publicadas de ponta a ponta com Next.js, React, TypeScript, FastAPI e PostgreSQL.',
  keywords:    ['desenvolvedor', 'full-stack', 'TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'IA Generativa', 'São Paulo', 'portfólio'],
  authors:     [{ name: 'Carlos Eduardo Diogo Gavioli' }],
  openGraph: {
    title:       'Carlos Eduardo Diogo | Full-Stack Developer',
    description: 'Seis aplicações full-stack construídas e publicadas de ponta a ponta, sozinho. Next.js, React, TypeScript, FastAPI e PostgreSQL.',
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
