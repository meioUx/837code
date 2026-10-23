import {
  ArrowDown,
  ArrowUpRight,
  Activity,
  Apple,
  CalendarCheck,
  Check,
  Droplets,
  Heart,
  Layers3,
  Scale,
  ShieldCheck,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EquilibraLogo, EquilibraScreen } from '../components/products/EquilibraVisual';
import { EquilibraGallery } from '../components/products/EquilibraGallery';
import { Reveal } from '../components/ui/Reveal';
import { usePageMeta } from '../lib/usePageMeta';
import '../styles/equilibra-page.css';

const playUrl = 'https://play.google.com/store/apps/details?id=com.code837.equilibra';
const features = [
  [Utensils, 'Diário alimentar', 'Suas refeições e nutrientes, ao longo do dia.'],
  [Apple, 'Macronutrientes', 'Proteínas, carboidratos e gorduras com mais clareza.'],
  [Droplets, 'Hidratação', 'Cada copo faz parte da sua rotina.'],
  [Scale, 'Evolução do peso', 'Uma visão do seu percurso, além de um registro.'],
  [Activity, 'Atividade física', 'Um espaço para acompanhar seu movimento.'],
  [CalendarCheck, 'Diário de tratamento', 'Aplicações e histórico em um só lugar.'],
] as const;

