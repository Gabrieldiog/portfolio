// Conteúdo real do Gabriel (currículo + links verificados). Nada inventado.

// URL canônica do deploy. Mora aqui porque metadata, robots, sitemap e os Link
// headers precisam todos da mesma base — um lugar só pra trocar no dia que
// entrar domínio próprio.
export const siteUrl = "https://gabriel-diogo.vercel.app";

export const perfil = {
  nome: "Gabriel Diogo",
  nomeGigante: "GABRIEL",
  nomeCompleto: "Gabriel Diogo Vieira Silva",
  cargo: "Desenvolvedor Full Stack",
  local: "Goiânia, GO",
};

export const contato = {
  email: "diogo.software1@gmail.com",
  github: "https://github.com/Gabrieldiog",
  linkedin: "https://linkedin.com/in/gabrieldiogovsilva",
  whatsapp: "https://wa.me/5562984931303",
  whatsappLabel: "(62) 98493-1303",
  // Currículo em PDF servido do /public (abre em nova aba no visualizador).
  curriculo: "/curriculo-gabriel-diogo.pdf",
};

// Os dois números do perfil (hero, rail e menu usam os MESMOS rótulos).
export const numerosPerfil = [
  { valor: "3+", rotulo: "anos de experiência" },
  { valor: "15+", rotulo: "sistemas profissionais" },
];

// Palavras que trocam no título do hero.
export const palavrasHero = ["resolver", "entregar", "simplificar", "automatizar"];

export const chipsPerfil = ["Full Stack", "APIs REST", "TDD & Code Review", "Calmo", "Companheiro", "Extrovertido", "Curioso", "Autônomo", "Mão na massa", "Resolvedor"];

// ── Minha história (a seção pinada, capítulo a capítulo) ────────────────────
export type Capitulo = {
  marcador: string;
  titulo: string;
  texto: string;
};

export const historia: Capitulo[] = [
  {
    marcador: "Fazenda",
    titulo: "A curiosidade nasceu no interior",
    texto:
      "Cresci numa fazenda, encantado com o que funcionava sozinho: a luz do sensor de presença que acendia ao passar, o irrigador que ligava na hora certa pelo timer, a boia que enchia a caixa d'água e desligava a bomba, o portão que abria com um botão. Eu precisava entender como aquilo funcionava.",
  },
  {
    marcador: "Jogos",
    titulo: "Os jogos viraram combustível",
    texto:
      "Com os jogos a paixão por tecnologia só cresceu. Ali decidi: eu não queria só usar sistemas, queria construir os meus.",
  },
  {
    marcador: "Java",
    titulo: "Quebrando a cabeça com Java",
    texto:
      "No começo era Java na raça. Quebrava a cabeça pra entender cada conceito e amava cada minuto. Foi ali que aprendi a não largar um problema até ele ceder.",
  },
  {
    marcador: "Faculdade",
    titulo: "Engenharia de Software na UNIGOIÁS",
    texto:
      "Escolhi Engenharia de Software e amo o que estudo. Levo a faculdade a sério e ela me devolve base pra construir melhor.",
  },
  {
    marcador: "Confiança",
    titulo: "O dev que soluciona, e em quem confiam",
    texto:
      "Virei a pessoa que chamam quando há um problema pra resolver. Os diretores confiaram na minha autonomia e, ainda júnior, dirigi dois projetos do início ao fim. Entender a dor de quem usa e resolver virou o meu padrão.",
  },
  {
    marcador: "Hoje",
    titulo: "Eu guio a tecnologia, não o contrário",
    texto:
      "Hoje a IA acelera meu trabalho, mas não substitui o conhecimento: eu guio, ela executa junto. Faço code review, sigo fazendo cursos pra aprender sempre mais e, na faculdade, escrevo o código com a própria mão. Sou apaixonado por tecnologia e sempre vou ser.",
  },
];

// ── Projetos no ar (com link e print real) ──────────────────────────────────
export type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  stack: string[];
  link: string;
  repo?: string;
  imagem: string;
};

