import { useEffect } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';

export function RevealOnScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');

      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            overwrite: 'auto',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });

      const media = gsap.utils.toArray<HTMLElement>('[data-reveal-media]');
      media.forEach((el) => {
        const mediaEl = el.querySelector('img, video') as HTMLElement | null;
        if (!mediaEl) return;

        gsap.fromTo(
          mediaEl,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        );
      });
    });

    const safety = window.setTimeout(() => {
      gsap.to('[data-reveal]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        overwrite: 'auto',
      });
    }, 1800);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  return null;
}
