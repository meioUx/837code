import { motion, useReducedMotion } from 'motion/react';

export function AnimatedHeading({
  lines,
  accentLast = false,
}: {
  lines: string[];
  accentLast?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <>
      <span className="sr-only">{lines.join(' ')}</span>
      <motion.span
        className="animated-heading"
        aria-hidden="true"
        initial={reducedMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.13 }}
      >
        {lines.map((line, index) => (
          <span className="animated-heading-line" key={line}>
            <motion.span
              className={
                accentLast && index === lines.length - 1 ? 'animated-heading-accent' : undefined
              }
              variants={{
                hidden: { y: '105%', opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: reducedMotion ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </>
  );
}
