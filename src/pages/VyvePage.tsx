import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronRight,
  Crosshair,
  Flag,
  Gem,
  Layers3,
  Mail,
  ScanLine,
  Shield,
  Swords,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { VyveLogo } from '../components/products/VyveLogo';
import { VyveScreen } from '../components/products/VyveWorldVisual';
import { VyveArtwork } from '../components/products/VyveArtwork';
import { Reveal } from '../components/ui/Reveal';
import { AnimatedHeading } from '../components/ui/AnimatedHeading';
import { vyveDifficulties, vyveModalities, vyveSeasonFeatures, vyveSteps } from '../data/vyve';
import { contactEmail, contactEmailHref } from '../data/company';
import { usePageMeta } from '../lib/usePageMeta';
import '../styles/vyve-page.css';
import { VyveWordmark } from '../components/products/VyveWordmark';
import { VyveEmblemDisplay, VyveLeaguesSection } from '../components/products/VyveCollections';

function GameHero() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="vg-hero">
      <div className="vg-hero-art">
        <VyveArtwork region="athlete" decorative />
        <div className="vg-hero-art-shade" />
      </div>
      <div className="vg-hero-grain" aria-hidden="true" />
      <div className="container vg-hero-content">
        <Link className="vg-back" to="/#produtos">
          <ArrowLeft size={14} /> UM PRODUTO 837CODE
        </Link>
        <motion.div
          className="vg-brand"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <VyveLogo size={48} />
          <VyveWordmark />
          <span className="vg-brand-line" />
        </motion.div>
        <div className="vg-hero-kicker">
          <span className="vg-live-dot" /> FITNESS MEETS GAMING
        </div>
        <h1>
          <AnimatedHeading lines={['YOUR BODY.', 'YOUR GAME.']} accentLast />
        </h1>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          O mundo é sua arena. Transforme movimento em poder, complete desafios reais e conquiste
          seu lugar na competição.
        </motion.p>
        <div className="vg-hero-actions">
          <a className="vg-button" href="#jogo">
            Conheça o jogo <ArrowUpRight size={18} />
          </a>
          <a className="vg-secondary" href="#como-funciona">
            Como funciona <ArrowDown size={16} />
          </a>
        </div>
        <div className="vg-hero-footer">
          <span>MOVE. COMPETE. SURVIVE.</span>
          <span>
            <Crosshair size={13} /> O JOGO COMEÇA NO MUNDO REAL
          </span>
        </div>
      </div>
      <div className="vg-hero-hud" aria-hidden="true">
        <div>
          <Crosshair size={18} />
          <span>PLAYER / YOU</span>
          <i />
        </div>
        <strong>
          MOVE TO
          <br />
          <span>LEVEL UP.</span>
        </strong>
        <div className="vg-xp-track">
          <span>XP</span>
          <div>
            <i />
          </div>
          <Zap size={14} />
        </div>
      </div>
      <div className="vg-hero-marker" aria-hidden="true">
        <span />{' '}
        <small>
          REAL MOVEMENT
          <br />
          DIGITAL PROGRESSION
        </small>
      </div>
    </section>
  );
}

