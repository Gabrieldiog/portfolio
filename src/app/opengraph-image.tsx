import { ImageResponse } from "next/og";
import { perfil, siteUrl } from "@/lib/dados";

export const alt = `${perfil.nome} — ${perfil.cargo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// O card que aparece quando o link cai no WhatsApp, LinkedIn ou Slack.
// Mesma paleta do globals.css (preto quente, creme, mostarda só no acento) pra
// quem clica não achar que entrou em outro site.
//
// Duas limitações do Satori mandam no layout daqui: só flexbox (nada de grid) e
// todo container precisa de display:flex explícito. Fonte fica a padrão do
// next/og de propósito — o projeto só tem Satoshi em .woff2, formato que o
// Satori não lê.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0b0b09",
          // Eco do holofote da home, bem de leve.
          backgroundImage:
            "radial-gradient(900px circle at 78% 12%, rgba(212,160,23,0.14), transparent 60%)",
        }}
      >
        {/* A faixa mostarda é o que identifica o card na timeline. */}
        <div style={{ width: 16, height: "100%", backgroundColor: "#d4a017" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 88px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: "#d4a017",
              textTransform: "uppercase",
            }}
          >
            {perfil.cargo}
          </div>

          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: "#ece7d9",
              lineHeight: 1.05,
              marginTop: 18,
            }}
          >
            {perfil.nome}
          </div>

          <div
            style={{
              fontSize: 34,
              color: "#9c9583",
              lineHeight: 1.4,
              marginTop: 26,
              maxWidth: 820,
            }}
          >
            Construo sistemas de ponta a ponta que pessoas de verdade usam todo
            dia.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 25,
              color: "#8d8672",
              marginTop: 52,
            }}
          >
            <span>{perfil.local}</span>
            <span style={{ color: "#2a2618" }}>|</span>
            <span>{siteUrl.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
