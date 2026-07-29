import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/dados";

// Uma entrada só, de propósito: as seções do site (#projetos, #trajetoria,
// #contato…) são âncoras da mesma página, e âncora não é URL separada pro
// crawler — listá-las viraria conteúdo duplicado.
// O lastModified resolve no build, então cada deploy já republica a data certa.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
