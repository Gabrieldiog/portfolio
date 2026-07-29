import type { NextConfig } from "next";
import { contato, siteUrl } from "./src/lib/dados";

// Link headers (RFC 8288): apontam pros recursos do site antes do agente/crawler
// precisar baixar e parsear o HTML. Só relações que existem de verdade aqui —
// nada de anunciar api-catalog ou service-doc num portfolio que não tem API.
const linkHeader = [
  `<${siteUrl}/>; rel="canonical"`,
  `<${siteUrl}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
  `<${contato.github}>; rel="author me"`,
  `<${contato.linkedin}>; rel="me"`,
].join(", ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Só a home: é a única rota real do site.
        source: "/",
        headers: [{ key: "Link", value: linkHeader }],
      },
    ];
  },
};

export default nextConfig;
