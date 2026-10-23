import { Dumbbell, Flame, Gem, Trophy, Zap } from 'lucide-react';
import './vyve-world.css';
import { VyveLogo } from './VyveLogo';
import { VyveWordmark } from './VyveWordmark';

const brandBoard = '/images/vyve-world-brand-board.png';

/** Display regions of the supplied board without modifying the original image. */
export function VyveScreen({
  screen = 'progress',
  className = '',
}: {
  screen?: 'progress' | 'challenges';
  className?: string;
}) {
  const viewBox = screen === 'progress' ? '16 345 223 485' : '247 345 218 485';

  return (
    <svg
      className={`vyve-screen ${className}`}
      viewBox={viewBox}
      role="img"
      aria-label={
        screen === 'progress'
          ? 'Tela de evolução e atributos do VYVE World'
          : 'Tela de desafios do VYVE World'
      }
    >
      <image href={brandBoard} width="1151" height="1366" />
    </svg>
  );
}

export function VyveWorldVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`vyve-world-visual ${compact ? 'vyve-world-visual--compact' : ''}`}>
      <div className="vyve-world-glow" aria-hidden="true" />
      <div className="vyve-world-wordmark">
        <VyveLogo size={40} />
        <VyveWordmark />
      </div>
      <div className="vyve-world-screens">
        <VyveScreen className="vyve-screen--front" />
        {!compact && <VyveScreen screen="challenges" className="vyve-screen--back" />}
      </div>
      <div className="vyve-decoration vyve-decoration--flame" aria-hidden="true">
        <Flame />
        <span>SUPERAÇÃO</span>
      </div>
      <div className="vyve-decoration vyve-decoration--trophy" aria-hidden="true">
        <Trophy />
        <span>CONQUISTAS</span>
      </div>
      {!compact && (
        <>
          <div className="vyve-decoration vyve-decoration--gem" aria-hidden="true">
            <Gem />
          </div>
          <div className="vyve-decoration vyve-decoration--training" aria-hidden="true">
            <Dumbbell />
          </div>
        </>
      )}
      <div className="vyve-world-signature">
        <Zap size={12} /> MOVIMENTO QUE TE LEVA MAIS LONGE.
      </div>
    </div>
  );
}
