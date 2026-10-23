import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductPreview } from '../products/ProductPreview';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TechScene } from '../ui/TechScene';

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const intro = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="home-hero" id="inicio" ref={section}>
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        >
          <motion.span className="eyebrow" variants={intro} transition={{ duration: 0.6 }}>
            <i className="status-dot" /> Independent software company
          </motion.span>
          <h1>
            <span className="hero-title-line">
              <motion.span
                initial={reducedMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Criamos o que
              </motion.span>
            </span>
            <span className="hero-title-line">
              <motion.span
                initial={reducedMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                vem <span className="hero-title-accent">a seguir.</span>
                <span className="hero-period">✳</span>
              </motion.span>
            </span>
          </h1>
          <motion.p variants={intro} transition={{ duration: 0.7 }}>
            Transformamos ideias em aplicativos, plataformas e experiências digitais que conectam
            tecnologia, design e novas possibilidades.
          </motion.p>
          <motion.div className="hero-actions" variants={intro} transition={{ duration: 0.7 }}>
            <Link className="button" to="/#produtos">
              Conheça nossos produtos <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" to="/#sobre">
              Sobre a 837code <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div className="hero-caption" variants={intro} transition={{ duration: 0.7 }}>
            <span /> Ideias próprias. Novas perspectivas.
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-parallax"
          style={{ y: reducedMotion ? 0 : parallax }}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.35 }}
        >
          <TechScene>
            <div className="hero-composition">
              <div className="composition-grid" aria-hidden="true" />
              <div className="composition-orbit" aria-hidden="true" />
              <span className="composition-coordinate coordinate-top">837 / DIGITAL PRODUCTS</span>
              <div className="hero-phone">
                <ProductPreview theme="equilibra" />
              </div>
              <div className="hero-front-phone">
                <ProductPreview theme="vyve" />
              </div>
              <span className="composition-cross" aria-hidden="true">
                +
              </span>
              <span className="composition-coordinate coordinate-bottom">
                PRODUTOS DO UNIVERSO 837CODE
              </span>
            </div>
          </TechScene>
        </motion.div>
      </div>
      <div className="container hero-baseline">
        <span>WE BUILD WHAT'S NEXT.</span>
        <Link to="/#produtos">
          Explore o próximo <ArrowDown size={15} />
        </Link>
      </div>
    </section>
  );
}
