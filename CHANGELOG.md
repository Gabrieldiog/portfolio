# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e versionamento [SemVer](https://semver.org/lang/pt-BR/).

## [0.10.1] — 2026-10-31 — BC Energia atualizada
### Mudado
- Grupo BC Energia: migração de aplicações internas (no plural), novo item da automação do relatório de economia dos clientes, gerador de boletos sem "(em desenvolvimento)" e sem o item da integração com o CRM.

## [0.10.0] — 2026-10-31 — Trajetória com retratos e galeria só autoral
### Mudado
- Total de pessoas: 870+ "usam ou trabalham com sistemas que construí ou dos quais fiz parte" (450 cabos eleitorais + 292 clientes da calculadora + 80 BC Energia + 55 ASSEGO).
- Totem do IHGG passa para o alcance público (21 mil+), junto com a Minha Cola.
- Fazenda Nova sem "(freelancer)".
- Resumo do Contato: "mais de 800 pessoas".

### Adicionado
- Trajetória: Loja Eliane Martins.
- Trajetória: retrato do site de cada casa (BC Energia, Loja Eliane, ASSEGO, IHGG e a calculadora no Conteúdo Club).

### Removido
- Calculadora do Creator e Loja Eliane Martins saem da galeria de projetos: são trabalho com cliente e foram para a Trajetória. A galeria fica só com projetos autorais.

## [0.9.3] — 2026-10-31 — Fontes no projeto
### Corrigido
- O deploy de produção da 0.9.2 falhou ao baixar as fontes do Google durante o build. Space Grotesk e JetBrains Mono agora ficam no próprio projeto (`src/fonts`, licença OFL), e o build não depende mais do Google Fonts.

## [0.9.2] — 2026-10-31 — Alcance com origem
### Mudado
- Trajetória: "1.100+ pessoas usam ou trabalham com sistemas que construí" (inclui os 450 cabos eleitorais), com a composição do número logo abaixo.
- Alcance público separado no mesmo card: 21 mil+ acessos às páginas abertas (Minha Cola). Os dois números não se somam.
- Resumo do Contato: "mais de mil pessoas".

## [0.9.1] — 2026-10-31 — Números atualizados
### Mudado
- Calculadora do Creator: 292 clientes cadastrados em produção (antes "100+").
- Grupo BC Energia: gerador interno de boletos de cobrança (em desenvolvimento).
- Alcance total: 670+ pessoas; resumo do Contato: "mais de 600 pessoas".

## [0.9.0] — 2026-10-12 — Sistemas para política
### Adicionado
- Seção "Sistemas para política" (`#campanhas`) e item "Campanhas" no menu: números (21 mil+ acessos à Minha Cola, 450+ cabos eleitorais, 246 municípios de Goiás, 5.570 municípios no GPol) e três frentes — captação e relacionamento, inteligência eleitoral, mobilização e agenda pública — com prints dos sistemas.

### Mudado
- GPol saiu da galeria de projetos e foi para a nova seção.

## [0.8.0] — 2026-10-12 — Galeria em grade
### Adicionado
- Projeto "Loja Eliane Martins" (elianemartins.shop), em destaque.

### Mudado
- Galeria de projetos em grade com rolagem normal (sem travar a página nem andar para o lado): destaque em largura total, 2 colunas no desktop e 1 no celular.
- Print em cima e texto embaixo, fora da imagem; número do projeto junto ao título.

### Removido
- Pin, trilho horizontal e máscara da galeria antiga.

## [0.7.0] — 2026-10-12 — Grupo BC Energia
### Adicionado
- Trajetória: Grupo BC Energia (out/2026 · atual), descrito em termos técnicos, sem expor ferramentas ou infraestrutura internas; 80+ funcionários usam os sistemas.

### Mudado
- ASSEGO: fev/2025 · out/2026.
- Alcance total: 480+ pessoas (inclui os 80+ da BC Energia).
- Contato: "Aberto a novas conversas e freelas." no lugar de "com início imediato".

## [0.6.2] — 2026-10-12 — Correção
### Corrigido
- Formação: lista de cursos alinhada ao currículo (inclui "React JS 19 e Next.js 15" e "Python para Análise de Dados").

## [0.6.1] — 2026-10-12 — Correção
### Corrigido
- Trajetória: período e descrição da Fazenda Nova alinhados ao currículo (mar/2023 – abr/2024; controle de estoque, financeiro, vendas e produção de leite, ovos e mais).

## [0.6.0] — 2026-10-12 — Conteúdo, SEO e acabamento
### Adicionado
- Dados estruturados `Person` (JSON-LD) para buscadores e IAs.
- Ícone próprio (monograma "G" dourado) e ícone para a tela inicial do iPhone.
- README do projeto.

### Mudado
- Números do perfil com o mesmo rótulo em todo o site ("anos de experiência", "sistemas profissionais").
- Textos: "mais de 400 pessoas" no resumo, nota da ASSEGO citando o GPol como exceção, CMED explicada, ajustes de português.
- Marca "GABRIEL" sem o ®.
- Cards de projeto mostram todas as tags.
- Print do Fox Finance refeito na vertical (sem as abas do navegador).

### Corrigido
- Um só `<h1>` na página.
- Foto de perfil baixada uma vez só (antes, duas no desktop); `priority` trocado por `preload` (Next 16).

### Removido
- Favicon e SVGs padrão do create-next-app; código morto (grade de stats invisível, constante `PLAY`).

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
