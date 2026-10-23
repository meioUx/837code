import { lazy, Suspense, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ScrollProgress } from '../components/ui/ScrollProgress';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const VyvePage = lazy(() => import('../pages/VyvePage'));
const EquilibraPage = lazy(() => import('../pages/EquilibraPage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // A lazy route may finish after the navigation effect runs.
    let observer: MutationObserver | undefined;
    const scrollToSection = () => {
      const section = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!section) return false;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      section.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' });
      return true;
    };

    if (!scrollToSection()) {
      observer = new MutationObserver(() => {
        if (scrollToSection()) observer?.disconnect();
      });
      observer.observe(document.getElementById('root')!, { childList: true, subtree: true });
    }

    return () => observer?.disconnect();
  }, [pathname, hash, key]);

  return null;
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="topo" />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <ScrollToLocation />
      <Header />
      <ScrollProgress />
      <main id="conteudo">
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              Carregando página…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos/vyve" element={<VyvePage />} />
            <Route path="/produtos/equilibra" element={<EquilibraPage />} />
            <Route path="/produtos/:slug" element={<ProductPage />} />
            <Route path="/privacidade" element={<LegalPage kind="privacy" />} />
            <Route path="/termos" element={<LegalPage kind="terms" />} />
            <Route
              path="*"
              element={
                <section className="container empty-page">
                  <span className="eyebrow">404 / Novo caminho</span>
                  <h1>Página não encontrada.</h1>
                  <Link className="button" to="/">
                    Voltar ao início
                  </Link>
                </section>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