function StoreLink() {
  return (
    <a
      className="eq-store"
      href={playUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Baixar Equilibra na Google Play (abre em nova aba)"
    >
      <img
        src="/images/equilibra/google-play-badge.png"
        alt="Disponível no Google Play"
        width="646"
        height="250"
      />
    </a>
  );
}

export default function EquilibraPage() {
  usePageMeta(
    'Equilibra — Seu progresso, no seu ritmo. | 837code',
    'Organize alimentação, hidratação, peso e registros do tratamento com GLP-1. Conheça o Equilibra para Android, desenvolvido pela 837code.',
    '/images/equilibra/01-inicio-painel-hoje.png',
  );
  return (
    <div className="equilibra-product-page">
      <section className="eq-hero container">
        <Reveal className="eq-hero-copy">
          <div className="eq-brand">
            <EquilibraLogo size={44} />
            <span>Equilibra</span>
          </div>
          <span className="eq-label">SEU PROGRESSO, NO SEU RITMO.</span>
          <h1>
            Sua jornada.
            <br />
            Seu ritmo.
            <br />
            <em>Sua evolução.</em>
          </h1>
          <p>
            Um jeito mais simples de acompanhar sua alimentação, organizar sua rotina e visualizar
            cada conquista ao longo do seu tratamento.
          </p>
          <div className="eq-actions">
            <StoreLink />
            <a className="eq-text-link" href="#conheca-equilibra">
              Conheça o aplicativo <ArrowDown size={16} />
            </a>
          </div>
          <span className="eq-small">Para Android · Desenvolvido pela 837code</span>
        </Reveal>
        <Reveal className="eq-hero-art" delay={0.15}>
          <div className="eq-orbit eq-orbit-one" aria-hidden="true" />
          <div className="eq-orbit eq-orbit-two" aria-hidden="true" />
          <div className="eq-hero-phone">
            <EquilibraScreen eager />
          </div>
          <div className="eq-float eq-float-food">
            <span className="eq-icon">
              <Apple size={20} />
            </span>
            <div>
              <small>Alimentação de hoje</small>
              <strong>
                Pequenos registros.
                <br />
                Mais clareza.
              </strong>
            </div>
            <Check size={16} />
          </div>
          <div className="eq-float eq-float-water">
            <Droplets size={24} />
            <div>
              <small>Hidratação</small>
              <strong>Um cuidado de cada vez.</strong>
            </div>
          </div>
          <div className="eq-float eq-float-progress">
            <Sparkles size={18} />
            <span>No seu próprio ritmo.</span>
          </div>
        </Reveal>
      </section>

      <section id="conheca-equilibra" className="eq-section container">
        <Reveal className="eq-intro">
          <span className="eq-label">TUDO O QUE IMPORTA, EM UM SÓ LUGAR</span>
          <h2>
            Sua rotina mais leve.
            <br />
            <em>Seu progresso mais claro.</em>
          </h2>
          <p>
            Acompanhar sua jornada envolve muito mais do que observar o número na balança. Reúna os
            registros do seu dia e encontre uma visão mais completa de você.
          </p>
        </Reveal>
        <div className="eq-feature-grid">
          {features.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="eq-feature">
                <span className="eq-icon">
                  <Icon size={24} />
                </span>
                <span className="eq-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="eq-section container eq-split">
        <Reveal className="eq-nutrition-art eq-panel">
          <span className="eq-art-label">ALIMENTAÇÃO & NUTRIÇÃO</span>
          <EquilibraScreen index={1} />
          <div className="eq-macro">
            <small>Proteína · exemplo da tela</small>
            <strong>
              82 <span>/ 110 g</span>
            </strong>
            <div className="eq-bar">
              <i />
            </div>
            <span>Um resumo fácil de visualizar.</span>
          </div>
        </Reveal>
        <Reveal className="eq-copy">
          <span className="eq-label">CADA REFEIÇÃO CONTA UMA PARTE</span>
          <h2>
            Conhecer sua alimentação muda a forma de <em>acompanhar sua rotina.</em>
          </h2>
          <p>
            Registre refeições, reutilize suas favoritas e acompanhe calorias e macronutrientes.
            Informações organizadas para comparar seus registros com as metas configuradas.
          </p>
          <ul className="eq-checks">
            {[
              'Registro e reutilização de refeições',
              'Calorias, proteínas, carboidratos e gorduras',
              'Metas nutricionais personalizáveis',
            ].map((item) => (
              <li key={item}>
                <Check size={17} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="eq-section container eq-split eq-treatment">
        <Reveal className="eq-copy">
          <span className="eq-label">ACOMPANHAMENTO GLP-1</span>
          <h2>
            Mais organização entre <em>uma aplicação e outra.</em>
          </h2>
          <p>
            Mantenha os registros relacionados ao tratamento em um único ambiente. Consulte o
            histórico e visualize os locais registrados no mapa corporal.
          </p>
          <div className="eq-note">
            <CalendarCheck size={25} />
            <div>
              <strong>Seu histórico, sempre à mão.</strong>
              <p>Organização para acompanhar o período e levar informações à consulta.</p>
            </div>
          </div>
          <p className="eq-small">
            Uma ferramenta de registro pessoal. Não prescreve tratamentos nem orienta ajustes de
            dose.
          </p>
        </Reveal>
        <Reveal className="eq-treatment-art eq-panel">
          <EquilibraScreen index={3} />
          <div className="eq-floating-label">
            <Layers3 size={20} /> Cada registro tem seu lugar.
          </div>
        </Reveal>
      </section>

      <section className="eq-section container eq-progress-section">
        <Reveal className="eq-intro">
          <span className="eq-label">ACOMPANHAR TAMBÉM É CUIDAR</span>
          <h2>
            Seu progresso é feito de <em>pequenas conquistas.</em>
          </h2>
          <p>
            Cada jornada tem seu próprio ritmo. Seu histórico de pesagens e os gráficos ajudam a
            visualizar o caminho, sem reduzir sua evolução a um único número.
          </p>
        </Reveal>
        <Reveal className="eq-progress-board">
          <div>
            <Scale size={30} />
            <h3>
              Um registro de cada vez.
              <br />
              Uma visão ao longo do tempo.
            </h3>
            <p>
              Histórico de pesagens, metas pessoais e registros da rotina. Mais contexto para
              compreender seu percurso.
            </p>
            <span className="eq-pill">Sua jornada não precisa ser uma linha reta.</span>
          </div>
          <EquilibraScreen index={4} />
          <EquilibraScreen index={5} />
        </Reveal>
      </section>

      <section className="eq-section container">
        <Reveal className="eq-intro">
          <span className="eq-label">ESPAÇO PARA O SEU DIA</span>
          <h2>
            Pequenos registros.
            <br />
            <em>Uma visão mais completa.</em>
          </h2>
        </Reveal>
        <div className="eq-habits">
          {[
            [Utensils, 'Alimentação', 'Refeições e nutrientes.'],
            [Droplets, 'Hidratação', 'Seu consumo diário de água.'],
            [Activity, 'Movimento', 'Atividades que fazem parte do dia.'],
            [Heart, 'Constância', 'Seu histórico, dia após dia.'],
          ].map(([Icon, title, text], i) => {
            const HabitIcon = Icon as typeof Heart;
            return (
              <Reveal key={String(title)} delay={i * 0.08}>
                <article>
                  <HabitIcon size={34} />
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="eq-section container eq-experience">
        <Reveal className="eq-intro">
          <span className="eq-label">DESENHADO EM TORNO DE VOCÊ</span>
          <h2>
            Tecnologia que <em>simplifica o cuidado.</em>
          </h2>
          <p>
            Encontre o que precisa, registre com facilidade e volte quando quiser. Uma interface que
            acompanha sua vida.
          </p>
        </Reveal>
        <div className="eq-pillars">
          {['Simplicidade', 'Clareza', 'Personalização', 'Continuidade'].map((label, i) => (
            <span key={label}>
              <small>0{i + 1}</small>
              {label}
            </span>
          ))}
        </div>
      </section>
      <EquilibraGallery />

      <section className="eq-section container eq-care">
        <Reveal>
          <span className="eq-icon">
            <ShieldCheck size={28} />
          </span>
          <span className="eq-label">SAÚDE + TECNOLOGIA</span>
          <h2>
            Informação para acompanhar.
            <br />
            <em>Autonomia para evoluir.</em>
          </h2>
          <p>
            O Equilibra reúne informações pessoais com clareza e praticidade. É uma ferramenta
            complementar ao acompanhamento médico e nutricional: não realiza diagnósticos, não
            prescreve tratamentos e não substitui profissionais de saúde.
          </p>
        </Reveal>
      </section>
      <section className="eq-maker container">
        <Reveal>
          <span className="eq-label">UM PRODUTO 837CODE</span>
          <h2>
            Tecnologia pensada <em>para a vida real.</em>
          </h2>
          <p>
            Somos uma empresa independente de software que cria seus próprios aplicativos e
            experiências digitais. O Equilibra traduz nossa visão: simplificar processos e tornar a
            tecnologia relevante para o cotidiano.
          </p>
          <Link className="eq-text-link" to="/#visao">
            Conheça a 837code <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>
      <section className="eq-download container">
        <Reveal>
          <EquilibraLogo size={70} />
          <span className="eq-label">EQUILIBRA</span>
          <h2>
            Sua evolução começa
            <br />
            <em>com um registro.</em>
          </h2>
          <p>Organize sua rotina, acompanhe sua alimentação e visualize seu progresso.</p>
          <StoreLink />
          <span className="eq-small">
            Download gratuito para Android · Recursos Premium no aplicativo
          </span>
          <div className="eq-legal">
            <Link to="/privacidade">Privacidade do site</Link>
            <Link to="/termos">Termos do site</Link>
            <a href={playUrl} target="_blank" rel="noopener noreferrer">
              Informações do aplicativo <ArrowUpRight size={13} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
