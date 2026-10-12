"use client";

import Image from "next/image";
import { campanhas, type SistemaPolitico } from "@/lib/dados";
import { useReveal } from "@/hooks/use-reveal";
import { Contador } from "@/components/contador";

// Sistemas para campanha e mandato: os números no topo e, abaixo, as três
// frentes (captação, inteligência eleitoral, mobilização e agenda), cada uma
// com os seus sistemas. Os prints são de celular, num recorte vertical.
export function Campanhas() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="campanhas" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 motion-safe:lg:pl-[var(--rail-inset)]">
        <header className="max-w-3xl">
          <p
            data-reveal
            className="inline-block rounded-full border border-accent/40 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent"
          >
            Sistemas para política
          </p>
          <h2
            data-reveal
            className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl"
          >
            Tecnologia pra
            <br />
            campanha e mandato.
          </h2>
          <p data-reveal className="mt-5 max-w-2xl text-lg font-medium leading-snug text-text md:text-xl">
            Captação de apoiadores, estudo do eleitorado e agenda pública: um
            conjunto de sistemas que construí pra campanha e o mandato do{" "}
            <span className="text-accent">Subtenente Sérgio</span>, com alcance
            em todos os municípios de Goiás.
          </p>
        </header>

        <ul data-reveal className="mt-10 grid grid-cols-2 gap-3 md:mt-14 lg:grid-cols-4 lg:gap-4">
          {campanhas.numeros.map((n) => (
            <li key={n.rotulo} className="rounded-2xl border border-accent/30 bg-surface p-5 md:p-6">
              <p className="font-display text-3xl font-bold leading-none text-accent-hi tnum md:text-4xl">
                <Contador valor={n.valor} sufixo={n.sufixo} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{n.rotulo}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-20">
          {campanhas.frentes.map((f, i) => (
            <div key={f.titulo} className="grid gap-6 xl:grid-cols-[17rem_1fr] xl:gap-12">
              <div data-reveal>
                <p className="font-mono text-xs tracking-[0.16em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight md:text-3xl">{f.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.resumo}</p>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {f.sistemas.map((s) => (
                  <li key={s.nome} data-reveal>
                    <CardSistema sistema={s} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardSistema({ sistema }: { sistema: SistemaPolitico }) {
  return (
    <article className="group relative flex h-full gap-4 rounded-3xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 md:gap-5 md:p-5">
      {/* Print de celular num recorte vertical; sistema interno não tem print. */}
      <div className="relative aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface-2 md:w-28">
        {sistema.imagem ? (
          <Image
            src={sistema.imagem}
            alt={`Tela do ${sistema.nome}`}
            fill
            sizes="112px"
            className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div aria-hidden className="flex h-full items-center justify-center p-2 text-center font-mono text-[0.65rem] uppercase leading-snug tracking-[0.12em] text-faint">
            uso
            <br />
            interno
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-col gap-2 py-1">
        <h4 className="font-display text-xl font-semibold leading-tight">
          {sistema.link ? (
            <a
              href={sistema.link}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-accent"
            >
              {sistema.nome}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          ) : (
            sistema.nome
          )}
        </h4>
        <p className="text-sm leading-relaxed text-muted">{sistema.descricao}</p>
        <p className="mt-auto pt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em]">
          {sistema.link ? (
            <span className="text-accent">
              {new URL(sistema.link).hostname.replace(/^www\./, "")} ↗
            </span>
          ) : (
            <span className="text-faint">sistema interno · sem link público</span>
          )}
        </p>
      </div>
    </article>
  );
}
