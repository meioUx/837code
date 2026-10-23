import { ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { EquilibraLogo } from '../products/EquilibraVisual';
import { VyveLogo } from '../products/VyveLogo';

export function Ecosystem() {
  return (
    <section className="ecosystem-section section">
      <div className="container ecosystem-layout">
        <div className="ecosystem-copy">
          <span className="eyebrow">05 / Nosso ecossistema</span>
          <h2>
            Diferentes produtos.
            <br />
            <span>A mesma essência.</span>
          </h2>
          <p>
            Cada produto tem uma identidade, um propósito e um universo próprio. Todos nascem da
            mesma curiosidade pelo que ainda podemos criar.
          </p>
        </div>
        <div className="ecosystem-diagram" aria-label="Ecossistema de produtos da 837code">
          <div className="ecosystem-path" aria-hidden="true" />
          <div className="ecosystem-center">
            <b>
              837<span>code</span>
            </b>
            <span>INDEPENDENT SOFTWARE COMPANY</span>
          </div>
          {products.map((product) => (
            <Link
              className={`ecosystem-node ecosystem-node--${product.theme}`}
              key={product.slug}
              to={`/produtos/${product.slug}`}
            >
              {product.theme === 'equilibra' ? <EquilibraLogo size={25} /> : <VyveLogo size={30} />}
              <span>{product.name}</span>
              <ArrowUpRight size={15} />
            </Link>
          ))}
          <div className="ecosystem-future">
            <Plus size={19} />
            <span>
              Novas possibilidades<small>O próximo capítulo está aberto.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
