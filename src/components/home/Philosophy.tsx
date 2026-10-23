import { principles } from '../../data/company';
import { Reveal } from '../ui/Reveal';

export function Philosophy() {
  return (
    <section className="philosophy-section section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / Nossa filosofia</span>
            <h2>
              Mais do que software.
              <br />
              Criamos <span>experiências.</span>
            </h2>
          </div>
          <p>
            Acreditamos que tecnologia relevante nasce da combinação entre boas ideias, design
            inteligente e engenharia bem executada.
          </p>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08}>
              <article className="principle">
                <div className="principle-top">
                  <div className={`principle-shape principle-shape--${index}`} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
