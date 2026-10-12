"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";

// Indicador de "role pra baixo": FIXO no rodapé, pequeno e discreto. Aparece
// no hero e durante o palco do "Sobre mim" (onde a tela fica parada e dá a
// impressão de que travou) e some depois dele — nas seções seguintes ele
// ficava por cima de títulos, cards e textos.
export function ScrollCue() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const medir = () => {
      raf = 0;
      const fim = document.documentElement.scrollHeight;
      const rolavel = fim - window.innerHeight > 120;
      // Desktop: até o fim do palco pinado (os capítulos ficam no centro).
      // Celular: só no hero — no palco dos capítulos o card ocupa o rodapé.
      // Sem pin (movimento reduzido): só a 1ª tela.
      const palco = ScrollTrigger.getById("palco-sobre");
      const sobreMobile = ScrollTrigger.getById("sobre-mobile");
      const limite = palco
        ? palco.end - window.innerHeight * 0.35
        : sobreMobile
          ? sobreMobile.start - window.innerHeight * 0.3
          : window.innerHeight * 0.6;
      el.dataset.oculto = !rolavel || window.scrollY > limite ? "1" : "0";
    };
    const agendar = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar, { passive: true });
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-oculto="0"
      className="scroll-cue pointer-events-none fixed inset-x-0 bottom-[max(0.9rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-center gap-1"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted lg:text-[0.72rem] lg:tracking-[0.3em]">
        role
      </span>
      <svg
        viewBox="0 0 24 24"
        className="scroll-bounce h-4 w-4 text-accent [filter:drop-shadow(0_1px_6px_rgba(0,0,0,0.6))] lg:h-6 lg:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
