import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/company';

export function Logo() {
  return (
    <Link to="/" className="brand" aria-label="837code — início">
      <img src="/images/837code-logo.png" alt="837code" width="1983" height="800" />
    </Link>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav
          id="site-navigation"
          className={isOpen ? 'is-open' : ''}
          aria-label="Navegação principal"
        >
          {navigation.map(({ label, id }) => (
            <Link to={`/#${id}`} key={id} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" to="/#produtos">
          Explorar produtos <ArrowUpRight size={15} />
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
