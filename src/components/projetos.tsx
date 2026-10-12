"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projetos, type Projeto } from "@/lib/dados";

// Vitrine de projetos: a seção PINA e, conforme você desce, os cards passam da
// DIREITA pra ESQUERDA (o trilho corre por transform). Vale no desktop e no
// celular. A rail continua visível (é fixa no nível da página). Cada card tem o
// print real e leva pro site.
export function Projetos() {
  const root = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wrap = wrapRef.current;
        const track = trackRef.current;
        if (!wrap || !track) return;

        // Cabeçalho se apresenta antes do trilho correr.
        gsap.from(gsap.utils.toArray<HTMLElement>(".proj-reveal", root.current), {
          autoAlpha: 0,
          y: 38,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        });

        // No pin o scroll vertical vira horizontal: trava o scroll nativo do
        // trilho e move o track por transform (da direita pra esquerda).
        gsap.set(wrap, { overflowX: "clip" });
        const distancia = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        const tween = gsap.to(track, {
          x: () => -distancia(),
          ease: "none",
          scrollTrigger: {
            id: "projetos-pin",
            trigger: root.current,
            start: "top top",
            // O trilho anda mais rápido que a rolagem (1px de roda = ~1,4px de
            // trilho): a galeria não vira uma segunda parede de rolagem.
            end: () => `+=${distancia() * 0.7}`,
            scrub: 0.35,
            pin: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
          },
        });

        // Teclado: o trilho corre por transform, então o navegador não
        // consegue rolar até um card focado fora da tela. Ao focar um link de
        // card, rola a PÁGINA até o ponto do pin em que aquele card aparece.
        const onFocus = (e: FocusEvent) => {
          const st = tween.scrollTrigger;
          const card = (e.target as Element).closest("li");
          if (!st || !card || !track.contains(card)) return;
          const d = distancia();
          if (!d) return;
          const padEsq = parseFloat(getComputedStyle(track).paddingLeft) || 0;
          const alvoX = Math.min(d, Math.max(0, card.offsetLeft - padEsq));
          const y = st.start + (alvoX / d) * (st.end - st.start);
          if (Math.abs(window.scrollY - y) > 4) window.scrollTo(0, y);
        };
        track.addEventListener("focusin", onFocus);
        return () => track.removeEventListener("focusin", onFocus);
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projetos" className="overflow-hidden py-20 md:py-24 [@media(max-height:820px)]:pt-10">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 motion-safe:lg:pl-[var(--rail-inset)]">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="proj-reveal inline-block rounded-full border border-accent/40 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
              Projetos no ar
            </p>
            <h2 className="proj-reveal mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:md:text-5xl">
              Feito, publicado,
              <br />
              clicável.
            </h2>
          </div>
          <p className="proj-reveal max-w-sm text-lg font-medium leading-snug text-text md:text-xl">
            Do sistema profissional aos projetos autorais:{" "}
            <span className="text-accent">tudo aqui está no ar.</span> Desce que
            os cards passam, clica e usa.
          </p>
        </header>
      </div>

      <div ref={wrapRef} className="proj-wrap mt-12 overflow-x-auto pb-4 [scrollbar-width:thin] [@media(max-height:820px)]:mt-6">
        <ul
          ref={trackRef}
          aria-label="Projetos"
          className="proj-track flex w-max gap-6 px-6 md:px-10"
        >
          {projetos.map((p, i) => (
            <li key={p.id} className="shrink-0">
              <CardProjeto projeto={p} indice={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// A seção fica pinada numa tela só: o card (3:4) é limitado pela ALTURA livre
// abaixo do cabeçalho (~23,5rem no celular, ~25rem no desktop; menos em telas
// baixas, onde o cabeçalho encolhe), senão a base com o nome e a descrição
// some em notebooks e celulares baixos.
function CardProjeto({ projeto, indice }: { projeto: Projeto; indice: number }) {
  return (
    <div className="group relative aspect-[3/4] w-[min(80vw,420px,calc((100svh-23.5rem)*0.75))] shrink-0 overflow-hidden lg:w-[min(420px,calc((100svh-25rem)*0.75))] [@media(max-height:820px)]:w-[min(80vw,420px,calc((100svh-19.5rem)*0.75))] [@media(max-height:820px)]:lg:w-[min(420px,calc((100svh-18.5rem)*0.75))] rounded-3xl border border-border bg-surface">
      {/* O card inteiro leva pro site (link esticado). */}
      <a
        href={projeto.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${projeto.nome} no ar`}
        // O card corta o que passa da borda (overflow-hidden): o contorno de
        // foco vai pra DENTRO, senão quem navega por teclado não vê nada.
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-offset-[-4px]"
      />
      <Image
        src={projeto.imagem}
        alt={`Tela do ${projeto.nome}`}
        fill
        sizes="(max-width: 900px) 80vw, 420px"
        // Vitrine que corre na horizontal por transform: o lazy do último card
        // não dispara direito, então carrega tudo de vez (são poucas imagens).
        loading="eager"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
      />
      {/* Véu pra leitura do texto sobre o print. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"
      />

      <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 font-mono text-xs text-text backdrop-blur-sm">
        {String(indice + 1).padStart(2, "0")}
      </span>

      <ul className="absolute right-5 top-5 flex max-w-[60%] flex-wrap justify-end gap-1.5">
        {projeto.stack.slice(0, 3).map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[0.62rem] text-text backdrop-blur-sm"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-bold md:text-3xl">{projeto.nome}</h3>
          <p className="mt-2 line-clamp-4 max-w-[19rem] text-[0.95rem] leading-relaxed text-text/85 [@media(max-height:820px)]:line-clamp-3 [@media(max-height:820px)]:text-sm">
            {projeto.descricao}
          </p>
        </div>
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-bg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          ↗
        </span>
      </div>

      {projeto.repo && (
        <a
          href={projeto.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Código do ${projeto.nome} no GitHub`}
          className="absolute left-5 top-[4.6rem] z-20 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        >
          Código ↗
        </a>
      )}
    </div>
  );
}
