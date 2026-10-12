"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMousePlay } from "@/hooks/use-mouse-play";

// Um glow mostarda que persegue o cursor. Um blob só, movido por transform.
export function CursorSpotlight() {
  const blobRef = useRef<HTMLDivElement>(null);
  const play = useMousePlay();

  useGSAP(() => {
    if (!play || !blobRef.current) return;
    const el = blobRef.current;

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

    const onMove = (e: PointerEvent) => {
      el.dataset.fora = "0";
      xTo(e.clientX);
      yTo(e.clientY);
    };
    // Mouse saiu da janela: o brilho não fica parado num canto.
    const onSair = () => {
      el.dataset.fora = "1";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onSair);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onSair);
    };
  }, { dependencies: [play], revertOnUpdate: true });

  if (!play) return null;

  return <div ref={blobRef} className="cursor-spotlight" aria-hidden />;
}
