import React from 'react';
import { ArrowRight, MessageSquare, Navigation, Sparkles } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { scrollWithLenis } from '../lib/motion';

interface CTASectionProps {
  onOpenTalk: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenTalk }) => {
  const lenis = useLenis();

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello JK Agencies! I would like to schedule a consultation regarding Nortek architectural lighting and electrical solutions.');
    window.open(`https://wa.me/919829000000?text=${text}`, '_blank');
  };

  const handleScrollToShowroom = () => {
    scrollWithLenis(lenis, '#showroom', -8);
  };

  return (
    <section className="relative py-44 bg-[#050505] text-[#F5F5F5] overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Dark Ambiance Vignette with Single Warm Spotlight Focal Center */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Single Focal Warm Light Source in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-tr from-[#C1121F]/20 via-[#FCE5C8]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12" data-reveal>
        
        {/* Top Minimal Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 shadow-2xl">
          <Sparkles className="w-4 h-4 text-[#C1121F]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#FCE5C8] uppercase font-bold">
            CONCLUSION OF THE LIGHTING JOURNEY
          </span>
        </div>

        {/* Signature Editorial Headline */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8 drop-shadow-2xl">
          LET'S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#C1121F]">
            LIGHT YOUR
          </span> <br />
          NEXT SPACE<span className="text-[#C1121F]">.</span>
        </h2>

        <p className="text-xs sm:text-base text-[#888888] font-normal leading-relaxed max-w-xl mx-auto mb-12 tracking-wide font-sans">
          Tell us about your upcoming project in Rajasthan. Whether designing a private villa, hotel suite, luxury showroom, or commercial tower, we bring precision optics to light.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenTalk}
            data-cursor="CONTACT"
            className="px-9 py-4 rounded-full bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs tracking-[0.25em] uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_0_35px_rgba(193,18,31,0.5)] hover:shadow-[0_0_50px_rgba(224,27,46,0.7)] hover:scale-105"
          >
            <span>CONTACT JK AGENCIES</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleScrollToShowroom}
            data-cursor="VISIT"
            className="px-9 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#FCE5C8]" />
            <span>VISIT SHOWROOM</span>
          </button>

          <button
            onClick={handleWhatsApp}
            data-cursor="WHATSAPP"
            className="px-9 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP US</span>
          </button>
        </div>

      </div>
    </section>
  );
};
