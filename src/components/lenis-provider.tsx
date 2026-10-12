"use client";

import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// useLayoutEffect no cliente (a troca pra scroll nativo acontece antes da
// pintura); no servidor cai no useEffect só pra não avisar no SSR.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// A fiação Lenis+GSAP vive num FILHO do ReactLenis: o useLenis só entrega a
// instância quando ela existe (assinar via ref no pai roda cedo demais e a
// integração nunca anexa).
function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

// Scroll suave, mas responsivo. Um único relógio: o gsap.ticker dirige o Lenis
// (autoRaf desligado).
//
// Só `lerp` (sem `duration`): com duration definido o Lenis troca pro modo por
// tempo e cada giro da roda vira um deslize fixo de ~1,2s, ignorando o lerp —
// era isso que deixava a rolagem "flutuando".
//
// Com prefers-reduced-motion a roda volta a ser nativa (smoothWheel: false),
// mas a ÁRVORE continua a mesma: trocar o wrapper desmontaria a página inteira.
export function LenisProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useIsoLayoutEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // A webfont chega depois do cálculo inicial dos pins; recalcula.
  useEffect(() => {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.14,
        smoothWheel: !reducedMotion,
        syncTouch: false,
        // A rail e o drawer rolam por dentro em telas baixas: a roda sobre
        // eles rola ELES, não a página.
        allowNestedScroll: true,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
