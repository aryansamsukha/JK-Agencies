import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollWithLenis(
  lenis: { scrollTo: (target: string | HTMLElement | number, options?: Record<string, unknown>) => void } | undefined,
  target: string | HTMLElement | number,
  offset = 0,
) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.35 });
    return;
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
    return;
  }

  const el = typeof target === 'string' ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: 'smooth' });
}
