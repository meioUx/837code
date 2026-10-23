import { processSteps } from '../../data/company';
import { Reveal } from '../ui/Reveal';

export function ProcessTimeline() {
  return (
    <section className="section container process-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / Como criamos</span>
          <h2>
            Da primeira ideia
            <br />
            ao próximo <span>grande produto.</span>
          </h2>
        </div>
        <p>Um ciclo aberto de descobertas, decisões e evolução. Construir é só o começo.</p>
      </div>
      <ol className="process-timeline">
        {processSteps.map((step, index) => (
          <li key={step.name}>
            <Reveal delay={index * 0.06}>
              <div className="process-number">
                0{index + 1}
                <span />
              </div>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
