import React, { useState } from 'react';
import { Navigation, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { LIGHT_SCENES } from '../data/lightScenes';
import { scrollWithLenis } from '../lib/motion';

interface ShowroomExperienceProps {
  onOpenTalk: () => void;
}

export const ShowroomExperience: React.FC<ShowroomExperienceProps> = ({ onOpenTalk }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scene = LIGHT_SCENES[activeIndex];
  const lenis = useLenis();

  return (
    <section id="showroom" className="relative py-32 bg-[#050505] text-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
                HOW LIGHT SHOULD LOOK
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              EXPERIENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/40">
                THE LIGHT.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-md">
            Four real rooms. Each photo shows a different job light can do — then the Nortek fittings that create it. Walk the same scenes in our Jodhpur showroom.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {LIGHT_SCENES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative overflow-hidden rounded-2xl text-left border transition-all duration-500 ${
                  isActive
                    ? 'border-[#C1121F] shadow-[0_0_24px_rgba(193,18,31,0.35)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="relative h-28 sm:h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[9px] font-mono tracking-[0.2em] text-[#C1121F] mb-1">
                      {item.number}
                    </div>
                    <div className="text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white">
                      {item.label}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden bg-[#111111]">
            <img
              key={scene.id}
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-xl rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 px-5 py-4">
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#C1121F] font-bold uppercase mb-1">
                  {scene.number} // {scene.label}
                </div>
                <p className="text-sm sm:text-base text-white font-medium leading-snug">
                  {scene.caption}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold mb-3">
                What this light does
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-4">
                {scene.title}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-8">
                {scene.meaning}
              </p>

              <div className="text-[10px] font-mono tracking-[0.25em] text-[#888888] uppercase mb-3">
                Fittings used in this look
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {scene.fittings.map((fitting) => (
                  <div
                    key={fitting.name}
                    className="rounded-xl overflow-hidden bg-white border border-white/10"
                  >
                    <div className="h-24 bg-white flex items-center justify-center p-2">
                      <img
                        src={fitting.image}
                        alt={fitting.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="px-2.5 py-2 bg-[#0A0A0A] border-t border-white/10">
                      <div className="text-[10px] font-bold tracking-wide text-white uppercase leading-tight">
                        {fitting.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={onOpenTalk}
                data-cursor="VISIT"
                className="w-full py-4 rounded-xl bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(193,18,31,0.35)]"
              >
                <Navigation className="w-4 h-4" />
                <span>Visit Jodhpur showroom</span>
              </button>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  scrollWithLenis(lenis, '#products', -8);
                }}
                className="w-full py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                See these products
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