export const projetos: Projeto[] = [
  {
    id: "fox",
    nome: "Fox Finance",
    descricao:
      "App de gestão financeira pessoal usado por 3 usuárias reais: cada conta é privada e isolada, com senha protegida e um teste automatizado que garante que uma usuária nunca lê os dados da outra.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle"],
    link: "https://fox-finance.vercel.app",
    repo: "https://github.com/Gabrieldiog/FOX-finance",
    imagem: "/projetos/fox-finance.png",
  },
  {
    id: "balcao",
    nome: "Balcão",
    descricao:
      "API gateway que unifica APIs públicas brasileiras (Câmara, Senado, BACEN, IBGE) num só lugar: normalização de dados, cache, retry com circuit breaker e busca que consulta várias fontes em paralelo.",
    stack: ["Python", "FastAPI", "Docker"],
    link: "https://balcaoo.netlify.app",
    repo: "https://github.com/Gabrieldiog/gateway-",
    imagem: "/projetos/balcao.png",
  },
  {
    id: "algoshorts",
    nome: "Algo Shorts",
    descricao:
      "Visualizador interativo de algoritmos de ordenação, passo a passo, narrado e com som gerado em tempo real via Web Audio. Aprender vendo, no ritmo que você quiser.",
    stack: ["Next.js", "TypeScript", "Web Audio"],
    link: "https://algoshorts.netlify.app",
    repo: "https://github.com/Gabrieldiog/algo-shorts",
    imagem: "/projetos/algoshorts.png",
  },
  {
    id: "maiormenor",
    nome: "Maior ou Menor?",
    descricao:
      "Jogo de adivinhação com dados públicos reais do Brasil e multijogador 1v1 por WebSocket. O motor serve pra qualquer tema: cada baralho é só um arquivo JSON.",
    stack: ["Next.js", "TypeScript", "WebSocket"],
    link: "https://game-numbers.vercel.app",
    repo: "https://github.com/Gabrieldiog/game-numbers",
    imagem: "/projetos/maiormenor.png",
  },
  {
    id: "pharmacy",
    nome: "Pharmacy Price",
    descricao:
      "Comparador de preços de medicamentos: o preço máximo permitido pela CMED (a câmara que regula o mercado de remédios) lado a lado com o preço real praticado nas farmácias.",
    stack: ["TypeScript", "Scraping", "APIs"],
    link: "https://pharmacy-price.netlify.app",
    repo: "https://github.com/Gabrieldiog/Pharmacy-price",
    imagem: "/projetos/pharmacy.png",
  },
];

// ── Sistemas para campanha e mandato ────────────────────────────────────────
// Números conferidos: "Minha Cola" mostrava 21.383 acessos no próprio contador
// da página; 450+ cabos eleitorais cadastrados (informado pelo Gabriel); 246
// municípios de Goiás; GPol cobre os 5.570 municípios do Brasil.
export type SistemaPolitico = {
  nome: string;
  descricao: string;
  link?: string; // sem link = sistema interno
  imagem?: string;
  formato?: "celular" | "tela"; // print de celular (padrão) ou de tela cheia
  // O número mora no card do sistema que o gerou (e só nele).
  metrica?: { valor: number; sufixo: string; rotulo: string };
};

export type FrentePolitica = {
  titulo: string;
  resumo: string;
  sistemas: SistemaPolitico[];
};

export const campanhas = {
  frentes: [
    {
      titulo: "Captação e relacionamento",
      resumo: "Trazer gente pra rede e não perder ninguém de vista.",
      sistemas: [
        {
          nome: "Rede de apoio",
          descricao: "Portal de captação: apresenta as causas e as propostas e cadastra apoiadores na rede, com área logada.",
          link: "https://sergio.seg.br/index.php",
          imagem: "/politica/rede-de-apoio.jpg",
        },
        {
          nome: "Cadastro de cabos eleitorais",
          descricao: "Cadastro e organização dos cabos eleitorais da campanha.",
          metrica: { valor: 450, sufixo: "+", rotulo: "cabos eleitorais cadastrados" },
        },
        {
          nome: "CRM da campanha",
          descricao: "Gestão de contatos, lideranças e apoiadores num lugar só.",
        },
      ],
    },
    {
      titulo: "Inteligência eleitoral",
      resumo: "Entender o eleitorado antes de decidir onde estar.",
      sistemas: [
        {
          nome: "GPol",
          descricao:
            "Inteligência política em tempo real: mapa de votos, dados do TSE e do Censo e escuta social com IA. Em produção com 40 pessoas em 2 estados.",
          metrica: { valor: 5570, sufixo: "", rotulo: "municípios mapeados" },
          link: "https://sergio.seg.br/gpol-/",
          imagem: "/projetos/gpol.png",
          formato: "tela",
        },
      ],
    },
    {
      titulo: "Mobilização e agenda pública",
      resumo: "Facilitar o voto e abrir a porta do mandato.",
      sistemas: [
        {
          nome: "Minha Cola",
          descricao:
            "O eleitor monta e imprime a cola de votação (4 colinhas por folha). Roda inteira no aparelho: sem login, sem cadastro e sem guardar dado nenhum.",
          metrica: { valor: 21, sufixo: " mil+", rotulo: "acessos do público" },
          link: "https://sergio.seg.br/cola/",
          imagem: "/politica/minha-cola.jpg",
        },
        {
          nome: "Agenda do mandato",
          descricao:
            "Lideranças entram com a conta Google, veem os horários livres e pedem uma reunião; o gabinete confirma ou ajusta.",
          link: "https://sergio.seg.br/agenda/",
          imagem: "/politica/agenda.jpg",
        },
        {
          nome: "Site institucional",
          descricao: "Quem é, propostas, notícias, podcasts e contato da assessoria.",
          link: "https://subtenentesergio.com.br/",
          imagem: "/politica/site-institucional.jpg",
        },
      ],
    },
  ] satisfies FrentePolitica[],
};

