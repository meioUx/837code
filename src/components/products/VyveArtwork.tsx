const board = '/images/vyve-world-brand-board.png';

const regions = {
  athlete: { viewBox: '288 0 315 340', label: 'Atleta na identidade visual do VYVE World' },
  competitor: { viewBox: '780 0 202 340', label: 'Competidor na identidade visual do VYVE World' },
  outdoors: { viewBox: '605 0 172 340', label: 'Atleta explorando uma paisagem de montanhas' },
  medals: { viewBox: '15 842 665 211', label: 'Medalhas e conquistas do universo VYVE World' },
  ranking: {
    viewBox: '914 345 220 485',
    label: 'Tela de liga semanal apresentada no material do VYVE World',
  },
};

export function VyveArtwork({
  region,
  className = '',
  decorative = false,
}: {
  region: keyof typeof regions;
  className?: string;
  decorative?: boolean;
}) {
  const { viewBox, label } = regions[region];
  return (
    <svg
      className={`vyve-artwork ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
    >
      <image href={board} width="1151" height="1366" />
    </svg>
  );
}
