# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e versionamento [SemVer](https://semver.org/lang/pt-BR/).

## [0.5.0] — 2026-10-12 — Acessibilidade
### Adicionado
- Atalho "Pular para o conteúdo" (1º Tab da página).
- `aria-current` no item ativo do menu; "Home" acende no topo.
- Galeria de projetos como lista (`ul/li`) e rótulos nos links "Código".

### Corrigido
- Foco visível nos cards de projeto (contorno para dentro) e card focado sempre trazido para a tela.
- Foco não quadra mais pílulas e cards (regra global movida para a camada base).
- "E-mail copiado" anunciado ao leitor de tela; aviso quando a cópia falha; timer limpo ao desmontar.
- Um único "Fechar menu" acessível no menu do celular.

## [0.4.0] — 2026-10-12 — Currículo
### Adicionado
- Currículo em PDF (`/curriculo-gabriel-diogo.pdf`) com links no hero (desktop e celular), na rail, no menu do celular e em destaque no Contato. Abre em nova aba.

### Removido
- `public/curriculo.png` (imagem de 734 KB que não era usada em lugar nenhum).

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
