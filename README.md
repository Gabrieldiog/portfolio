# Portfólio — Gabriel Diogo

Portfólio pessoal de **Gabriel Diogo Vieira Silva**, desenvolvedor full stack em Goiânia (GO).
No ar em **https://gabriel-diogo.vercel.app**.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, páginas estáticas) + React 19 + TypeScript
- Tailwind CSS v4 (tokens de cor em `src/app/globals.css`)
- GSAP + ScrollTrigger (animações presas à rolagem) e Lenis (rolagem suave)
- Fontes: Space Grotesk e JetBrains Mono (`next/font/google`), Satoshi (local)

## Rodando localmente

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # build de produção
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Textos, projetos, trajetória, contatos, currículo | `src/lib/dados.ts` |
| Hero + "Sobre mim" (palco pinado do desktop e do celular) | `src/components/palco-sobre.tsx`, `src/components/hero-mobile.tsx` |
| Galeria de projetos | `src/components/projetos.tsx` (prints em `public/projetos/`, 3:4) |
| Menu lateral (desktop) e menu do celular | `src/components/sidebar-rail.tsx` |
| Rolagem suave e âncoras | `src/components/lenis-provider.tsx`, `src/components/smooth-anchors.tsx` |
| SEO (metadata, JSON-LD, Open Graph, sitemap, robots) | `src/app/layout.tsx`, `src/app/opengraph-image.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` |
| Currículo em PDF | `public/curriculo-gabriel-diogo.pdf` |

## Processo

- Cada mudança média ou grande tem uma spec em `docs/specs/`.
- As versões e o que mudou em cada uma ficam no [`CHANGELOG.md`](./CHANGELOG.md).
- Deploy automático na Vercel a cada merge na `main` (cada PR ganha um link de preview).
