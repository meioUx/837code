import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactSubjects, contactEmail, contactEmailHref } from '../data/company';
import { contactEndpoint, sendContactMessage } from '../lib/contact';
import '../styles/forms.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const sending = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;

    sending.current = true;
    setStatus('sending');
    setFeedback('Enviando sua mensagem…');

    try {
      await sendContactMessage({
        name: String(data.get('name') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        subject: String(data.get('subject') ?? ''),
        message: String(data.get('message') ?? '').trim(),
      });
      form.reset();
      setStatus('success');
      setFeedback('Mensagem recebida. Obrigado por se conectar com a 837code.');
    } catch (error) {
      setStatus('error');
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Não foi possível enviar. Tente novamente mais tarde.',
      );
    } finally {
      sending.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
      <div className="form-row">
        <label>
          Nome
          <input name="name" autoComplete="name" placeholder="Seu nome" required maxLength={120} />
        </label>
        <label>
          E-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Seu endereço de e-mail"
            required
            maxLength={200}
          />
        </label>
      </div>
      <label>
        Assunto
        <select name="subject" defaultValue="" required>
          <option disabled value="">
            Sobre o que vamos conversar?
          </option>
          {contactSubjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <label>
        Mensagem
        <textarea
          name="message"
          rows={4}
          minLength={10}
          maxLength={5000}
          placeholder="Conte um pouco sobre o que você tem em mente."
          required
        />
      </label>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {!contactEndpoint && (
        <p className="form-availability">
          O envio pelo formulário está em preparação. Fale com a gente por{' '}
          <a href={contactEmailHref}>{contactEmail}</a>.
        </p>
      )}
      <div className="form-footer">
        <p>
          Seus dados serão usados para responder ao contato.
          <br />
          <Link to="/privacidade">Saiba mais sobre privacidade.</Link>
        </p>
        <button className="button" disabled={status === 'sending'} type="submit">
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          {status === 'sending' ? (
            <LoaderCircle className="spin" size={17} />
          ) : (
            <ArrowUpRight size={17} />
          )}
        </button>
      </div>
      <p className={`form-feedback form-feedback--${status}`} role="status" aria-live="polite">
        {feedback}
      </p>
    </form>
  );
}
