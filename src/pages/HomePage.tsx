import { usePageMeta } from '../lib/usePageMeta';
import { ProductShowcase } from '../components/products/ProductShowcase';
import { Hero } from '../components/home/Hero';
import { Philosophy } from '../components/home/Philosophy';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { Vision } from '../components/home/Vision';
import { About } from '../components/home/About';
import { Ecosystem } from '../components/home/Ecosystem';
import { ContactSection } from '../components/home/ContactSection';
import '../styles/home.css';

export default function HomePage() {
  usePageMeta(
    '837code — Criamos o que vem a seguir.',
    'Empresa independente de software. Conheça os produtos, a visão e o universo da 837code.',
  );

  return (
    <>
      <Hero />
      <ProductShowcase />
      <Philosophy />
      <ProcessTimeline />
      <Vision />
      <About />
      <Ecosystem />
      <ContactSection />
    </>
  );
}
