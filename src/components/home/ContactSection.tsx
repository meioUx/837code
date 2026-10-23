import { ArrowUpRight } from 'lucide-react';
import { ContactForm } from '../ContactForm';
import { contactEmail, contactEmailHref } from '../../data/company';

export function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">
            <i className="status-dot" /> Vamos nos conectar
          </span>
          <h2>
            Boas conexões
            <br />
            criam novas
            <br />
            <span>possibilidades.</span>
          </h2>
          <p>
            Quer conhecer melhor a 837code, conversar sobre nossos produtos ou explorar
            oportunidades de parceria? Entre em contato.
          </p>
          <a className="contact-email" href={contactEmailHref}>
            {contactEmail} <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <ArrowUpRight className="contact-arrow" size={70} strokeWidth={0.8} aria-hidden="true" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
