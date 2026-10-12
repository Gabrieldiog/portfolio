# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e versionamento [SemVer](https://semver.org/lang/pt-BR/).

## [0.3.0] — 2026-10-12 — Celular, tablet e telas baixas
### Corrigido
- Celular: a página não fica mais larga que a tela; e-mail e contatos do Contato quebram linha em vez de estourar.
- A seta "ROLE" aparece só no hero/palco e não cobre mais títulos, cards e textos.
- Rótulo "Minha história" não fica mais sob o botão do menu.
- Tablet com mouse: fim dos erros `Infinity` no console (holofote do nome só no desktop).
- Celular/tablet: capítulos do "Sobre mim" trocam em sequência, sem dois textos sobrepostos.
- Galeria: o 1º card começa depois da rail (também acima de 1500 px) e nada aparece pelos vãos dela.
- Notebooks baixos: hero e cards de projeto cabem inteiros na tela.
- 1024–1279 px: Contato e Formação em uma coluna; contatos sem "…".

### Mudado
- Textos mínimos de 0,65rem (antes 0,55–0,58rem).
- Holofote do cursor abaixo da rail/menu e some quando o mouse sai da janela.

## [0.2.0] — 2026-10-12 — Rolagem
### Mudado
- Rolagem responsiva: Lenis só com `lerp` (sem o deslize fixo de 1,2 s) e `scrub` mais curto (0,35 s) nas animações presas à rolagem.
- Palco do hero + "Sobre mim" ~38% mais curto; a galeria de projetos anda mais rápido que a roda.
- Ímã (snap) só entre os capítulos — não puxa mais a página de volta no voo do hero.
- Movimento reduzido: mesma árvore de componentes, só desliga a suavização (sem remontar a página).

### Corrigido
- Trajetória, Formação e Contato revelavam antes da hora (`refreshPriority: -1` na galeria).
- Âncoras para seções pinadas ("Projetos" de dentro da galeria, "Sobre mim" no celular) caíam no lugar errado.
- Links internos agora atualizam o `#hash`, movem o foco para a seção e respeitam o "voltar" do navegador; link direto (`/#projetos`) cai certo.
- Roda do mouse sobre a rail/drawer rola o próprio menu em telas baixas.
