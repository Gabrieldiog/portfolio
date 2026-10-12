import { SidebarRail } from "@/components/sidebar-rail";
import { PalcoSobre } from "@/components/palco-sobre";
import { Projetos } from "@/components/projetos";
import { Campanhas } from "@/components/campanhas";
import { Trajetoria } from "@/components/trajetoria";
import { Formacao } from "@/components/formacao";
import { Contato } from "@/components/contato";

export default function Home() {
  return (
    <>
      {/* A rail vive fora das seções (nível da página): fixa no desktop, ela
          persiste por toda a jornada; no celular vira o hambúrguer. */}
      <SidebarRail />
      <main id="conteudo">
        <PalcoSobre />
        <Projetos />
        <Campanhas />
        <Trajetoria />
        <Formacao />
      </main>
      <Contato />
    </>
  );
}
