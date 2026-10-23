export type Product = {
  slug: string;
  name: string;
  category: string;
  theme: 'equilibra' | 'vyve';
  headline: string;
  description: string;
  shortDescription: string;
  status?: string;
  websiteUrl?: string;
  googlePlayUrl?: string;
  features: { title: string; description: string }[];
};

/** Only publish store links and release status after they are confirmed. */
export const products: Product[] = [
  {
    slug: 'equilibra',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.code837.equilibra',
    name: 'Equilibra',
    category: 'Saúde e bem-estar',
    theme: 'equilibra',
    headline: 'Sua rotina, com mais equilíbrio.',
    shortDescription: 'Um lugar para acompanhar cada passo da sua rotina.',
    description:
      'Um aplicativo para organizar a rotina de quem está em tratamento com medicamentos GLP-1, reunindo registros de alimentação, hidratação, peso, atividade física e acompanhamento da evolução.',
    features: [
      {
        title: 'Alimentação',
        description: 'Reúna seus registros de alimentação em uma experiência organizada.',
      },
      {
        title: 'Hidratação',
        description: 'Acompanhe os registros de consumo de água ao longo do dia.',
      },
      {
        title: 'Peso e evolução',
        description: 'Visualize seus registros de peso ao longo do tempo.',
      },
      {
        title: 'Atividade física',
        description: 'Mantenha os registros de movimento junto às demais informações da rotina.',
      },
      {
        title: 'Registro de aplicações',
        description: 'Organize o histórico de aplicações e os locais registrados no mapa corporal.',
      },
      {
        title: 'Diário da rotina',
        description: 'Consulte seus registros dia a dia em uma linha do tempo.',
      },
      {
        title: 'Relatório para consulta',
        description: 'Visualize um resumo dos registros. A exportação em PDF é um recurso Premium.',
      },
      {
        title: 'Privacidade',
        description:
          'Consulte no aplicativo as informações sobre armazenamento e tratamento dos seus dados.',
      },
    ],
  },
  {
    slug: 'vyve',
    name: 'VYVE World',
    category: 'Fitness / Gaming / Lifestyle',
    theme: 'vyve',
    headline: 'O seu movimento. O próximo nível.',
    shortDescription: 'Exercício físico com a energia de uma nova conquista.',
    description:
      'Uma experiência que transforma exercícios físicos em uma jornada competitiva. Desafios, evolução, níveis e temporadas conectam movimento, superação e competição.',
    features: [
      {
        title: 'Desafios',
        description: 'Objetivos que dão uma nova dimensão à experiência de se movimentar.',
      },
      {
        title: 'Evolução e níveis',
        description: 'Uma jornada de progressão que conecta movimento e superação.',
      },
      {
        title: 'Temporadas',
        description: 'Novos ciclos para explorar desafios e continuar a jornada.',
      },
      {
        title: 'Competição',
        description: 'Uma experiência que aproxima movimento, participação e competição.',
      },
    ],
  },
];
