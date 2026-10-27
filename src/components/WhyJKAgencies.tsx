import React from 'react';
import { Award, Zap, Users, MapPin } from 'lucide-react';

export const WhyJKAgencies: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: '90+ YEARS LEGACY',
      desc: 'Over nine decades of pioneering leadership, trust, and curated manufacturer partnerships across architectural lighting and electrical solutions in Jodhpur.',
      icon: Award
    },
    {
      num: '02',
      title: 'CURATED BRANDS',
      desc: 'Authentic products from the brands we actually stock: Nortek lighting, Ravi Fans, and Kühl stylish fans and coolers.',
      icon: Zap
    },
    {
      num: '03',
      title: 'PROJECT SUPPORT',
      desc: 'Technical beam angle calculations, photometric layout guidance, and dedicated project scheduling for architects and contractors.',
      icon: Users
    },
    {
      num: '04',
      title: 'LOCAL PRESENCE',
      desc: 'Flagship showroom presence in Jodhpur, Rajasthan with direct warranty management, live darkroom beam testing, and personal service.',
      icon: MapPin
    }
  ];

  return (
    <section className="relative py-32 bg-[#050505] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Headline Statement */}
        <div className="max-w-4xl mb-20" data-reveal>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
              THE JK AGENCIES ADVANTAGE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[0.96]">
            TRUSTED BRANDS. <br />
            LOCAL EXPERTISE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E01B2E] to-white">
              PERSONAL SERVICE.
            </span>
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[300px] shadow-xl hover:border-white/20 hover:shadow-[0_10px_35px_rgba(193,18,31,0.2)]"
                data-reveal
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-black text-[#C1121F]">
                      {item.num}
                    </span>
                    <IconComp className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-lg font-black text-white tracking-wider uppercase mb-3 group-hover:text-[#FCE5C8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#888888] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-white/5 group-hover:bg-[#C1121F] transition-colors mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
