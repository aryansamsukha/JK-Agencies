import { useEffect, useRef, type ReactNode } from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const onScroll = () => ScrollTrigger.update();
    let attached: { off: (e: 'scroll', cb: () => void) => void } | undefined;

    const connect = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) return false;
      attached = lenis;
      lenis.on('scroll', onScroll);
      ScrollTrigger.refresh();
      return true;
    };

    const raf = window.requestAnimationFrame(() => {
      if (!connect()) {
        window.setTimeout(connect, 50);
      }
    });

    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    document.fonts?.ready?.then(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
      attached?.off('scroll', onScroll);
      gsap.ticker.lagSmoothing(500);
    };
  }, [reduced]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: true,
        lerp: reduced ? 1 : 0.18,
        smoothWheel: !reduced,
        syncTouch: false,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