// ── Trajetória profissional ─────────────────────────────────────────────────
// Pessoas que usam ou trabalham com sistemas que o Gabriel construiu ou dos
// quais fez parte: 450 (cabos eleitorais) + 292 (clientes da calculadora,
// banco de produção em out/2026) + 200 (visitantes que usaram o totem do
// IHGG) + 80 (BC Energia) + 55 (ASSEGO) = 1.077 → 1.070+.
// Os 21 mil+ acessos da Minha Cola são alcance público (acessos, não pessoas)
// e ficam só no card dela, em Campanhas.
export const alcanceTotal = {
  valor: 1070,
  sufixo: "+",
  rotulo: "pessoas usam ou trabalham com sistemas que construí ou dos quais fiz parte",
  composicao: [
    "450 cabos eleitorais",
    "292 clientes da calculadora",
    "200 visitantes do totem",
    "80 na BC Energia",
    "55 na ASSEGO",
  ],
};

export type Trabalho = {
  org: string;
  site?: string;
  cargo: string;
  periodo: string;
  feitos: string[];
  nota?: string;
  metrica?: { valor: number; sufixo: string; rotulo: string };
  imagem?: string; // retrato do site (ou do sistema público) da casa
};

export const trajetoria: Trabalho[] = [
  {
    org: "Grupo BC Energia",
    imagem: "/trajetoria/bc.jpg",
    site: "https://grupobcenergia.com.br/",
    cargo: "Desenvolvedor Full Stack",
    periodo: "out/2026 · atual",
    // Descrito em termos técnicos de propósito: sem nomes de ferramentas
    // internas nem detalhes de infraestrutura da empresa.
    feitos: [
      "Automação de atendimento: consulta de fatura por unidade consumidora integrada ao data warehouse, com o documento gerado sob demanda (aprovada em code review)",
      "Migração de aplicações internas de plataforma low-code para infraestrutura própria, auto-hospedada",
      "Automação do relatório de economia dos clientes: quanto cada um economizou na energia no mês escolhido ou acumulado em 12 meses, gerado em poucos cliques pela equipe",
      "Gestão de acesso privilegiado (PAM) à infraestrutura, em homologação",
      "Gerador interno de boletos de cobrança",
    ],
    metrica: { valor: 80, sufixo: "+", rotulo: "funcionários usam os sistemas" },
  },
  {
    org: "Loja Eliane Martins",
    imagem: "/projetos/eliane-martins.png",
    site: "https://elianemartins.shop",
    cargo: "Desenvolvedor Full Stack",
    periodo: "2026",
    feitos: [
      "Loja virtual de materiais pedagógicos, do catálogo ao painel administrativo, no ar e com clientes comprando",
      "Checkout com PIX, boleto e cartão, webhooks de pagamento com reconciliação de pedidos e fila de reembolso",
      "482 testes automatizados e deploy contínuo com verificação de saúde a cada publicação",
    ],
  },
  {
    org: "ASSEGO",
    imagem: "/trajetoria/assego.jpg",
    site: "https://www.assego.com.br/",
    cargo: "Desenvolvedor Full Stack Júnior",
    periodo: "fev/2025 · out/2026",
    feitos: [
      "Sistema de gestão administrativa com 14+ módulos (financeiro, jurídico, comercial e mais), substituindo o legado: 55 usuários, 30+ todo dia",
      "GPol, plataforma de inteligência política em tempo real usada por 40 pessoas em Goiás e no Ceará",
      "Dois sistemas de gestão e agendamento, do clube e da pousada, usados por 10 colaboradores",
      "Sistema de ouvidoria completo, do levantamento de requisitos aos testes",
      "Sistema do projeto Bombeiro Mirim, do cadastro à gestão administrativa",
      "Mais de 10 outros sistemas e APIs internas pra operação do dia a dia",
      "Apoio à configuração dos servidores de tudo isso",
    ],
    nota: "A maioria são sistemas internos: rodam na rede da associação, sem landing page pra visitar (o GPol é a exceção e está na seção de campanhas). A prova: 105+ pessoas usando, 30+ delas todo dia.",
    metrica: { valor: 15, sufixo: "+", rotulo: "sistemas e APIs construídos" },
  },
  {
    org: "IHGG",
    imagem: "/trajetoria/ihgg.jpg",
    site: "https://ihgg.org/",
    cargo: "Arquiteto e Desenvolvedor de Software",
    periodo: "out/2025 · jan/2026",
    feitos: [
      "Arquitetura e desenvolvimento do totem interativo touchscreen exposto em Brasília",
      "Modelagem completa da base de dados do acervo histórico",
      "Consulta a jornais históricos sobre Goiás e Brasília, usada por 200+ visitantes",
    ],
    nota: "É um totem físico: pra usar, só indo até ele em Brasília.",
    metrica: { valor: 200, sufixo: "+", rotulo: "visitantes no totem" },
  },
  {
    org: "Conteúdo Club",
    imagem: "/projetos/calculadora.png",
    site: "https://conteudoclub.com/",
    cargo: "Desenvolvedor Full Stack",
    periodo: "jun/2023 · jan/2026",
    feitos: [
      "Calculadora do Creator: precificação e planejamento de serviços, com 292 clientes cadastrados em produção",
      "Participação ativa nas decisões técnicas e de produto",
    ],
    metrica: { valor: 292, sufixo: "", rotulo: "clientes cadastrados na calculadora" },
  },
  {
    org: "Fazenda Nova · GO",
    cargo: "Desenvolvedor Full Stack",
    periodo: "mar/2023 · abr/2024",
    feitos: [
      "Sistema de gestão rural: controle de estoque, financeiro, vendas e acompanhamento da produção da propriedade (leite, ovos e mais)",
      "Apoio a decisões operacionais e estratégicas da fazenda",
    ],
    nota: "Sistema interno da fazenda, sem página pública.",
  },
];

