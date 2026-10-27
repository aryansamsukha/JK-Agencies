import React from 'react';
import { Compass, PenTool, Building2, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProfessionalSectionProps {
  onOpenTalk: () => void;
}

export const ProfessionalSection: React.FC<ProfessionalSectionProps> = ({ onOpenTalk }) => {
  const professionals = [
    {
      title: 'ARCHITECTS',
      icon: Compass,
      desc: 'Technical IES photometric files, beam angle calculation support, DALI lighting layouts, and custom profile track configurations.',
      perks: ['Photometric Data Support', 'Custom Profile Layouts', 'Dedicated Technical Contact']
    },
    {
      title: 'INTERIOR DESIGNERS',
      icon: PenTool,
      desc: 'High-CRI color rendering fixtures, decorative pendants, acoustic lighting art, and seamless luxury touch switch plates.',
      perks: ['Material & Finish Mockups', 'Glare-Free Darkroom Demos', 'Private Client Showroom Hours']
    },
    {
      title: 'BUILDERS & CONTRACTORS',
      icon: Building2,
      desc: 'Bulk project procurement across Nortek lighting, Ravi Fans, and Kühl coolers with verified local supply chain support in Jodhpur.',
      perks: ['Volume Partner Pricing', 'On-Site Delivery Scheduling', 'Warranty & Spares Support']
    },
    {
      title: 'RETAIL & COMMERCIAL PARTNERS',
      icon: Store,
      desc: 'Boutique jewelers, retail chains, and hospitality groups looking for state-of-the-art accent lighting and energy-efficient BLDC airflow.',
      perks: ['Energy Efficiency Audits', 'Jewelry High-CRI Spotlights', 'Facade Accent Projectors']
    }
  ];

  return (
    <section className="relative py-28 bg-[#0B0B0B] overflow-hidden">
      {/* Background Subtle Red Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[220px] bg-[#C1121F]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
                TRADE & PROJECT CONSULTANCY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
              FOR THOSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#A4A4A4]">
                WHO CREATE SPACES.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#A4A4A4] max-w-md leading-relaxed">
              Architects, interior designers, builders and project professionals can work directly with JK Agencies for dedicated technical support and project execution.
            </p>

            <button
              onClick={onOpenTalk}
              className="w-fit px-8 py-3.5 rounded-full bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-all shadow-[0_0_25px_rgba(193,18,31,0.4)]"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((prof) => {
            const IconComponent = prof.icon;
            return (
              <div
                key={prof.title}
                onClick={onOpenTalk}
                className="group relative rounded-3xl bg-[#111111] transition-all duration-500 p-8 sm:p-10 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_10px_35px_rgba(193,18,31,0.2)]"
                data-reveal
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#C1121F] group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#A4A4A4] group-hover:text-[#C1121F] transition-colors uppercase font-bold">
                      PROJECT CONSULTANCY
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white tracking-wider uppercase mb-3">
                    {prof.title}
                  </h3>

                  <p className="text-xs text-[#A4A4A4] leading-relaxed mb-6">
                    {prof.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="space-y-2">
                    {prof.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2.5 text-xs text-[#F5F5F5]">
                        <CheckCircle2 className="w-4 h-4 text-[#C1121F] flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
