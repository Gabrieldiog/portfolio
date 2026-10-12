# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e versionamento [SemVer](https://semver.org/lang/pt-BR/).

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
