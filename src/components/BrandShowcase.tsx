import React from 'react';
import { BRANDS } from '../data/brands';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

interface BrandShowcaseProps {
  onOpenTalk: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenTalk }) => {
  const nortekBrand = BRANDS.find((b) => b.id === 'nortek') || BRANDS[0];
  const partnerBrands = BRANDS.filter((b) => b.id !== 'nortek');

  return (
    <section id="brands" className="relative py-32 bg-[#050505] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
                CURATED MANUFACTURER PARTNERSHIPS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              BRANDS WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/40">
                REPRESENT.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#888888] max-w-md leading-relaxed">
            JK Agencies is the authorized Jodhpur partner for Nortek architectural lighting, Ravi Fans, and Kühl stylish fans and coolers.
          </p>
        </div>

        {/* 1. FLAGSHIP BRAND EXPERIENCE — NORTEK LIGHTING */}
        <div
          data-cursor="LIGHT"
          className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 transition-all duration-700 mb-24 shadow-2xl group hover:border-[#C1121F]/40 hover:shadow-[0_0_50px_rgba(193,18,31,0.25)]"
          data-reveal
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Stage (Left 7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[580px] overflow-hidden bg-[#111111]" data-reveal-media>
              <img
                src={nortekBrand.heroImage || nortekBrand.image}
                alt="Nortek Architectural Lighting"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A]/40 to-[#0A0A0A] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />
              
              {/* Flagship Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-[0.25em] text-[#C1121F] font-bold flex items-center gap-2 shadow-xl">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIMARY ARCHITECTURAL LIGHTING BRAND</span>
              </div>

              {/* Official Brand Logo Badge on Image */}
              <div className="absolute bottom-6 left-6 p-3 px-5 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/10 flex items-center gap-3 shadow-2xl">
                <img
                  src={nortekBrand.logoUrl || '/nortek-logo-transparent.png'}
                  alt="NORTEK Lighting Lives..."
                  className="h-8 sm:h-10 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(193,18,31,0.5)]"
                />
              </div>

              {/* Ambient Glow Accent */}
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#C1121F]/18 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Editorial Content (Right 5 Cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#0A0A0A] relative z-10">
              <div>
                <div className="text-xs font-mono tracking-[0.3em] text-[#888888] uppercase mb-3">
                  01 // PRIMARY LIGHTING PARTNER
                </div>
                
                {/* Official Brand Logo Header */}
                <div className="mb-5 flex items-center">
                  <img
                    src={nortekBrand.logoUrl || '/nortek-logo-transparent.png'}
                    alt="NORTEK Lighting Lives..."
                    className="h-14 sm:h-20 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(193,18,31,0.4)]"
                  />
                </div>
                
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-6">
                  {nortekBrand.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8 pt-4">
                  {nortekBrand.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-xs text-[#F5F5F5]">
                      <CheckCircle2 className="w-4 h-4 text-[#C1121F] flex-shrink-0" />
                      <span className="font-medium tracking-wide">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Stats Grid */}
                {nortekBrand.stats && (
                  <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                    {nortekBrand.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-xl font-display font-black text-white">{s.value}</div>
                        <div className="text-[9px] font-mono text-[#888888] tracking-widest mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={onOpenTalk}
                  data-cursor="EXPLORE"
                  className="w-full py-4 rounded-xl bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(193,18,31,0.35)] hover:shadow-[0_0_40px_rgba(224,27,46,0.6)]"
                >
                  <span>DISCOVER NORTEK SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. AUTHORIZED COMPANION BRANDS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white tracking-wider uppercase">
              AUTHORIZED COMPANION BRANDS
            </h3>
            <p className="text-xs text-[#888888] mt-2 max-w-xl">
              The other two houses we stock and service in Jodhpur — Ravi Fans and Kühl coolers & stylish fans.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerBrands.map((brand, idx) => (
            <div
              key={brand.id}
              data-cursor="EXPLORE"
              className="group relative rounded-2xl bg-[#0A0A0A] border border-white/10 transition-all duration-500 overflow-hidden p-8 flex flex-col justify-between min-h-[380px] shadow-xl hover:border-white/20 hover:shadow-[0_10px_35px_rgba(193,18,31,0.2)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#C1121F] font-bold">
                    0{idx + 2} // {brand.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[9px] font-mono tracking-widest text-[#888888]">
                    {brand.category}
                  </span>
                </div>

                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-2xl px-5 py-4 border border-white/10 ${
                    brand.logoOnLight ? 'bg-white' : 'bg-black'
                  }`}
                >
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-14 sm:h-16 w-auto max-w-[220px] object-contain"
                  />
                </div>

                <h4 className="font-display text-2xl font-black text-white tracking-widest uppercase mb-2 group-hover:text-[#FCE5C8] transition-colors">
                  {brand.name}
                </h4>

                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-5">
                  {brand.tagline}
                </p>

                <div className="space-y-2.5">
                  {brand.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs text-[#F5F5F5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 flex items-center justify-between border-t border-white/5 gap-3">
                {brand.website ? (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#888888] hover:text-white transition-colors"
                  >
                    Official site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  onClick={onOpenTalk}
                  className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#C1121F] transition-colors"
                >
                  <span>ENQUIRE</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