function GameIntroduction() {
  return (
    <section className="vg-section vg-intro" id="jogo">
      <div className="container vg-intro-grid">
        <Reveal>
          <span className="vg-eyebrow">01 / O MOVIMENTO VIRA JOGO</span>
          <h2>
            Não é só treino.
            <br />
            <em>É competição.</em>
          </h2>
          <p>
            No VYVE World, cada exercício faz parte de uma jornada. Desafios físicos se conectam a
            experiência, conquistas e novas possibilidades de progressão.
          </p>
          <p>
            A proposta é transformar a vontade de evoluir em vontade de jogar. Seu corpo participa.
            Suas escolhas contam. O próximo desafio está no mundo real.
          </p>
          <div className="vg-inline-tags">
            <span>
              <Zap size={15} /> EXPERIÊNCIA
            </span>
            <span>
              <Gem size={15} /> CONQUISTAS
            </span>
            <span>
              <Swords size={15} /> COMPETIÇÃO
            </span>
          </div>
        </Reveal>
        <Reveal className="vg-game-preview" delay={0.1}>
          <span className="vg-preview-label">DENTRO DO UNIVERSO VYVE WORLD</span>
          <div className="vg-preview-screens">
            <VyveScreen className="vg-preview-phone" />
            <VyveScreen screen="challenges" className="vg-preview-phone vg-preview-phone--second" />
          </div>
          <div className="vg-preview-foot">
            <span>DESAFIOS REAIS. CONQUISTAS REAIS.</span>
            <ArrowUpRight size={18} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GameProcess() {
  const icons = [Flag, Target, Zap, Swords, Shield];
  return (
    <section className="vg-section vg-process" id="como-funciona">
      <div className="container">
        <div className="vg-section-heading">
          <div>
            <span className="vg-eyebrow">02 / COMO FUNCIONA</span>
            <h2>
              Uma jornada.
              <br />
              <em>Cinco movimentos.</em>
            </h2>
          </div>
          <p>
            Da primeira escolha à próxima rodada: conheça o ciclo que conecta o jogador à
            competição.
          </p>
        </div>
        <ol className="vg-process-grid">
          {vyveSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li key={step.name}>
                <Reveal delay={index * 0.07}>
                  <div className="vg-step-top">
                    <span>0{index + 1}</span>
                    <Icon size={22} strokeWidth={1.3} />
                  </div>
                  <div className="vg-step-line" />
                  <h3>{step.name}</h3>
                  <p>{step.text}</p>
                  <span className="vg-step-tag">{step.tag}</span>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function MotionTechnology() {
  return (
    <section className="vg-section vg-motion">
      <div className="container vg-motion-grid">
        <Reveal className="vg-motion-visual">
          <VyveArtwork region="competitor" decorative />
          <div className="vg-motion-shade" />
          <div className="vg-motion-top">
            <ScanLine size={20} />
            <span>ANÁLISE DE MOVIMENTO</span>
            <span className="vg-outline-label">EM EXPLORAÇÃO</span>
          </div>
          <svg className="vg-pose-overlay" viewBox="0 0 500 570" fill="none" aria-hidden="true">
            <path d="M240 145L180 215L165 325M240 145L310 210L330 325M180 215L310 210M180 215L205 355L285 355L310 210M205 355L195 470M285 355L315 470" />
            <g>
              {[
                [240, 145],
                [180, 215],
                [165, 325],
                [310, 210],
                [330, 325],
                [205, 355],
                [285, 355],
                [195, 470],
                [315, 470],
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />
              ))}
            </g>
          </svg>
          <div className="vg-scan-line" aria-hidden="true" />
          <div className="vg-motion-bottom">
            <span>VISUALIZAÇÃO CONCEITUAL</span>
            <div>
              <span>MOVIMENTO</span>
              <ChevronRight size={13} />
              <span>DADOS</span>
              <ChevronRight size={13} />
              <span>JOGO</span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <span className="vg-eyebrow">03 / TECNOLOGIA EM MOVIMENTO</span>
          <h2>
            Seu movimento
            <br />
            <em>é o controle.</em>
          </h2>
          <p>
            O VYVE World explora tecnologias de análise de movimento para conectar a execução de
            exercícios à experiência de jogo.
          </p>
          <p>
            A proposta é que, em exercícios compatíveis, a câmera possa reconhecer movimentos e
            repetições. A contagem automática depende da implementação e validação de cada
            exercício; outras modalidades podem utilizar métodos diferentes de registro.
          </p>
          <div className="vg-camera-note">
            <Camera size={20} />
            <span>
              Reconhecimento por câmera
              <br />
              <small>Recurso em exploração, sem disponibilidade confirmada.</small>
            </span>
          </div>
          <div className="vg-modality-tags">
            {vyveModalities.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlayerProgression() {
  const [difficulty, setDifficulty] = useState(1);
  const selected = vyveDifficulties[difficulty];
  return (
    <section className="vg-section vg-progression">
      <div className="container">
        <div className="vg-section-heading">
          <div>
            <span className="vg-eyebrow">04 / PROGRESSÃO E EVOLUÇÃO</span>
            <h2>
              Cada movimento conta.
              <br />
              <em>Cada conquista importa.</em>
            </h2>
          </div>
          <p>
            XP, níveis, histórico e conquistas dão forma à jornada. O jogo é coletivo. A evolução
            também é sua.
          </p>
        </div>
        <div className="vg-progression-grid">
          <Reveal className="vg-difficulty-panel">
            <div className="vg-panel-label">
              <Layers3 size={17} />
              <span>ESCOLHA SEU RITMO</span>
              <small>PRÉVIA DOS MODOS</small>
            </div>
            <div className="vg-difficulty-tabs" role="tablist" aria-label="Modos de dificuldade">
              {vyveDifficulties.map((mode, index) => (
                <button
                  key={mode.name}
                  id={`mode-${index}`}
                  role="tab"
                  aria-selected={index === difficulty}
                  aria-controls="difficulty-description"
                  tabIndex={index === difficulty ? 0 : -1}
                  onClick={() => setDifficulty(index)}
                  onKeyDown={(event) => {
                    let next = index;
                    if (event.key === 'ArrowRight') next = (index + 1) % 4;
                    else if (event.key === 'ArrowLeft') next = (index + 3) % 4;
                    else if (event.key === 'Home') next = 0;
                    else if (event.key === 'End') next = 3;
                    else return;
                    event.preventDefault();
                    setDifficulty(next);
                    document.getElementById(`mode-${next}`)?.focus();
                  }}
                >
                  {mode.name}
                </button>
              ))}
            </div>
            <div
              className="vg-difficulty-description"
              id="difficulty-description"
              role="tabpanel"
              aria-labelledby={`mode-${difficulty}`}
            >
              <span className="vg-difficulty-kicker">{selected.label}</span>
              <h3>
                {selected.name}
                <ArrowUpRight size={34} />
              </h3>
              <div className="vg-intensity" aria-label={`Intensidade ${selected.intensity} de 4`}>
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className={i < selected.intensity ? 'is-active' : ''} />
                ))}
              </div>
              <p>{selected.description}</p>
            </div>
            <span className="vg-difficulty-footer">
              Sua escolha pode acompanhar sua evolução. A proposta também considera o desempenho
              recente para ajustar gradualmente determinados desafios.
            </span>
          </Reveal>
          <Reveal className="vg-achievements-panel" delay={0.1}>
            <div className="vg-panel-label">
              <Trophy size={17} />
              <span>CONQUISTE SUA HISTÓRIA</span>
            </div>
            <VyveEmblemDisplay compact />
            <div className="vg-achievement-copy">
              <h3>
                Mais do que um badge.
                <br />
                <span>Uma parte da sua jornada.</span>
              </h3>
              <p>
                Desafios progressivos, conquistas e dificuldades diferentes fazem parte da proposta
                de evolução do jogador.
              </p>
            </div>
            <div className="vg-progression-tags">
              <span>
                <Check size={13} /> XP e níveis
              </span>
              <span>
                <Check size={13} /> Histórico
              </span>
              <span>
                <Check size={13} /> Evolução individual
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CompetitiveSeasons() {
  return (
    <section className="vg-section vg-seasons">
      <div className="container vg-season-grid">
        <Reveal>
          <span className="vg-eyebrow">05 / TEMPORADAS E COMPETIÇÕES</span>
          <h2>
            Entre na arena.
            <br />
            <em>Permaneça no jogo.</em>
          </h2>
          <p>
            Temporadas são a proposta de experiências competitivas organizadas em desafios e
            rodadas. Cada uma pode trazer sua própria identidade, seu calendário e novas formas de
            avançar.
          </p>
          <div className="vg-season-features">
            {vyveSeasonFeatures.map((feature) => (
              <span key={feature}>
                <PlusMark />
                {feature}
              </span>
            ))}
          </div>
          <div className="vg-season-note">
            <Flag size={17} />
            <p>
              Kits físicos, inscrições especiais e medalhas de conclusão poderão fazer parte de
              campanhas específicas, conforme o formato de cada evento.
            </p>
          </div>
        </Reveal>
        <Reveal className="vg-season-art" delay={0.1}>
          <div className="vg-season-outline" aria-hidden="true" />
          <span className="vg-season-art-label">THE NEXT ROUND IS YOURS.</span>
          <VyveArtwork region="ranking" className="vg-ranking-screen" />
          <span className="vg-ranking-caption">TELA DO MATERIAL DE APRESENTAÇÃO</span>
          <div className="vg-season-badge" aria-hidden="true">
            <img
              src="/images/vyve/emblem-trophy.png"
              alt=""
              aria-hidden="true"
              width={70}
              height={67}
              loading="lazy"
            />
            <span>
              COMPETE.
              <br />
              <b>EVOLVE.</b>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlusMark() {
  return (
    <span className="vg-plus-mark" aria-hidden="true">
      +
    </span>
  );
}

function PlayerCommunity() {
  return (
    <section className="vg-community">
      <div className="vg-community-art">
        <VyveArtwork region="outdoors" decorative />
      </div>
      <div className="vg-community-shade" />
      <div className="container vg-community-content">
        <span className="vg-eyebrow">07 / MAIS QUE UM JOGO. UM ESTILO DE VIDA.</span>
        <Reveal>
          <h2>
            FIND YOUR PEOPLE.
            <br />
            <em>FIND YOUR CHALLENGE.</em>
          </h2>
        </Reveal>
        <p>
          Superação individual. Identidade. Pertencimento. O VYVE World foi pensado para quem busca
          mais do que uma rotina de exercícios: uma comunidade que compartilha desafios, conquistas
          e vontade de evoluir.
        </p>
        <div className="vg-community-signature">
          <Activity size={18} />
          <span>MAIS MOVIMENTO. MAIS POSSIBILIDADES.</span>
        </div>
      </div>
    </section>
  );
}

function GameClosing() {
  return (
    <section className="vg-closing">
      <div className="container">
        <div className="vg-closing-brand">
          <VyveLogo size={62} />
          <VyveWordmark />
          <span>BY 837CODE</span>
        </div>
        <Reveal>
          <h2>
            THE GAME
            <br />
            <em>IS REAL.</em>
          </h2>
        </Reveal>
        <p>
          O desafio não acontece apenas na tela.
          <br />
          Acontece a cada movimento.
        </p>
        <a
          className="vg-button"
          href={`${contactEmailHref}?subject=${encodeURIComponent('Quero conhecer o VYVE World')}`}
        >
          Descubra o VYVE World <ArrowUpRight size={18} />
        </a>
        <a className="vg-closing-email" href={contactEmailHref}>
          <Mail size={13} />
          {contactEmail}
        </a>
        <div className="vg-availability">
          <span>VISÃO DO PRODUTO</span>
          <p>
            Esta página apresenta a proposta e o material visual do VYVE World. A disponibilidade
            das funcionalidades, as regras das temporadas e os links de acesso serão informados nos
            canais oficiais.
          </p>
        </div>
        <Link className="vg-return" to="/#produtos">
          Explore os produtos da 837code <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export default function VyvePage() {
  usePageMeta(
    'VYVE World — Your body. Your game. | 837code',
    'Conheça o VYVE World: a proposta de jogo fitness que conecta desafios físicos, XP, evolução e competição. Um produto 837code.',
    '/images/vyve-world-logo.png',
  );
  return (
    <div className="vyve-game-page">
      <GameHero />
      <GameIntroduction />
      <GameProcess />
      <MotionTechnology />
      <PlayerProgression />
      <CompetitiveSeasons />
      <VyveLeaguesSection />
      <PlayerCommunity />
      <GameClosing />
    </div>
  );
}
