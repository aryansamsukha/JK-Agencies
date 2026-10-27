import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import type { Application } from '@splinetool/runtime';
import { useLenis } from 'lenis/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion, scrollWithLenis } from '../lib/motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface HeroProps {
  onOpenTalk: () => void;
}

function HeroHeadline() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current || prefersReducedMotion()) return;

    const lines = wrapRef.current.querySelectorAll('.hero-line');
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 110,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-[0.98] mb-6">
        <span className="hero-word block">
          <span className="hero-line block">LIGHT</span>
        </span>
        <span className="hero-word block">
          <span className="hero-line block font-sans font-light italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/70">
            BEYOND
          </span>
        </span>
        <span className="hero-word block">
          <span className="hero-line inline-block">
            EXPECTATION<span className="text-[#C1121F]">.</span>
          </span>
        </span>
      </h1>
    </div>
  );
}

export const Hero: React.FC<HeroProps> = ({ onOpenTalk }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandSubRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const idle = window.setTimeout(() => setLoadSpline(true), 700);
    return () => window.clearTimeout(idle);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        gsap.fromTo(
          brandSubRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        );
      }

      gsap.to(copyRef.current, {
        y: -24,
        opacity: 0.55,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
      });

      gsap.to(vignetteRef.current, {
        opacity: 0.88,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        onLeave: () => splineAppRef.current?.stop(),
        onEnter: () => splineAppRef.current?.play(),
        onEnterBack: () => splineAppRef.current?.play(),
        onLeaveBack: () => splineAppRef.current?.stop(),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    scrollWithLenis(lenis, '#transforms-space');
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#050505] text-[#F5F5F5] pt-28 pb-12"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {loadSpline && !splineError ? (
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              onLoad={(app) => {
                splineAppRef.current = app;
                setSplineLoaded(true);
              }}
              onError={() => setSplineError(true)}
              className="w-full h-full object-cover"
            />
          </Suspense>
        ) : null}

        {(!splineLoaded || splineError) && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#C1121F]/30 bg-radial-glow flex items-center justify-center">
                <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-tr from-[#C1121F]/20 via-[#FCE5C8]/10 to-transparent blur-3xl" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[#C1121F]/12 blur-3xl pointer-events-none z-0" />

      <div
        ref={vignetteRef}
        className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505] pointer-events-none z-10 opacity-75"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        <div
          ref={brandSubRef}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 shadow-2xl mb-4"
        >
          <img
            src="/logo.png"
            alt="JK Agencies Logo"
            className="h-5 sm:h-6 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          />
          <span className="text-white/40 font-mono text-xs font-bold">×</span>
          <img
            src="/nortek-logo-transparent.png"
            alt="NORTEK Lighting Logo"
            className="h-5 sm:h-6 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(193,18,31,0.6)]"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-white/90 font-bold">
            AUTHORIZED SHOWROOM & DISTRIBUTOR
          </span>
        </div>
      </div>

      <div
        ref={copyRef}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 w-full text-center my-auto py-6 will-change-transform"
      >
        <HeroHeadline />

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#888888] font-normal leading-relaxed tracking-wide mb-8 font-sans">
          Precision magnetic track systems, anti-glare recessed spotlights, and architectural facade illumination curated by JK Agencies, Jodhpur.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#brands"
            data-cursor="EXPLORE"
            onClick={(e) => {
              e.preventDefault();
              scrollWithLenis(lenis, '#brands', -40);
            }}
            className="group px-8 py-3.5 rounded-full bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs font-mono tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(193,18,31,0.4)] hover:shadow-[0_0_35px_rgba(224,27,46,0.6)]"
          >
            <span>EXPLORE NORTEK LIGHTING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenTalk}
            data-cursor="TALK"
            className="px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-xs font-mono tracking-wider uppercase transition-all duration-300 border border-white/10"
          >
            TALK TO LIGHTING EXPERT
          </button>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between text-xs font-mono text-[#888888] tracking-wider pt-6 border-t border-white/10">
        <div className="hidden sm:flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-white/80">JODHPUR DIGITAL SHOWROOM</span>
        </div>

        <button
          onClick={handleScrollDown}
          className="mx-auto sm:mx-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] tracking-wider uppercase">SCROLL TO EXPERIENCE</span>
          <ChevronDown className="w-4 h-4 text-[#C1121F] group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="hidden sm:block text-right">
          <span>EST. 1935 • RAJASTHAN</span>
        </div>
      </div>
    </section>
  );
};
