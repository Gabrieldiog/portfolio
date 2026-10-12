"use client";

import { useEffect, useRef, useState } from "react";
import { contato } from "@/lib/dados";

type Estado = "ocioso" | "copiado" | "falhou";

// Copiar o e-mail: estado + aviso pra leitor de tela. O aviso (role=status)
// fica FORA do botão — dentro dele o conteúdo é "apresentacional" e não é
// anunciado. Sem permissão de área de transferência, cai no mailto.
export function useCopiarEmail() {
  const [estado, setEstado] = useState<Estado>("ocioso");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copiar = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(contato.email);
      setEstado("copiado");
    } catch {
      setEstado("falhou");
      window.location.href = `mailto:${contato.email}`;
    }
    timer.current = window.setTimeout(() => setEstado("ocioso"), 2500);
  };

  const aviso =
    estado === "copiado"
      ? "E-mail copiado."
      : estado === "falhou"
        ? "Não deu pra copiar; abrindo seu app de e-mail."
        : "";

  return { estado, copiar, aviso };
}

export function AvisoCopia({ aviso }: { aviso: string }) {
  return (
    <span role="status" aria-live="polite" className="sr-only">
      {aviso}
    </span>
  );
}

export function rotuloCopia(estado: Estado) {
  return estado === "copiado" ? "copiado ✓" : estado === "falhou" ? "abrindo…" : "copiar";
}

export function CopiarEmail() {
  const { estado, copiar, aviso } = useCopiarEmail();

  return (
    <>
      <button
        type="button"
        onClick={copiar}
        className="group inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 text-left font-mono text-base text-text transition-colors hover:text-accent sm:text-lg md:text-xl"
      >
        <span className="min-w-0 break-all">{contato.email}</span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint group-hover:text-accent">
          {rotuloCopia(estado)}
        </span>
      </button>
      <AvisoCopia aviso={aviso} />
    </>
  );
}
