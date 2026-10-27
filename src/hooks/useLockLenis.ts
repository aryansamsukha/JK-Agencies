import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export function useLockLenis(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (locked) lenis.stop();
    else lenis.start();
    return () => {
      lenis.start();
    };
  }, [locked, lenis]);
}
