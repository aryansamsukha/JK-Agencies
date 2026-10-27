import React, { useState } from 'react';
import { SPACES } from '../data/spaces';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface SpacesSectionProps {
  onOpenTalk: () => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onOpenTalk }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpace = SPACES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SPACES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SPACES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="solutions" className="relative py-32 bg-[#050505] text-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.2em] text-[#C1121F] uppercase font-bold">
                SPATIAL ARCHITECTURE APPLICATIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              DESIGNED FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/40">
                ARCHITECTURE & LIFE.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-[#888888]">
              <span className="text-white font-bold">{activeSpace.number}</span> / 0{SPACES.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                data-cursor="PREV"
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#C1121F] hover:border-[#C1121F] flex items-center justify-center text-white transition-all duration-300 shadow-md"
                aria-label="Previous application"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                data-cursor="NEXT"
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#C1121F] hover:border-[#C1121F] flex items-center justify-center text-white transition-all duration-300 shadow-md"
                aria-label="Next application"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Spatial Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {SPACES.map((space, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={space.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 border ${
                  isActive
                    ? 'bg-[#C1121F] border-[#C1121F] text-white shadow-[0_0_15px_rgba(193,18,31,0.35)]'
                    : 'bg-white/[0.03] border-white/10 text-[#888888] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {space.number} {space.title}
              </button>
            );
          })}
        </div>

        {/* Main Display Stage */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl min-h-[500px] grid grid-cols-1 lg:grid-cols-12" data-reveal>
          
          {/* Left Column: Architectural Photo Stage (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] overflow-hidden bg-[#111111]">
            <img
              key={activeSpace.id}
              src={activeSpace.image}
              alt={activeSpace.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover animate-fadeIn transition-all duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A]/30 to-[#0A0A0A] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />

            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-white font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>APPLICATION {activeSpace.number} OF 07</span>
            </div>
          </div>

          {/* Right Column: Editorial Text & Specs (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#0A0A0A] relative z-10">
            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#C1121F] uppercase font-bold mb-2">
                {activeSpace.lightingType}
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-3">
                {activeSpace.title}
              </h3>

              <div className="text-xs font-semibold text-[#FCE5C8] uppercase tracking-wider mb-4">
                {activeSpace.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-[#888888] font-normal leading-relaxed mb-8">
                {activeSpace.description}
              </p>

              {/* Key Solutions List */}
              <div className="space-y-3 pt-4 mb-8 border-t border-white/10">
                <div className="text-[10px] font-mono tracking-widest text-[#888888] uppercase mb-3">
                  KEY LIGHTING SOLUTIONS
                </div>
                {activeSpace.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 text-xs text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F]" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={onOpenTalk}
                data-cursor="CONSULT"
                className="w-full py-4 rounded-xl bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs font-mono tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(193,18,31,0.35)] hover:shadow-[0_0_40px_rgba(224,27,46,0.6)]"
              >
                <span>CONSULT ON {activeSpace.title} LIGHTING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