// ── Formação, cursos e idiomas ──────────────────────────────────────────────
export const formacao = {
  graduacao: {
    curso: "Bacharelado em Engenharia de Software",
    instituicao: "UNIGOIÁS",
    periodo: "2023 · conclusão prevista jun/2027",
  },
  cursos: [
    "React JS 19 e Next.js 15 (Udemy)",
    "Web Frontend: Fundamentos HTML, CSS e JS + 10 Projetos (Udemy)",
    "Python para Análise de Dados (Udemy)",
    "Ciência de Dados para Iniciantes com Projetos Reais (Udemy)",
  ],
  idiomas: ["Português (nativo)", "Espanhol (intermediário)", "Inglês (básico)"],
};

export const competencias: { grupo: string; itens: string[] }[] = [
  { grupo: "Linguagens", itens: ["JavaScript", "TypeScript", "PHP", "SQL", "Python", "Java", "HTML", "CSS"] },
  { grupo: "Frameworks", itens: ["Node.js", "Express.js", "NestJS", "React", "Next.js", "Vue.js", "Laravel", "Spring Boot", "TypeORM"] },
  { grupo: "Bancos", itens: ["MySQL", "PostgreSQL", "SQL Server"] },
  { grupo: "Infra & DevOps", itens: ["Docker", "Docker Compose", "Linux", "SSH", "Git"] },
  { grupo: "Práticas", itens: ["APIs REST", "TDD/BDD", "Levantamento de requisitos", "POO"] },
];
