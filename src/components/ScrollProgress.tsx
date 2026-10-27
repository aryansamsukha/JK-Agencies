import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          end: 'max',
          scrub: 0.25,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[2px] w-full origin-left"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-[#C1121F] shadow-[0_0_12px_rgba(193,18,31,0.8)]"
      />
    </div>
  );
}
