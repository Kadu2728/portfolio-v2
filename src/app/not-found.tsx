import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-tech text-micro uppercase tracking-widest text-accent-text">Erro 404</p>
      <h1 className="mt-6 font-display text-5xl font-bold text-chalk">Página não encontrada.</h1>
      <p className="mt-5 max-w-md text-lg text-ash">
        O endereço existe, mas não há nada construído aqui.
      </p>
      <Link
        href="/"
        className="mt-10 border border-line-strong px-7 py-4 font-tech text-label uppercase tracking-[0.1em] text-chalk transition-colors hover:border-accent hover:text-accent-text"
      >
        Voltar ao início
      </Link>
    </main>
  )
}
