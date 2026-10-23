import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Reveal } from '../ui/Reveal';
import { Tilt } from '../ui/Tilt';
import { VyveWorldVisual } from './VyveWorldVisual';
import { EquilibraLogo, EquilibraVisual } from './EquilibraVisual';
import { VyveLogo } from './VyveLogo';

export function ProductShowcase() {
  return (
    <section className="section container product-showcase" id="produtos">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / Nosso portfólio</span>
          <h2>
            Ideias que
            <br />
            <span>ganham vida.</span>
          </h2>
        </div>
        <p>
          Conheça os produtos que estamos criando para transformar experiências, simplificar rotinas
          e explorar novas possibilidades.
        </p>
      </div>
      <div className="product-collection">
        {products.map((product, index) => (
          <Reveal key={product.slug}>
            <Tilt>
              <article className={`product-feature product-feature--${product.theme}`}>
                <div className="product-feature__copy">
                  <div className="product-feature__index">
                    <span>0{index + 1}</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="product-feature__brand">
                    {product.theme === 'equilibra' ? (
                      <EquilibraLogo size={30} />
                    ) : (
                      <VyveLogo size={38} />
                    )}
                    <h3>{product.name}</h3>
                  </div>
                  <h4>{product.shortDescription}</h4>
                  <p>{product.description}</p>
                  <Link className="product-feature__link" to={`/produtos/${product.slug}`}>
                    Conhecer o produto <ArrowUpRight size={20} />
                  </Link>
                </div>
                <Link
                  className="product-feature__visual"
                  to={`/produtos/${product.slug}`}
                  aria-label={`Explore o ${product.name}`}
                >
                  {product.theme === 'vyve' ? <VyveWorldVisual /> : <EquilibraVisual />}
                  <span className="product-visual-arrow">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
