import { ArrowUpRight, ChevronDown, Layers3, Trophy } from 'lucide-react';
import { vyveEmblems, vyveLeagues } from '../../data/vyve';
import { Reveal } from '../ui/Reveal';
import './vyve-collections.css';

export function VyveEmblemDisplay({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`vg-emblem-display ${compact ? 'vg-emblem-display--compact' : ''}`}>
      {vyveEmblems.map((emblem) => (
        <figure key={emblem.src}>
          <img
            src={emblem.src}
            alt={emblem.alt}
            width={1287}
            height={1222}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{emblem.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function CollectionBoard({
  title,
  description,
  image,
  alt,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: typeof Trophy;
}) {
  return (
    <details className="vg-collection-board">
      <summary>
        <Icon size={18} />
        <span>
          {title}
          <small>{description}</small>
        </span>
        <ChevronDown size={18} />
      </summary>
      <div className="vg-collection-board-content">
        <img src={image} alt={alt} width={1536} height={1024} loading="lazy" decoding="async" />
        <a href={image} target="_blank" rel="noreferrer">
          Abrir imagem em tamanho completo <ArrowUpRight size={15} />
        </a>
      </div>
    </details>
  );
}

export function VyveMedalCollection() {
  return (
    <CollectionBoard
      title="Explore a coleção de medalhas"
      description="Conquistas, categorias e identidade visual."
      image="/images/vyve/medals-board.png"
      alt="Painel de medalhas VYVE: consistência, treinos, força, corrida, habilidades, desafios especiais, estilo de vida, evolução pessoal, comunidade, marcos, recuperação e eventos."
      icon={Trophy}
    />
  );
}

export function VyveLeaguesSection() {
  return (
    <section className="vg-section vg-leagues">
      <div className="container">
        <div className="vg-section-heading">
          <div>
            <span className="vg-eyebrow">06 / LIGAS COMPETITIVAS</span>
            <h2>
              Mesmo movimento.
              <br />
              <em>Novo nível.</em>
            </h2>
          </div>
          <p>
            Do primeiro passo ao topo da evolução. Cada liga tem uma identidade visual própria, com
            emblemas que acompanham a jornada.
          </p>
        </div>
        <div className="vg-league-grid">
          {vyveLeagues.map((league, index) => (
            <Reveal key={league.name} delay={index * 0.04}>
              <article className="vg-league-card" style={{ borderTopColor: league.color }}>
                <span className="vg-league-number">{String(index + 1).padStart(2, '0')}</span>
                <svg
                  viewBox={`${20 + index * 187} 153 187 245`}
                  className="vg-league-crystal"
                  role="img"
                  aria-label={`Emblema da liga ${league.name}`}
                >
                  <image href="/images/vyve/leagues-board.png" width={1536} height={1024} />
                </svg>
                <h3 style={{ color: league.color }}>{league.name}</h3>
                <span className="vg-league-rule" style={{ background: league.color }} />
              </article>
            </Reveal>
          ))}
        </div>
        <div className="vg-league-bottom">
          <Layers3 size={20} />
          <p>
            O material apresenta três divisões por liga, da III à I. Regras e critérios de
            progressão serão detalhados nos canais oficiais do produto.
          </p>
        </div>
        <VyveMedalCollection />
        <CollectionBoard
          title="Conheça a ascensão cristalina"
          description="Ligas, divisões e progressão visual dos emblemas."
          image="/images/vyve/leagues-board.png"
          alt="Painel das ligas Ferro, Cobre, Prata, Ouro, Ametista, Safira, Esmeralda e Diamante, com divisões e evolução visual."
          icon={Layers3}
        />
      </div>
    </section>
  );
}
