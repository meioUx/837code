const basePath = '/images/equilibra';

export const equilibraLogo = `${basePath}/logo.svg`;

export const equilibraScreens = [
  {
    file: '01-inicio-painel-hoje.png',
    title: 'Seu dia em um só lugar',
    category: 'Início',
    description: 'Painel com os registros e o resumo da rotina.',
  },
  {
    file: '02-alimentacao.png',
    title: 'Alimentação e nutrição',
    category: 'Alimentação',
    description: 'Refeições e nutrientes registrados ao longo do dia.',
  },
  {
    file: '03-registrar-refeicao.png',
    title: 'Registre suas refeições',
    category: 'Registro de refeição',
    description: 'Uma experiência para adicionar e repetir refeições.',
  },
  {
    file: '04-registrar-aplicacao-mapa-corporal.png',
    title: 'Histórico de aplicações',
    category: 'Aplicações',
    description: 'Registro do local de aplicação com mapa corporal.',
  },
  {
    file: '05-progresso.png',
    title: 'Uma visão da sua evolução',
    category: 'Progresso',
    description: 'Gráficos para acompanhar os registros ao longo do tempo.',
  },
  {
    file: '06-diario.png',
    title: 'Sua rotina, dia após dia',
    category: 'Diário',
    description: 'Uma linha do tempo com os registros de cada dia.',
  },
  {
    file: '07-relatorio-consulta.png',
    title: 'Informações para a consulta',
    category: 'Relatório',
    description: 'Prévia do relatório e opção de exportação em PDF no Premium.',
  },
  {
    file: '08-privacidade.png',
    title: 'Privacidade com clareza',
    category: 'Privacidade',
    description: 'Uma tela dedicada a explicar como os dados são tratados no aplicativo.',
  },
].map((screen) => ({ ...screen, src: `${basePath}/${screen.file}` }));
