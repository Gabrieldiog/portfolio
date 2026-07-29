import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/dados";

// Portfolio público e de página única: não existe nada aqui que mereça ficar
// fora de índice, então a regra é liberar tudo em vez de listar exceções que
// não existem. O Disallow vazio é a forma canônica de dizer "pode entrar".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
