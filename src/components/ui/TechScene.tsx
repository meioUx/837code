import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import type { PointerEvent, ReactNode } from 'react';

export function TechScene({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const x = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 24 });
  const rotateX = useTransform(y, [0, 100], [5, -5]);
  const rotateY = useTransform(x, [0, 100], [-7, 7]);
  const lightX = useTransform(x, (value) => `${value}%`);
  const lightY = useTransform(y, (value) => `${value}%`);

  function handlePointer(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <div
      className="tech-scene"
      onPointerMove={handlePointer}
      onPointerLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
      }}
    >
      <motion.div
        className="tech-pointer-light"
        style={reducedMotion ? undefined : { left: lightX, top: lightY }}
        aria-hidden="true"
      />
      <svg className="tech-circuit" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <g className="tech-circuit-tracks">
          <path d="M0 120H100L160 60H290L350 120H600" />
          <path d="M40 600V470L110 400V260L180 190H600" />
          <path d="M600 470H490L430 530H240L160 450H0" />
          <path d="M480 0V110L420 170V350L510 440V600" />
        </g>
        <g className="tech-circuit-signals">
          <path d="M0 120H100L160 60H290L350 120H600" />
          <path d="M40 600V470L110 400V260L180 190H600" />
          <path d="M600 470H490L430 530H240L160 450H0" />
        </g>
        <g className="tech-circuit-nodes">
          <circle cx="160" cy="60" r="3" />
          <circle cx="110" cy="260" r="3" />
          <circle cx="430" cy="530" r="3" />
          <circle cx="480" cy="110" r="3" />
        </g>
      </svg>
      <motion.div
        className="tech-scene-depth"
        style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
