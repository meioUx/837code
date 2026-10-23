import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation, contactEmail, contactEmailHref } from '../../data/company';
import { products } from '../../data/products';
import { Logo } from './Header';

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>
            Independent software company.
            <br />
            Building what's next.
          </p>
        </div>
        <div className="footer-column">
          <span className="eyebrow">Explore</span>
          {navigation.slice(1).map(({ label, id }) => (
            <Link key={id} to={`/#${id}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="eyebrow">Nossos produtos</span>
          {products.map((product) => (
            <Link key={product.slug} to={`/produtos/${product.slug}`}>
              {product.name}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="eyebrow">Novas possibilidades</span>
          <Link to="/#contato">
            Vamos conversar <ArrowUpRight size={14} />
          </Link>
          <a href={contactEmailHref}>{contactEmail}</a>
          <p>
            Produtos, ideias e<br />
            boas conexões.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} 837code.</span>
        <div>
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/termos">Termos de Uso</Link>
        </div>
        <a href="#topo">
          Voltar ao topo <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
