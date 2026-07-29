import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { MousePlayProvider } from "@/hooks/use-mouse-play";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { SmoothAnchors } from "@/components/smooth-anchors";
import { ScrollCue } from "@/components/scroll-cue";
import { contato, perfil, siteUrl } from "@/lib/dados";

// Space Grotesk: títulos, nome gigante e números de métrica.
const display = Space_Grotesk({
  variable: "--fonte-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
const mono = JetBrains_Mono({
  variable: "--fonte-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
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
