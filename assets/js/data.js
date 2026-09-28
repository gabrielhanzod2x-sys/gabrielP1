/* =====================================================================
   CONTEÚDO DO PORTFÓLIO — Gabriel Luiz Vieira Lemos
   ---------------------------------------------------------------------
   Todos os textos, nomes, tags e caminhos de imagem ficam aqui.
   Para alterar um texto ou trocar uma imagem, edite este arquivo —
   a estrutura visual (HTML/CSS/JS) não precisa ser tocada.
   Regra do cliente: nenhum travessão (—) nos textos exibidos no site.
   ===================================================================== */

window.PORTFOLIO = {
  pessoa: {
    nome: 'Gabriel Luiz Vieira Lemos',
    nomeCurto: 'Gabriel',
    sobrenome: 'Lemos',
    cargo: 'Automação · Web Designer · Análise de Dados',
    cidade: 'Poços de Caldas, MG',
    status: 'Disponível para novos projetos',
    ano: '2026',
    email: 'Gabrieladm20@hotmail.com',
    // deixe em branco para ocultar
    whatsapp: '5535984482641',
    instagram: 'xl4gabrield2x',
    linkedin: '',
    github: '',
  },

  hero: {
    saudacao: 'Olá, eu sou',
    destaque: 'Gabriel.',
    texto: 'Desenvolvo sites, sistemas e automações que transformam uma necessidade real em solução digital: da interface ao banco de dados, da planilha ao dashboard.',
    botaoPrimario: { texto: 'Ver trabalhos', alvo: '#trabalho' },
    botaoSecundario: { texto: 'Falar comigo', alvo: '#contato' },
    cue: 'Role para explorar',
  },

  /* ---------- Omêga: sistema de agendamento do IASM (destaque principal) ---------- */
  omega: {
    etiqueta: 'Novo nível: Omêga',
    label: 'Projeto em destaque',
    titulo: 'Omêga',
    subtitulo: 'Sistema de Agendamento de Consultas do IASM',
    chamada: 'O projeto de maior valor técnico que já entreguei: um sistema completo, em produção, usado pelo Instituto de Assistência dos Servidores Municipais de Poços de Caldas.',
    paragrafos: [
      'O Omêga marca a passagem do site institucional para o software de verdade: autenticação por matrícula, ativação de conta pelo próprio servidor, recuperação de acesso e agendamento de consultas, tudo rodando em produção sob domínio próprio.',
      'A base de tudo é o banco de dados: é ele que armazena, organiza e protege cada cadastro, cada credencial e cada agendamento, garantindo que a informação certa chegue à pessoa certa, sem duplicidade e sem perda de histórico.',
      'Sobre essa base há uma camada de criptografia avançada: as senhas nunca são guardadas em texto puro e os dados sensíveis trafegam protegidos, para que o acesso de cada servidor seja realmente só dele.',
      'Para o IASM, o sistema substitui a marcação manual de consultas por um fluxo digital, rastreável e disponível a qualquer hora, atendendo os servidores municipais da cidade.',
    ],
    pilares: [
      { icone: 'lock',   titulo: 'Criptografia avançada',        texto: 'Senhas protegidas por hash e dados sensíveis trafegando de forma segura, do login ao agendamento.' },
      { icone: 'db',     titulo: 'Banco de dados estruturado',   texto: 'Modelagem própria para servidores, credenciais e consultas, com integridade referencial e histórico preservado.' },
      { icone: 'shield', titulo: 'Guarda e organiza os registros', texto: 'O banco é o cofre do sistema: armazena, organiza e protege cadastros, acessos e agendamentos.' },
      { icone: 'heart',  titulo: 'Importância para o IASM',      texto: 'Atende os servidores municipais de Poços de Caldas e digitaliza a marcação de consultas do instituto.' },
    ],
    stack: ['Autenticação própria', 'Criptografia de senhas', 'Banco de dados relacional', 'Painel administrativo', 'Responsivo', 'Domínio próprio'],
    link: { url: 'https://iasmagendamento.com.br/', texto: 'Acessar o sistema' },
    nota: 'Telas reais do sistema em produção, capturadas na área interna com conta administrativa.',
    telas: [
      { nome: 'Menu principal',        thumb: 'assets/img/omega/menu.webp',    full: 'assets/img/omega/menu-full.webp',    legenda: 'Três áreas em um só lugar: agendamentos, parte médica e gestão administrativa.' },
      { nome: 'Agendar consulta',      thumb: 'assets/img/omega/agendar.webp', full: 'assets/img/omega/agendar-full.webp', legenda: 'Calendário em duas etapas que mostra apenas horários realmente livres, sem conflito de agenda.' },
      { nome: 'Área do servidor',      thumb: 'assets/img/omega/hub.webp',     full: 'assets/img/omega/hub-full.webp',     legenda: 'Agendamentos, histórico completo de consultas e canal de feedback para o instituto.' },
      { nome: 'Parte médica',          thumb: 'assets/img/omega/medica.webp',  full: 'assets/img/omega/medica-full.webp',  legenda: 'Portal do médico com pacientes, dashboard de atendimentos e próximas consultas.' },
      { nome: 'Comparativo de custos', thumb: 'assets/img/omega/custos.webp',  full: 'assets/img/omega/custos-full.webp',  legenda: 'Análise de economia entre a gestão própria do IASM e o plano cooperativo, com importação de valores.' },
      { nome: 'Segurança da conta',    thumb: 'assets/img/omega/conta.webp',   full: 'assets/img/omega/conta-full.webp',   legenda: 'Cada servidor gerencia a própria senha e a segurança do acesso.' },
    ],
  },

  /* ---------- Seção "Sobre mim" (texto de eu/minha apresentação.txt) ---------- */
  sobre: {
    label: 'Conhecendo mais',
    titulo: 'Desenhar, construir, automatizar.',
    paragrafos: [
      'Sou Gabriel Luiz Vieira Lemos, 26 anos, e trabalho com tecnologia no ponto em que ela vira solução: desenvolvimento web, criação de sistemas, automação de processos e análise de dados. Parto sempre de uma necessidade concreta de quem vai usar e, a partir dela, desenho a interface, estruturo os dados e construo a ferramenta.',
      'No desenvolvimento, crio sites e interfaces do zero com HTML, CSS e JavaScript, com identidade visual própria e foco na experiência de quem navega. Em sistemas, desenvolvi soluções internas como o cadastro de aproximadamente 9 mil registros de beneficiários, com MongoDB Atlas e criptografia AES-256, além de portal de sistemas, requerimentos online e controle financeiro.',
      'Em dados e automação, uso Excel avançado e Power BI para montar dashboards, análises financeiras e relatórios que apoiam decisões, substituindo rotinas manuais por processos automáticos. Na parte visual, crio logos e peças no Canva, edito vídeos no CapCut e exploro 3D e ferramentas de inteligência artificial para acelerar entregas e testar ideias.',
      'A formação em Administração me ajuda a enxergar o negócio por trás de cada pedido. Acompanho o projeto de ponta a ponta, da primeira conversa aos ajustes finais, com atenção aos detalhes e compromisso com o resultado.',
    ],
    qualificacoes: [
      { titulo: 'Pacote Office Avançado', detalhe: 'Word, Excel e PowerPoint' },
      { titulo: 'Power BI Avançado', detalhe: 'Dashboards e análise de dados' },
      { titulo: 'HTML5, CSS3 e JavaScript', detalhe: 'Sites e interfaces do zero' },
      { titulo: 'Banco de dados', detalhe: 'MongoDB Atlas e PostgreSQL' },
      { titulo: 'Criptografia & segurança', detalhe: 'AES-256 na proteção de dados' },
      { titulo: 'Formação em Administração', detalhe: 'Visão de negócio aplicada a cada projeto' },
    ],
    formacoes: [
      { titulo: 'Administração', detalhe: 'Formação acadêmica com foco em gestão e visão de negócios' },
    ],
  },

  /* ---------- Habilidades (logos em site/assets/img/skills) ---------- */
  habilidades: {
    label: 'Habilidades',
    titulo: 'Ferramentas que domino',
    office: {
      titulo: 'Pacote Office Avançado',
      detalhe: 'Documentos, planilhas e apresentações. Uso o Excel avançado para análises financeiras, relatórios e automação de rotinas.',
      nivel: 'Avançado',
    },
    // "detalhe": o que é + para que serve + como uso nos projetos (texto curto)
    lista: [
      { id: 'html5',    nome: 'HTML5 · CSS3 · JavaScript',              detalhe: 'A base de qualquer site: estrutura (HTML), aparência (CSS) e interação (JavaScript). É com isso que construo do zero as páginas, animações e funcionalidades dos meus projetos.', nivel: 'Base de todos os sites', logo: 'assets/img/skills/html5.png',    cor: '#ff5a2d' },
      { id: 'powerbi',  nome: 'Power BI',                               detalhe: 'Ferramenta da Microsoft que transforma dados em dashboards e indicadores. Uso para acompanhar resultados, cruzar informações e apoiar decisões de gestão.', nivel: 'Avançado',               logo: 'assets/img/skills/powerbi.png',  cor: '#f2c811' },
      { id: 'database', nome: 'Banco de dados',                         detalhe: 'Banco de dados seguro, estruturado e preparado para organizar informações com eficiência: usuários, senhas, conteúdos, registros e dados das aplicações, com integridade e controle de acesso.', nivel: 'Seguro e estruturado',    logo: 'assets/img/skills/database.png', cor: '#ffd36b', ferramentas: ['PostgreSQL', 'MongoDB'] },
      { id: 'security', nome: 'Criptografia',                           detalhe: 'Técnicas para proteger dados e controlar acessos. Apliquei AES-256 no sistema de beneficiários e uso na proteção de senhas e informações sensíveis em sistemas web.', nivel: 'Segurança',              logo: 'assets/img/skills/security.png', cor: '#8fb2ff', ferramentas: ['OpenSSL', 'VeraCrypt'] },
      { id: 'vscode',   nome: 'Programação e VS Code (Extensões)',      detalhe: 'Editor onde escrevo e organizo o código dos projetos, com extensões para produtividade e controle de versões. É o ambiente de trabalho de todos os sites e sistemas.', nivel: 'Editor e extensões',     logo: 'assets/img/skills/code.svg',     cor: '#ff5a2d', ferramentas: ['Visual Studio Code (VS Code)', 'GitLens (Extensão VS Code)'] },
      { id: 'github',   nome: 'GitHub',                                 detalhe: 'Plataforma para versionar, organizar e armazenar projetos. Permite acompanhar cada alteração do código, manter o histórico de desenvolvimento e publicar repositórios.', nivel: 'Versionamento',          logo: 'assets/img/skills/github.png',   cor: '#f1ede6', ferramentas: ['Git', 'Repositórios'] },
      { id: 'three',    nome: '3D na web (Three.js)',                   detalhe: 'Biblioteca JavaScript para colocar objetos 3D dentro de páginas web. Uso em ícones e mascotes tridimensionais interativos, como os deste portfólio e do site Del Carmen Ink.', nivel: 'Interatividade',         logo: 'assets/img/skills/three.svg',    cor: '#8fb2ff', ferramentas: ['Three.js', 'WebGL'] },
      { id: 'canva',    nome: 'Canva',                                  detalhe: 'Ferramenta de design online para criar logos, identidade visual e materiais gráficos. Uso para compor layouts, tipografia e cores de peças visuais, como logos e identidades de marca.', nivel: 'Criação visual',         logo: 'assets/img/skills/canva.png',    cor: '#20c4cb', ferramentas: ['Logos', 'Identidade visual'] },
      { id: 'capcut',   nome: 'CapCut',                                 detalhe: 'Editor de vídeo com cortes, legendas, transições e efeitos. Uso para editar vídeos curtos, apresentações e conteúdos visuais dos projetos.', nivel: 'Edição de vídeo',        logo: 'assets/img/skills/capcut.png',   cor: '#f5f3ef', ferramentas: ['Cortes', 'Legendas'] },
      { id: 'ia',       nome: 'Inteligência Artificial (Claude e GPT)', detalhe: 'Assistentes de inteligência artificial que uso no dia a dia para acelerar código, revisar textos, explorar ideias visuais e resolver problemas mais rápido.', nivel: 'Familiaridade máxima com ferramentas de IA',             logo: 'assets/img/skills/claude.png',   cor: '#e2653c', ferramentas: ['ChatGPT (OpenAI)', 'Claude (Anthropic)'] },
    ],
  },

  /* ---------- Websites (prints em site/assets/img/works/<slug>) ---------- */
  categorias: [
    { id: 'premium',    nome: 'Premium',    descricao: 'Projetos com maior nível de elaboração visual, interatividade e acabamento.', marca: 'assets/img/category-marks/premium-quality.png', marcaAlt: 'Selo de projeto premium' },
    { id: 'comerciais', nome: 'Comerciais', descricao: 'Sites desenvolvidos com foco em negócios, produtos e serviços.', marca: 'assets/img/category-marks/commercial-cart.png', marcaAlt: 'Ícone de projetos comerciais' },
    { id: 'casuais',    nome: 'Feito por FA', descricao: 'Projetos de proposta mais leve, experimental ou descontraída.', marca: 'assets/img/category-marks/fa-mark.png', marcaAlt: 'Marca FA' },
  ],

  websites: [
    {
      slug: 'gimenez',
      nome: 'Estúdio Gimenez Barbershop',
      categoria: 'premium',
      subtitulo: 'Jhones, barbeiro desde 2004, em Poços de Caldas',
      descricao: 'Site com identidade visual própria, roleta interativa de oito estilos de corte, instrumentos e produtos em 3D, galeria de trabalhos e planos de assinatura. Apresenta o clube de fidelidade digital e direciona agendamentos e consultas para o WhatsApp.',
      tags: ['HTML5', 'CSS3', 'JavaScript', '3D', 'Roleta de cortes', 'WhatsApp'],
      url: 'https://peaceful-narwhal-c12ac2.netlify.app/',
      prints: 5,
      legendas: ['Apresentação: Estúdio Gimenez Barbershop', 'Roleta interativa: oito estilos de corte', 'Instrumentos em 3D: cadeira vintage', 'Galeria: cortes reais de Jhones', 'Planos de assinatura: Luso, Brasil e Itália'],
    },
    {
      slug: 'barbearia',
      nome: 'Barbearia Mr. Jones',
      categoria: 'premium',
      subtitulo: 'Barbearia clássica em Poços de Caldas, desde 2011',
      descricao: 'Site premium com consulta de visagismo direto do celular (o formato do rosto é analisado no próprio dispositivo e recebe um ranking de cortes), planos de assinatura e catálogo de cortes com fotos.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Visagismo no dispositivo', 'Assinaturas'],
      prints: 4,
      legendas: ['Início: 4 motivos para escolher a Mr. Jones', 'Consulta de visagismo em 5 etapas', 'Planos de assinatura', 'Catálogo de cortes'],
    },
    {
      slug: 'fernanda',
      nome: 'Fernanda · Del Carmen Ink',
      categoria: 'premium',
      subtitulo: 'Tatuagem autoral',
      descricao: 'Experiência em slides horizontais com mascote 3D: temas de tatuagem (animais, animes, jogos, religião), processo do desenho à pele, apresentação em vídeo e orçamento direto.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Slides', '3D', 'Vídeo'],
      prints: 4,
      legendas: ['Início: Fernanda', 'Encontre seu tema', 'Do desenho à pele', 'Apresentação: Desenhar, desde sempre'],
    },
    {
      slug: 'anne',
      nome: 'Anne Crochê Art',
      categoria: 'premium',
      subtitulo: 'Bolsas de crochê feitas à mão',
      descricao: 'Ateliê com catálogo filtrado por cores, montagem de combo com até três peças (o valor aparece na hora) e fechamento do pedido pelo WhatsApp.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Catálogo', 'Combo', 'WhatsApp'],
      prints: 4,
      legendas: ['Seja bem-vinda', 'Peças que nascem à mão', 'Monte seu combo', 'Cada ponto feito à mão'],
    },
    {
      slug: 'aba',
      nome: 'ABA · Sistema de Metas e Disciplina',
      categoria: 'premium',
      subtitulo: 'Web app pessoal de metas, hábitos e evolução',
      descricao: 'Sistema com 8 ABAs (exercícios, alimentação, faculdade, proibidos, gentileza, investimentos, trabalho e sono), pontuação semanal com fechamento automático no domingo, histórico acumulado na área lateral e dados salvos no próprio navegador. Feito do zero, sem bibliotecas.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Web app', 'Score semanal', 'LocalStorage'],
      prints: 4,
      legendas: ['Painel: score, metas da semana e portões das 8 ABAs', 'ABA 01 Exercícios: visão geral, metas e regras', 'ABA 06 Investimentos: bloqueada até a data de abertura', 'Portões de entrada das 8 ABAs'],
    },
    {
      slug: 'cadu',
      nome: 'Cadu Pizzaria & Lanchonete',
      categoria: 'comerciais',
      subtitulo: 'Do forno à chapa, sabor de verdade',
      descricao: 'Cardápio por categorias, galeria dos pratos, sacola de pedidos e envio do resumo pelo WhatsApp. Os valores são confirmados na conversa.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Sacola', 'WhatsApp'],
      prints: 4,
      legendas: ['Início', 'Vitrine: Pizzas', 'Cardápio da Cadu', 'Sua sacola'],
    },
    {
      slug: 'analu',
      nome: 'Analu Calçados',
      categoria: 'comerciais',
      subtitulo: 'Um novo passo começa aqui',
      descricao: 'Nova fase da loja: vitrine com filtros, combos de calçados, a história de quem faz a Analu e atendimento pelo WhatsApp.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Vitrine', 'WhatsApp'],
      prints: 4,
      legendas: ['Início: Grande inauguração', 'Tudo o que está na vitrine', 'Combos de calçados', 'Quem faz a Analu'],
    },
    {
      slug: 'bluelock',
      nome: 'Blue Lock: Egoist Experience',
      categoria: 'casuais',
      subtitulo: 'Projeto de fã, sem fim comercial',
      descricao: 'Players, egoist cards com raridades sorteadas na abertura de pack, ego ranking, best plays e montagem de time.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Cards', 'Animações'],
      prints: 6,
      legendas: ['Devore ou seja devorado', 'Egoist cards', 'Colecionáveis: raridades', 'Elenco: jogadores e filtros', 'Elenco: Barou, Kaiser e outros jogadores', 'Elenco: jogadores lendários'],
    },
  ],

  /* ---------- Sistemas & automações (site/assets/img/systems) ---------- */
  sistemas: {
    label: 'Sistemas & automações',
    titulo: 'O que automatizei no estágio',
    intro: 'Sistemas e planilhas desenvolvidos no IASM para substituir processos demorados e manuais por rotinas digitais.',
    canal: { nome: 'Gabriel Luiz Vieira Lemos', papel: 'Estagiário · IASM', avatar: 'assets/img/eu/perfil-240.webp' },
    itens: [
      {
        slug: 'portal',
        titulo: 'Portal de Agrupação IASM',
        meta: ['Portal', '6 sistemas', 'Instituto de Assistência dos Servidores Municipais'],
        badge: 'PORTAL',
        descricao: 'Página central que reúne os sistemas do instituto em um só lugar: fichas cadastradas, sistema de cartas (geração e envio com AR), procedimentos, contribuição, sistema de slips (holerites em PDF) e endividamento.',
        thumb: 'assets/img/systems/portal.webp',
        full: 'assets/img/systems/portal-full.webp',
      },
      {
        slug: 'fichas',
        titulo: 'IASM // Cadastro: Fichas por órgão',
        meta: ['Sistema', 'Banco de dados conectado'],
        badge: 'CADASTRO',
        descricao: 'Cadastro de fichas com seleção do órgão em carrossel (Prefeitura, DMAE, Águas Minerais, ASBAP Aposentados, Judicial, Licença sem vencimento, INSS…), navegação por setas ou clique e lista de fichas registradas.',
        thumb: 'assets/img/systems/fichas.webp',
        full: 'assets/img/systems/fichas-full.webp',
      },
      {
        slug: 'requerimentos',
        titulo: 'Portal do Servidor: Sistema de Requerimentos',
        meta: ['Sistema', 'Poços de Caldas, MG', '100% digital'],
        badge: 'WEB APP',
        descricao: 'Requerimentos online em três frentes: novo requerimento (rápido, seguro e online), painel administrativo restrito para consultar, analisar e gerenciar, e acompanhamento do status (visualizado ou aguardando).',
        thumb: 'assets/img/systems/requerimentos.webp',
        thumbAlt: 'assets/img/systems/requerimentos-alt.webp',
        full: 'assets/img/systems/requerimentos-full.webp',
      },
      {
        slug: 'faturamentos',
        titulo: 'Controle de Verbas Financeiras',
        meta: ['Sistema', 'Gestão financeira', 'Exporta Excel e PDF'],
        badge: 'DASHBOARD',
        descricao: 'Gestão, acompanhamento e consolidação financeira: verba atual, entradas, gastos, saldo e resultado com indicador de situação (prejuízo → estável → lucro), calendário financeiro, filtros por ano, mês, verba, categoria e período, e exportação para Excel e PDF.',
        thumb: 'assets/img/systems/faturamentos.webp',
        full: 'assets/img/systems/faturamentos-full.webp',
      },
      {
        slug: 'excel-orgaos',
        titulo: 'Contribuições × Gastos por Órgão (Excel)',
        meta: ['Planilha', 'Excel avançado', '3 abas', 'Gráficos nativos'],
        badge: 'EXCEL',
        descricao: 'Painel executivo em Excel para acompanhar contribuições, gastos e resultado dos 6 órgãos atendidos pelo instituto: dashboard com 7 indicadores e 5 gráficos, resumo mensal por órgão e categoria, ranking com situação de superávit ou déficit e base única de lançamentos com fórmulas dinâmicas. Foi nesse tipo de planilha que desenvolvi o Excel avançado e a base de dados que uso nos dashboards do Power BI.',
        thumb: 'assets/img/systems/excel-dashboard-v3.webp',
        full: 'assets/img/systems/excel-dashboard-full-v3.webp',
        abas: [
          { nome: 'Dashboard',   thumb: 'assets/img/systems/excel-dashboard-v3.webp',   full: 'assets/img/systems/excel-dashboard-full-v3.webp' },
          { nome: 'Resumo',      thumb: 'assets/img/systems/excel-resumo.webp',      full: 'assets/img/systems/excel-resumo-full.webp' },
          { nome: 'Lançamentos', thumb: 'assets/img/systems/excel-lancamentos.webp', full: 'assets/img/systems/excel-lancamentos-full.webp' },
        ],
      },
    ],
  },

  /* ---------- Leque de capas (seção "Trabalho") ---------- */
  capas: [
    { id: 'gimenez', titulo: 'Estúdio Gimenez', categoria: 'Premium', alvo: '#work-gimenez', img: 'assets/img/covers/gimenez.webp' },
    { id: 'barbearia', titulo: 'Barbearia Mr. Jones', categoria: 'Premium',   alvo: '#work-barbearia', img: 'assets/img/covers/barbearia.webp' },
    { id: 'fernanda',  titulo: 'Del Carmen Ink',      categoria: 'Premium',   alvo: '#work-fernanda',  img: 'assets/img/covers/fernanda.webp' },
    { id: 'anne',      titulo: 'Anne Crochê Art',     categoria: 'Premium',   alvo: '#work-anne',      img: 'assets/img/covers/anne.webp' },
    { id: 'aba',       titulo: 'ABA · Metas',         categoria: 'Premium',   alvo: '#work-aba',       img: 'assets/img/covers/aba.webp' },
    { id: 'sistemas',  titulo: 'Sistemas IASM',       categoria: 'Estágio',   alvo: '#sistemas',       img: 'assets/img/covers/sistemas.webp' },
    { id: 'cadu',      titulo: 'Cadu Pizzaria',       categoria: 'Comercial', alvo: '#work-cadu',      img: 'assets/img/covers/cadu.webp' },
    { id: 'analu',     titulo: 'Analu Calçados',      categoria: 'Comercial', alvo: '#work-analu',     img: 'assets/img/covers/analu.webp' },
    { id: 'bluelock',  titulo: 'Blue Lock',           categoria: 'Casual',    alvo: '#work-bluelock',  img: 'assets/img/covers/bluelock.webp' },
  ],

  /* ---------- Possibilidades (o que seu site pode ter) ---------- */
  // Vitrine de recursos que PODEM ser desenvolvidos. As demonstrações são ilustrativas.
  possibilidades: {
    label: 'Possibilidades',
    intro: 'Muito além de uma página bonita. Experiências digitais pensadas para destacar sua marca, facilitar a jornada do cliente e transformar o site em uma ferramenta real para o seu negócio.',
    nota: 'Demonstrações ilustrativas. Cada recurso é desenvolvido sob medida, de acordo com o projeto.',
    itens: [
      { id: 'identidade',   titulo: 'Identidade visual imersiva',    texto: 'Cada detalhe pensado para transmitir o posicionamento da sua marca desde o primeiro segundo.',            tags: ['Tipografia', 'Paleta', 'Hierarquia', 'Respiro'], ideal: 'marcas que precisam se diferenciar: estúdios, lojas autorais, profissionais liberais e negócios premium.' },
      { id: '3d',           titulo: 'Experiências 3D interativas',   texto: 'Objetos tridimensionais que o visitante pode explorar e girar direto na tela.',                            tags: ['Produtos em 3D', 'Explorável'], ideal: 'impressionar visualmente: produtos, tênis e roupas, móveis, joias e lançamentos.' },
      { id: 'video',        titulo: 'Vídeos cinematográficos',       texto: 'Cenas que prendem a atenção e apresentam sua marca com direção cinematográfica.',                         tags: ['Tela cheia', 'Loop', 'Fundo em vídeo'], ideal: 'restaurantes, barbearias, tatuadores, imobiliárias e marcas com clima próprio para mostrar.' },
      { id: 'pagamentos',   titulo: 'Pagamentos pelo site',          texto: 'Seu cliente compra e paga sem sair da experiência do site.',                                              tags: ['PIX', 'Cartão', 'Checkout'], ideal: 'lojas, delivery, cursos e serviços que vendem direto pelo site.' },
      { id: 'area-cliente', titulo: 'Área exclusiva do cliente',     texto: 'Um espaço privado onde cada cliente acompanha pedidos, dados e solicitações de forma simples.',           tags: ['Login', 'Pedidos', 'Histórico'], ideal: 'clínicas, academias, escritórios e serviços com pedidos ou atendimento recorrente.' },
      { id: 'dados',        titulo: 'Banco de dados inteligente',    texto: 'Uma estrutura para guardar, organizar e usar as informações do seu negócio com segurança.',              tags: ['Clientes', 'Produtos', 'Pedidos'], ideal: 'campos com cadastro: clientes, alunos, pacientes, produtos, pedidos e registros internos.' },
      { id: 'editorial',    titulo: 'Design fora do óbvio',          texto: 'Nem todo site precisa parecer com todos os outros. A composição pode ter personalidade própria.',         tags: ['Grid quebrado', 'Sobreposição', 'Tipografia grande'], ideal: 'portfólios, estúdios criativos, moda e marcas que vivem de imagem.' },
      { id: 'conversao',    titulo: 'Proposta de valor + CTAs',      texto: 'Design, conteúdo e chamadas estratégicas trabalhando juntos para transformar atenção em ação.',          tags: ['Chamadas', 'WhatsApp', 'Formulários'], ideal: 'qualquer negócio que quer transformar visita em contato: orçamento, agendamento ou compra.' },
    ],
    querer: { marcar: '+ Quero isso', marcado: '✓ Escolhido' },
    cta: {
      eyebrow: 'Próximo passo',
      titulo: 'Quer levar isso para o seu projeto?',
      texto: 'Conte o que você tem em mente e podemos transformar a ideia em uma experiência digital feita para o seu negócio.',
      botao: 'Montar meu projeto',
      vazio: 'Marque os recursos que chamaram sua atenção com “+ Quero isso”',
      prefixo: 'Quero um site com:',
    },
  },

  contato: {
    label: 'Contato',
    titulo: 'Vamos construir algo com identidade?',
    texto: 'Sites, sistemas internos e automações. Me chame e conversamos sobre o seu projeto.',
  },

  rodape: {
    assinatura: 'Feito à mão com HTML, CSS e JavaScript',
  },
};
