"use client";

import Image from "next/image";
import { campanhas, type SistemaPolitico } from "@/lib/dados";
import { useReveal } from "@/hooks/use-reveal";
import { Contador } from "@/components/contador";

// Sistemas para campanha e mandato, em três frentes (captação, inteligência
// eleitoral, mobilização e agenda). Cada sistema é um card grande, no mesmo
// tamanho dos projetos: o print em destaque em cima e, embaixo, o número que
// aquele sistema gerou (cada número aparece só aqui, no card de onde vem).
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
            nos 246 municípios de Goiás.
          </p>
        </header>

        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
          {campanhas.frentes.map((f, i) => (
            <div key={f.titulo}>
              <div data-reveal className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">{f.titulo}</h3>
                </div>
                <p className="max-w-sm leading-relaxed text-muted">{f.resumo}</p>
              </div>
              <ul className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
                {f.sistemas.map((s) => (
                  <li
                    key={s.nome}
                    data-reveal
                    className={f.sistemas.length === 1 ? "md:col-span-2" : undefined}
                  >
                    <CardSistema sistema={s} largo={f.sistemas.length === 1} />
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

function CardSistema({ sistema, largo }: { sistema: SistemaPolitico; largo: boolean }) {
  const tela = sistema.formato === "tela";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/50 ${
        largo ? "lg:flex-row" : ""
      }`}
    >
      {/* Vitrine: o print num aparelho, sobre um fundo próprio. */}
      <div
        className={`relative flex aspect-[4/3] shrink-0 items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(120%_90%_at_50%_0%,rgba(212,160,23,0.14),transparent_60%)] bg-surface-2 ${
          largo ? "lg:aspect-auto lg:min-h-[24rem] lg:w-1/2 lg:border-b-0 lg:border-r" : ""
        }`}
      >
        {sistema.imagem ? (
          <div
            className={`relative h-[86%] overflow-hidden border border-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-1 ${
              tela ? "aspect-[3/4] rounded-2xl" : "aspect-[9/19] rounded-[1.6rem]"
            }`}
          >
            <Image
              src={sistema.imagem}
              alt={`Tela do ${sistema.nome}`}
              fill
              sizes="(max-width: 767px) 60vw, 300px"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <PainelInterno />
        )}
      </div>

      <div className={`flex flex-1 flex-col gap-3 p-6 md:p-7 ${largo ? "lg:justify-center lg:p-10" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display text-2xl font-bold leading-tight md:text-3xl">
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
          {sistema.link && (
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-bg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          )}
        </div>

        {sistema.metrica && (
          <div className="flex items-baseline gap-3">
            <p className="font-display text-5xl font-bold leading-none text-accent-hi tnum">
              <Contador valor={sistema.metrica.valor} sufixo={sistema.metrica.sufixo} />
            </p>
            <p className="max-w-[12rem] text-sm font-medium leading-snug text-text">{sistema.metrica.rotulo}</p>
          </div>
        )}

        <p className="leading-relaxed text-muted">{sistema.descricao}</p>

        <p className="mt-auto pt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em]">
          {sistema.link ? (
            <span className="text-accent">{new URL(sistema.link).hostname.replace(/^www\./, "")} ↗</span>
          ) : (
            <span className="text-faint">sistema interno · sem link público</span>
          )}
        </p>
      </div>
    </article>
  );
}

// Sistema interno não tem print público: no lugar dele, um esboço de tela
// (linhas de formulário/tabela) com o cadeado, no mesmo tamanho da vitrine.
function PainelInterno() {
  return (
    <div aria-hidden className="relative flex h-[78%] w-[70%] flex-col gap-3 rounded-2xl border border-white/10 bg-bg/60 p-5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2 w-24 rounded-full bg-white/15" />
      </div>
      {[0.9, 0.7, 0.8, 0.6, 0.75].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="h-6 w-6 shrink-0 rounded-md bg-white/10" />
          <span className="h-2 rounded-full bg-white/10" style={{ width: `${w * 100}%` }} />
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        uso interno
      </div>
    </div>
  );
}
