"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";

// Todo link interno (#...) rola bonito, não pula. Um handler delegado no
// documento pega hero, rail, drawer e o "voltar ao topo" de uma vez, e
// sobrevive a re-render (o drawer abre/fecha à vontade).
//
// Seção PINADA não pode ser medida pelo getBoundingClientRect: durante o pin
// ela fica fixa no topo e, depois dele, o GSAP a desloca pelo tamanho do pin.
// Então o destino vem do próprio ScrollTrigger (o início do pin) — e, no palco
// do desktop, da label "cap-0", onde os capítulos já estão em cena.
//
// Depois de rolar: a URL ganha o #hash (dá pra compartilhar e o "voltar" do
// navegador funciona) e o foco vai pra seção (teclado e leitor de tela seguem
// junto com a tela).
export function SmoothAnchors() {
  const lenis = useLenis();

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");

    const alvoY = (href: string): number | null => {
      if (href === "#topo") return 0;

      let el: Element | null = null;
      try {
        el = document.querySelector(href);
      } catch {
        return null; // href que não é seletor válido
      }
      if (!el) return null;

      if (href === "#historia") {
        const palco = ScrollTrigger.getById("palco-sobre");
        if (palco) return palco.labelToScroll("cap-0");
      }

      // Pin cujo gatilho é o próprio alvo (galeria de projetos, sobre-mobile).
      const pin = ScrollTrigger.getAll().find((st) => st.pin && st.trigger === el);
      if (pin) return pin.start;

      const margem = 24;
      // top absoluto imune a scroll-lock: quando o body está travado
      // (position:fixed; top:-Y), window.scrollY zera e os rects deslocam -Y;
      // medir contra o próprio body cancela esse deslocamento em qualquer estado.
      const y = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - margem;
      return Math.max(0, y);
    };

    const focar = (href: string) => {
      const el = href === "#topo" ? document.getElementById("topo") : document.querySelector<HTMLElement>(href);
      if (!el) return;
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };

    const irPara = (href: string, { animar = true } = {}) => {
      const y = alvoY(href);
      if (y == null) return false;
      const imediato = !animar || reduz.matches;

      if (lenis) {
        lenis.scrollTo(y, {
          immediate: imediato,
          duration: 1.1,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          force: true,
          onComplete: () => focar(href),
        });
        if (imediato) focar(href);
      } else {
        window.scrollTo(0, y);
        focar(href);
      }
      return true;
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const alvo = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!alvo) return;
      const href = alvo.getAttribute("href");
      if (!href || href.length < 2) return;

      if (!irPara(href)) return;
      e.preventDefault();
      if (location.hash !== href) history.pushState(null, "", href);
    };

    // "Voltar"/"avançar" do navegador entre hashes: mesma resolução de destino
    // (o salto nativo cairia errado nas seções pinadas).
    const onPop = () => {
      if (location.hash.length > 1) irPara(location.hash);
      else if (lenis) lenis.scrollTo(0, { immediate: reduz.matches, force: true });
      else window.scrollTo(0, 0);
    };

    // Link direto (/#projetos): o navegador salta antes de os pins existirem e
    // erra o alvo. A cada recálculo dos pins (fonte e foto chegando) corrige
    // sem animação, até a pessoa mexer na página ou passarem alguns segundos.
    let corrigindo = location.hash.length > 1;
    const parar = () => {
      corrigindo = false;
    };
    const onRefresh = () => {
      if (corrigindo) irPara(location.hash, { animar: false });
    };
    const limite = window.setTimeout(parar, 4000);
    if (corrigindo) {
      ScrollTrigger.addEventListener("refresh", onRefresh);
      requestAnimationFrame(onRefresh);
    }
    const gestos = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    gestos.forEach((g) => window.addEventListener(g, parar, { passive: true, once: true }));

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      window.clearTimeout(limite);
      gestos.forEach((g) => window.removeEventListener(g, parar));
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    };
  }, [lenis]);

  return null;
}
