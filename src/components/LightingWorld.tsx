import React, { useEffect, useRef, useState } from 'react';
import { LIGHTING_CATEGORIES } from '../data/categories';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightingWorldProps {
  onOpenTalk: () => void;
}

export const LightingWorld: React.FC<LightingWorldProps> = ({ onOpenTalk }) => {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth - 2;
    setCanPrev(rail.scrollLeft > 2);
    setCanNext(rail.scrollLeft < max);
  };

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>('[data-light-card]');
    const amount = (card?.offsetWidth ?? rail.clientWidth * 0.7) + 32;
    rail.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateArrows();
    rail.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);

    const onWheel = (e: WheelEvent) => {
      const mostlyVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      const delta = mostlyVertical ? e.deltaY : e.deltaX;
      if (delta === 0) return;

      const max = rail.scrollWidth - rail.clientWidth;
      const atStart = rail.scrollLeft <= 0 && delta < 0;
      const atEnd = rail.scrollLeft >= max - 1 && delta > 0;
      if (atStart || atEnd || max <= 0) return;

      e.preventDefault();
      rail.scrollLeft += delta;
    };

    rail.addEventListener('wheel', onWheel, { passive: false });

    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      dragging = false;
      rail.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerId !== e.pointerId) return;
      const dx = e.clientX - startX;
      if (!dragging && Math.abs(dx) > 6) dragging = true;
      if (!dragging) return;
      e.preventDefault();
      rail.scrollLeft = startScroll - dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (pointerId !== e.pointerId) return;
      pointerId = null;
      if (dragging) {
        rail.dataset.dragged = 'true';
        window.setTimeout(() => {
          delete rail.dataset.dragged;
        }, 120);
      }
    };

    rail.addEventListener('pointerdown', onPointerDown);
    rail.addEventListener('pointermove', onPointerMove);
    rail.addEventListener('pointerup', onPointerUp);
    rail.addEventListener('pointercancel', onPointerUp);

    return () => {
      rail.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
      rail.removeEventListener('wheel', onWheel);
      rail.removeEventListener('pointerdown', onPointerDown);
      rail.removeEventListener('pointermove', onPointerMove);
      rail.removeEventListener('pointerup', onPointerUp);
      rail.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <section id="lighting" className="relative bg-[#0B0B0B] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10" data-reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
                LIGHTING CATEGORIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
              EXPLORE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-white to-[#A4A4A4]">
                WORLD OF LIGHT.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <p className="text-sm text-[#A4A4A4] max-w-md leading-relaxed">
              Nortek’s product families as shown on nortekled.com — LED lights, indoor, outdoor, PVC tapes, and wires. Drag, scroll, or use the arrows.
            </p>

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                data-cursor="PREV"
                aria-label="Previous lighting category"
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#C1121F] hover:border-[#C1121F] flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/[0.04] disabled:hover:border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                data-cursor="NEXT"
                aria-label="Next lighting category"
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#C1121F] hover:border-[#C1121F] flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/[0.04] disabled:hover:border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        data-lenis-prevent
        className="no-scrollbar flex gap-6 md:gap-8 overflow-x-auto overflow-y-hidden px-6 md:px-12 pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
      >
        {LIGHTING_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.id}
            data-light-card
            onClick={() => {
              if (railRef.current?.dataset.dragged === 'true') return;
              onOpenTalk();
            }}
            data-cursor="EXPLORE"
            className="group relative rounded-2xl overflow-hidden bg-[#111111] transition-all duration-700 cursor-pointer h-[420px] flex flex-col justify-between p-8 shadow-xl hover:shadow-[0_0_30px_rgba(193,18,31,0.25)] w-[min(84vw,420px)] sm:w-[min(70vw,480px)] lg:w-[min(38vw,520px)] flex-shrink-0 snap-start"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono tracking-[0.25em] text-[#C1121F] font-bold">
                  0{idx + 1} // {cat.count}
                </span>
                {cat.badge ? (
                  <span className="px-2.5 py-1 rounded-full bg-[#C1121F] text-[9px] font-mono tracking-widest uppercase text-white">
                    {cat.badge}
                  </span>
                ) : null}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C1121F] transition-all duration-500 shadow-md shrink-0">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-white tracking-widest uppercase mb-3 group-hover:text-[#F5F5F5] transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-[#A4A4A4] leading-relaxed mb-4 line-clamp-2">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[9px] font-medium tracking-wider text-[#F5F5F5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
