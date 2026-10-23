import { MoveUpRight } from 'lucide-react';
import { AnimatedHeading } from '../ui/AnimatedHeading';

export function Vision() {
  return (
    <section className="vision-section" id="visao">
      <div className="container">
        <div className="vision-eyebrow">
          <span className="eyebrow">
            <i className="status-dot" /> Our vision
          </span>
          <span>837 — MANIFESTO</span>
        </div>
        <h2>
          <AnimatedHeading
            lines={['O futuro não é', 'apenas imaginado.', 'É construído.']}
            accentLast
          />
          <MoveUpRight aria-hidden="true" />
        </h2>
        <div className="vision-bottom">
          <span>We build what's next.</span>
          <p>
            Na 837code, acreditamos no potencial da tecnologia para transformar ideias em
            possibilidades reais. Exploramos diferentes mercados, comportamentos e necessidades para
            criar produtos digitais que combinam inovação, utilidade e experiências relevantes.
          </p>
        </div>
      </div>
    </section>
  );
}
