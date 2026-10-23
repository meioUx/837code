import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { equilibraScreens } from '../../data/equilibra';
import './equilibra.css';

export function EquilibraGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;
  const selected = active === null ? null : equilibraScreens[active];

  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function navigate(direction: number) {
    setActive((index) =>
      index === null
        ? null
        : (index + direction + equilibraScreens.length) % equilibraScreens.length,
    );
  }

  function goToSlide(index: number) {
    const rail = track.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({
      left: card.offsetLeft - (rail.firstElementChild as HTMLElement).offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }

  return (
    <section className="section container equilibra-gallery">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Por dentro do Equilibra</span>
          <h2>
            Uma rotina conectada.
            <br />
            <span>Cada detalhe no seu lugar.</span>
          </h2>
        </div>
        <p>
          Explore as telas do aplicativo: alimentação, aplicações, evolução, diário e informações
          para a consulta.
        </p>
      </div>
      <div
        className="equilibra-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Telas do Equilibra"
      >
        <div className="equilibra-carousel-controls">
          <span>Deslize para explorar as telas</span>
          <div>
            <button
              onClick={() => goToSlide(slide - 1)}
              disabled={slide === 0}
              aria-label="Imagem anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => goToSlide(slide + 1)}
              disabled={slide === equilibraScreens.length - 1}
              aria-label="Próxima imagem"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div
          className="equilibra-carousel-track"
          ref={track}
          onScroll={() => {
            const rail = track.current;
            if (!rail) return;
            const first = rail.firstElementChild as HTMLElement;
            let nearest = 0;
            let distance = Infinity;
            Array.from(rail.children).forEach((child, index) => {
              const delta = Math.abs(
                (child as HTMLElement).offsetLeft - first.offsetLeft - rail.scrollLeft,
              );
              if (delta < distance) {
                nearest = index;
                distance = delta;
              }
            });
            setSlide(nearest);
          }}
        >
          {equilibraScreens.map((screen, index) => (
            <div
              className="equilibra-carousel-slide"
              key={screen.file}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${equilibraScreens.length}`}
            >
              <button
                className="equilibra-gallery-card"
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setActive(index);
                }}
                aria-label={`Ampliar tela: ${screen.category}`}
              >
                <div className="equilibra-gallery-image">
                  <img
                    src={screen.src}
                    alt={`Tela de ${screen.category} do Equilibra`}
                    width={1080}
                    height={1920}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <Maximize2 size={18} />
                  </span>
                </div>
                <span className="equilibra-gallery-category">
                  {String(index + 1).padStart(2, '0')} / {screen.category}
                </span>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </button>
            </div>
          ))}
        </div>
        <div className="equilibra-carousel-dots" aria-label="Escolher tela">
          {equilibraScreens.map((screen, index) => (
            <button
              key={screen.file}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para ${screen.category}`}
              aria-current={slide === index ? 'true' : undefined}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <dialog
          ref={dialog}
          className="equilibra-lightbox"
          aria-labelledby="equilibra-screen-title"
          onCancel={() => setActive(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              navigate(1);
            }
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              navigate(-1);
            }
          }}
        >
          <button
            className="equilibra-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Fechar imagem"
            autoFocus
          >
            <X size={22} />
          </button>
          <img
            className="equilibra-lightbox-image"
            src={selected.src}
            alt={`Equilibra — ${selected.category}`}
            width={1080}
            height={1920}
          />
          <div className="equilibra-lightbox-controls">
            <button onClick={() => navigate(-1)} aria-label="Tela anterior">
              <ArrowLeft size={20} />
            </button>
            <div aria-live="polite">
              <h3 id="equilibra-screen-title">{selected.category}</h3>
              <span>
                {active! + 1} de {equilibraScreens.length}
              </span>
            </div>
            <button onClick={() => navigate(1)} aria-label="Próxima tela">
              <ArrowRight size={20} />
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
