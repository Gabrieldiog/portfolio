import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { MousePlayProvider } from "@/hooks/use-mouse-play";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { SmoothAnchors } from "@/components/smooth-anchors";
import { ScrollCue } from "@/components/scroll-cue";
import { contato, perfil, siteUrl } from "@/lib/dados";

// Todas as fontes moram no projeto (src/fonts), nenhuma vem do Google na hora
// do build: em out/2026 um deploy de produção falhou porque o download das
// fontes do Google oscilou no meio do build. Space Grotesk e JetBrains Mono são
// as versões variáveis (licença OFL), recorte latin, que cobre o português.

// Space Grotesk: títulos, nome gigante e números de métrica.
const display = localFont({
  variable: "--fonte-display",
  src: [{ path: "../fonts/space-grotesk-variable.woff2", weight: "300 700", style: "normal" }],
});

// Satoshi (Fontshare, self-host): corpo de texto.
const sans = localFont({
  variable: "--fonte-sans",
  src: [
    { path: "../fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
});

// JetBrains Mono: só em rótulos técnicos pontuais (stack, metadados).
const mono = localFont({
  variable: "--fonte-mono",
  src: [{ path: "../fonts/jetbrains-mono-variable.woff2", weight: "100 800", style: "normal" }],
});

const titulo = `${perfil.nome} · ${perfil.cargo}`;
const descricao =
  "Desenvolvedor full stack de Goiânia. Construo sistemas de ponta a ponta que pessoas de verdade usam todo dia.";

export const metadata: Metadata = {
  // Sem metadataBase o Next não consegue montar as URLs absolutas que o
  // Open Graph exige — e a imagem do card sairia quebrada.
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  authors: [{ name: perfil.nomeCompleto, url: contato.github }],
  creator: perfil.nomeCompleto,
  // O card que WhatsApp, LinkedIn e Slack montam ao receber o link. A imagem
  // não entra aqui: o Next injeta sozinho a partir de opengraph-image.tsx.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: titulo,
    title: titulo,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
  robots: { index: true, follow: true },
};

// viewportFit: cover libera as env(safe-area-inset-*) do notch/Dynamic Island.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b09",
};

// Dados estruturados (schema.org/Person): buscadores e IAs entendem quem é a
// pessoa, o cargo, onde mora e quais perfis são dela. O "<" vira \u003c pra
// nenhum texto conseguir fechar a tag <script> (recomendação da doc do Next).
const pessoaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nomeCompleto,
  alternateName: perfil.nome,
  jobTitle: perfil.cargo,
  url: siteUrl,
  email: `mailto:${contato.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
  sameAs: [contato.github, contato.linkedin],
  knowsLanguage: ["pt-BR", "es", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pessoaJsonLd).replace(/</g, "\\u003c") }}
        />
        {/* Primeiro Tab da página: pula o hero e o menu direto pro conteúdo. */}
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-5 py-3 font-medium text-bg transition-transform focus-visible:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <LenisProvider>
          <MousePlayProvider>
            <SmoothAnchors />
            <CursorSpotlight />
            {children}
            <ScrollCue />
          </MousePlayProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
