# Portfolio — Carlos Eduardo Diogo Gavioli

Portfólio profissional construído com **Next.js 15 · TypeScript · Tailwind CSS · Framer Motion**.

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no browser
http://localhost:3000
```

---

## 📸 Como adicionar sua foto de perfil

1. Pegue a sua foto (preferencialmente quadrada, mínimo 400x400px)
2. Renomeie o arquivo para `profile.jpg` (ou `.png`, `.webp`)
3. Coloque dentro da pasta `public/`:

```
portfolio-kadu/
└── public/
    └── profile.jpg   ← coloque aqui!
```

4. Se usar `.png` ou `.webp`, edite a linha em `src/components/sections/Hero.tsx`:
```tsx
<Image src="/profile.jpg" ...  />
// troque para:
<Image src="/profile.png" ...  />
```

5. Salve e a foto aparece automaticamente no lugar das iniciais "KD".

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx        ← metadados SEO e fontes Geist
│   ├── page.tsx          ← monta todas as seções
│   └── globals.css       ← design tokens CSS + Tailwind
│
├── components/
│   ├── ui/
│   │   ├── GlowCard.tsx         ← card com glow no cursor
│   │   └── AnimatedCounter.tsx  ← contador animado
│   ├── layout/
│   │   ├── Navbar.tsx    ← navbar fixa com blur no scroll
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx          ← apresentação + foto + stats
│       ├── About.tsx         ← formação, experiência, idiomas
│       ├── Skills.tsx        ← todas as tecnologias por categoria
│       ├── Projects.tsx      ← 9 projetos com destaque
│       ├── Certificates.tsx  ← 18 certificados FIAP + Alura
│       └── Contact.tsx       ← links de contato + CTA
│
├── lib/
│   ├── utils.ts          ← cn()
│   └── animations.ts     ← variantes Framer Motion
│
├── types/
│   └── index.ts
│
└── hooks/
    └── use-scroll.ts
```

---

## 🛠️ Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

Ou conecte o repositório diretamente em [vercel.com](https://vercel.com).

---

## ✏️ Como atualizar conteúdo

| O que atualizar          | Onde editar                                |
|--------------------------|--------------------------------------------|
| Foto de perfil           | `public/profile.jpg`                       |
| Bio e apresentação       | `src/components/sections/Hero.tsx`         |
| Formação e experiência   | `src/components/sections/About.tsx`        |
| Tecnologias/habilidades  | `src/components/sections/Skills.tsx`       |
| Projetos                 | `src/components/sections/Projects.tsx`     |
| Certificados             | `src/components/sections/Certificates.tsx` |
| Links de contato         | `src/components/sections/Contact.tsx`      |
| Cores e tokens globais   | `src/app/globals.css`                      |

---

Feito com 💜 — Next.js · TypeScript · Tailwind CSS · Framer Motion
