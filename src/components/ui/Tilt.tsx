import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import type { PointerEvent, ReactNode } from 'react';

type TiltProps = { children: ReactNode; className?: string };

export function Tilt({ children, className = '' }: TiltProps) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 24 });
  const [lightX, lightY] = [useMotionValue('50%'), useMotionValue('50%')];

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 5);
    y.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
    lightX.set(`${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    lightY.set(`${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  }

  return (
    <motion.div
      className={`tilt-surface ${className}`}
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
      {!reducedMotion && (
        <motion.div
          className="product-hover-light"
          style={{ left: lightX, top: lightY }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
