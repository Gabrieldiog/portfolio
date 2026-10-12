"use client";

import { useState } from "react";
import { contato } from "@/lib/dados";

export function CopiarEmail() {
  const [copiado, setCopiado] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(contato.email);
          setCopiado(true);
          window.setTimeout(() => setCopiado(false), 2000);
        } catch {
          window.location.href = `mailto:${contato.email}`;
        }
      }}
      className="group inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 text-left font-mono text-base text-text transition-colors hover:text-accent sm:text-lg md:text-xl"
    >
      <span className="min-w-0 break-all">{contato.email}</span>
      <span
        role="status"
        aria-live="polite"
        className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint group-hover:text-accent"
      >
        {copiado ? "copiado ✓" : "copiar"}
      </span>
    </button>
  );
}
