import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { usePageMeta } from '../lib/usePageMeta';
import { VyveWorldVisual } from '../components/products/VyveWorldVisual';
import { EquilibraLogo, EquilibraVisual } from '../components/products/EquilibraVisual';
import { EquilibraGallery } from '../components/products/EquilibraGallery';
import { VyveLogo } from '../components/products/VyveLogo';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const nextProduct = products.find((item) => item.slug !== slug);

  usePageMeta(
    product ? `${product.name} | Um produto 837code` : 'Produto não encontrado | 837code',
    product?.description ?? 'Explore os produtos digitais da 837code.',
  );

  if (!product) {
    return (
      <section className="container empty-page">
        <h1>Produto não encontrado.</h1>
        <Link className="button" to="/#produtos">
          Explorar produtos
        </Link>
      </section>
    );
  }

  return (
    <div className={`product-detail product-detail--${product.theme}`}>
      <section className="container detail-intro">
        <Link className="back-link" to="/#produtos">
          <ArrowLeft size={15} /> Todos os produtos
        </Link>
        <div className="detail-grid">
          <div className="detail-copy">
            <span className="eyebrow">Um produto 837code / {product.category}</span>
            <div className="detail-brand">
              {product.theme === 'equilibra' ? <EquilibraLogo size={40} /> : <VyveLogo size={48} />}
              <span>{product.name}</span>
            </div>
            <h1>{product.headline}</h1>
            <p>{product.description}</p>
            <div className="detail-actions">
              <a className="button" href="#experiencia">
                Explore a experiência <ArrowRight size={17} />
              </a>
              {product.websiteUrl && (
                <a className="text-link" href={product.websiteUrl} target="_blank" rel="noreferrer">
                  Site oficial <ArrowUpRight size={16} />
                </a>
              )}
              {product.googlePlayUrl && (
                <a
                  className="text-link"
                  href={product.googlePlayUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            <span className="detail-status">
              {product.status ?? 'Disponibilidade e links oficiais a confirmar.'}
            </span>
          </div>
          <div className={`detail-product-visual detail-product-visual--${product.theme}`}>
            {product.theme === 'vyve' ? <VyveWorldVisual /> : <EquilibraVisual />}
          </div>
        </div>
      </section>
      <section className="section detail-experience" id="experiencia">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A experiência</span>
              <h2>
                O dia a dia.
                <br />
                <span>Uma nova perspectiva.</span>
              </h2>
            </div>
            <p>{product.shortDescription}</p>
          </div>
          <div className="detail-features">
            {product.features.map((feature, index) => (
              <article key={feature.title}>
                <span>0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {product.theme === 'equilibra' && <EquilibraGallery />}
      {product.theme === 'vyve' && (
        <section className="section container vyve-brand-gallery">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Dentro do VYVE World</span>
              <h2>
                Movimento. Progresso.
                <br />
                <span>Conquistas.</span>
              </h2>
            </div>
            <p>
              Explore o universo visual do produto: telas, desafios, trilhas de evolução e
              conquistas.
            </p>
          </div>
          <figure>
            <img
              src="/images/vyve-world-brand-board.png"
              alt="Apresentação visual do VYVE World, com telas de desafios, evolução, trilhas, liga semanal, medalhas e modos de treino."
              width={1151}
              height={1366}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              VYVE World — movimento que te leva mais longe.{' '}
              <a href="/images/vyve-world-brand-board.png" target="_blank" rel="noreferrer">
                Ver imagem completa <ArrowUpRight size={14} />
              </a>
            </figcaption>
          </figure>
        </section>
      )}
      <section className="container detail-contact">
        <div>
          <span className="eyebrow">Vamos conversar</span>
          <h2>Mais sobre o {product.name}?</h2>
          <p>Conecte-se com a 837code para informações e oportunidades de parceria.</p>
        </div>
        <Link className="button" to="/#contato">
          Entre em contato <ArrowUpRight size={18} />
        </Link>
      </section>
      {nextProduct && (
        <Link className="next-product" to={`/produtos/${nextProduct.slug}`}>
          <div className="container">
            <span>
              <small>CONTINUE EXPLORANDO</small>
              {nextProduct.name}
            </span>
            <ArrowRight size={35} />
          </div>
        </Link>
      )}
    </div>
  );
}
