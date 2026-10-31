"use client";

import Image from "next/image";
import { projetos, type Projeto } from "@/lib/dados";
import { useReveal } from "@/hooks/use-reveal";

// Vitrine de projetos em GRADE, rolando pra baixo como o resto da página (sem
// pin, sem trilho andando pro lado). O primeiro projeto é o destaque e ocupa a
// largura toda; os demais vêm em duas colunas no desktop e uma no celular.
// O print fica em cima e o texto embaixo, fora da imagem: nada de descrição
// brigando com o print.
export function Projetos() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="projetos" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 motion-safe:lg:pl-[var(--rail-inset)]">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              data-reveal
              className="inline-block rounded-full border border-accent/40 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent"
            >
              Projetos no ar
            </p>
            <h2
              data-reveal
              className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl"
            >
              Feito, publicado,
              <br />
              clicável.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-lg font-medium leading-snug text-text md:text-xl">
            Projetos autorais, do primeiro commit ao deploy:{" "}
            <span className="text-accent">tudo aqui está no ar.</span> É só
            clicar e usar.
          </p>
        </header>

        <ul aria-label="Projetos" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {projetos.map((p, i) => (
            <li key={p.id} data-reveal className={i === 0 ? "md:col-span-2" : undefined}>
              <CardProjeto projeto={p} indice={i} destaque={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CardProjeto({
  projeto,
  indice,
  destaque,
}: {
  projeto: Projeto;
  indice: number;
  destaque: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/50 ${
        destaque ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative aspect-[4/3] shrink-0 overflow-hidden border-b border-border bg-surface-2 ${
          destaque ? "lg:aspect-auto lg:min-h-[26rem] lg:w-[55%] lg:border-b-0 lg:border-r" : ""
        }`}
      >
        <Image
          src={projeto.imagem}
          alt={`Tela do ${projeto.nome}`}
          fill
          sizes={destaque ? "(max-width: 1023px) 100vw, 640px" : "(max-width: 767px) 100vw, 560px"}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className={`flex flex-1 flex-col gap-4 p-6 md:p-7 ${destaque ? "lg:justify-center lg:p-10" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* O número fica no texto: por cima do print ele cobria o logo. */}
            <p aria-hidden className="mb-2 font-mono text-xs tracking-[0.16em] text-faint">
              {String(indice + 1).padStart(2, "0")}
            </p>
            <h3 className={`font-display font-bold leading-tight ${destaque ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
              {/* O card inteiro leva pro site: o ::after do link cobre o card.
                  O contorno de foco vai no ::after, por dentro da borda. */}
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-accent"
              >
                {projeto.nome}
                <span className="sr-only"> (abre o site em nova aba)</span>
              </a>
            </h3>
          </div>
          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-bg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>

        <p className="leading-relaxed text-muted">{projeto.descricao}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <ul aria-label="Tecnologias" className="flex flex-wrap gap-1.5">
            {projeto.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[0.68rem] text-text"
              >
                {t}
              </li>
            ))}
          </ul>
          {projeto.repo && (
            <a
              href={projeto.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Código do ${projeto.nome} no GitHub`}
              // z-10: fica acima do link que cobre o card.
              className="relative z-10 ml-auto rounded-full border border-accent/40 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              Código ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
