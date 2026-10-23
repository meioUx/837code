import { Activity, Droplets, Heart, Utensils } from 'lucide-react';
import { equilibraLogo, equilibraScreens } from '../../data/equilibra';
import './equilibra.css';

export function EquilibraLogo({ size = 28 }: { size?: number }) {
  return (
    <img
      className="equilibra-logo"
      src={equilibraLogo}
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
    />
  );
}

export function EquilibraScreen({
  index = 0,
  className = '',
  eager = false,
}: {
  index?: number;
  className?: string;
  eager?: boolean;
}) {
  const screen = equilibraScreens[index] ?? equilibraScreens[0];
  return (
    <div className={`equilibra-screen ${className}`}>
      <img
        src={screen.src}
        alt={`Equilibra — ${screen.category}`}
        width={1080}
        height={1920}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}

export function EquilibraVisual() {
  return (
    <div className="equilibra-visual">
      <div className="equilibra-visual-glow" aria-hidden="true" />
      <div className="equilibra-visual-brand">
        <EquilibraLogo size={30} />
        <span>Equilibra</span>
      </div>
      <EquilibraScreen className="equilibra-screen--front" />
      <EquilibraScreen index={4} className="equilibra-screen--back" />
      <div className="equilibra-decoration equilibra-decoration--water" aria-hidden="true">
        <Droplets size={20} />
      </div>
      <div className="equilibra-decoration equilibra-decoration--food" aria-hidden="true">
        <Utensils size={20} />
      </div>
      <div className="equilibra-decoration equilibra-decoration--heart" aria-hidden="true">
        <Heart size={20} />
      </div>
      <span className="equilibra-visual-caption">
        <Activity size={12} /> SUA ROTINA, COM MAIS EQUILÍBRIO.
      </span>
    </div>
  );
}
