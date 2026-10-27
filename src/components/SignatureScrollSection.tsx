import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/motion';

export const SignatureScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(copyRef.current, {
        opacity: 0,
        y: 32,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.fromTo(
        imageRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transforms-space"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-[#F5F5F5] overflow-hidden py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
          alt="Architectural space defined by light"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/35 to-[#050505]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[240px] rounded-full bg-[#FCE5C8]/10 blur-3xl pointer-events-none z-0" />

      <div
        ref={copyRef}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center w-full"
      >
        <div className="inline-block text-xs font-mono tracking-wider text-[#C1121F] uppercase font-bold mb-4">
          // ARCHITECTURAL PHILOSOPHY
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[1.04] mb-3">
          LIGHT DOESN'T <br />
          <span className="text-[#888888] font-sans font-light italic">JUST ILLUMINATE</span>
          <br />
          A SPACE.
        </h2>

        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-tight mt-2">
          IT DEFINES IT<span className="text-[#C1121F]">.</span>
        </h2>

        <p className="mt-8 max-w-lg mx-auto text-xs sm:text-sm text-[#888888] font-mono tracking-wider uppercase">
          PRECISION OPTICS • VOLUMETRIC SHADOWS • WARM ATMOSPHERES
        </p>
      </div>
    </section>
  );
};
