import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { scrollWithLenis } from '../lib/motion';

export const Footer: React.FC = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    scrollWithLenis(lenis, 0);
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollWithLenis(lenis, href, -8);
  };

  return (
    <footer className="relative bg-[#050505] text-[#A4A4A4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Info (4 Cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3 mb-4 group">
                <img
                  src="/logo.png"
                  alt="JK Agencies Logo"
                  className="h-20 sm:h-24 md:h-28 w-auto max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]"
                />
              </a>
              <p className="text-xs tracking-[0.2em] text-[#00B4D8] font-mono font-bold uppercase mb-4">
                LIGHTING • FANS • COOLERS
              </p>
              <p className="text-xs text-[#A4A4A4] leading-relaxed max-w-sm">
                Authorized Jodhpur partner for Nortek lighting, Ravi Fans, and Kühl stylish fans and coolers. Built on a proud legacy of trust, quality, and technical excellence.
              </p>
            </div>

            <div className="text-[11px] font-mono text-[#A4A4A4]/60 mt-6">
              DIGITAL SHOWROOM & BRAND SHOWCASE
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.25em] text-white uppercase font-bold mb-6">
              // NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-semibold">
              <li>
                <a href="#home" onClick={(e) => handleNav(e, '#home')} className="hover:text-[#C1121F] transition-colors">HOME</a>
              </li>
              <li>
                <a href="#brands" onClick={(e) => handleNav(e, '#brands')} className="hover:text-[#C1121F] transition-colors">BRANDS SHOWCASE</a>
              </li>
              <li>
                <a href="#lighting" onClick={(e) => handleNav(e, '#lighting')} className="hover:text-[#C1121F] transition-colors">LIGHTING CATEGORIES</a>
              </li>
              <li>
                <a href="#solutions" onClick={(e) => handleNav(e, '#solutions')} className="hover:text-[#C1121F] transition-colors">SPATIAL SOLUTIONS</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav(e, '#about')} className="hover:text-[#C1121F] transition-colors">ABOUT JK AGENCIES</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="hover:text-[#C1121F] transition-colors">CONTACT & LOCATION</a>
              </li>
            </ul>
          </div>

          {/* Featured Partner Brands (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.25em] text-white uppercase font-bold mb-4">
              // FEATURED BRANDS
            </h4>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                <img src="/nortek-logo-transparent.png" alt="NORTEK" className="h-7 w-auto object-contain" />
              </div>
              <div className="p-2 rounded-xl bg-black border border-white/10">
                <img src="/ravi-logo.png" alt="Ravi Fans" className="h-7 w-auto object-contain" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-white/10">
                <img src="/kuhl-logo.png" alt="Kühl" className="h-7 w-auto object-contain" />
              </div>
            </div>
            <ul className="space-y-2 text-xs tracking-wider text-[#A4A4A4]">
              <li className="text-white font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F]" />
                <span>NORTEK LIGHTING</span>
              </li>
              <li>RAVI FANS</li>
              <li>KÜHL FANS & COOLERS</li>
            </ul>
          </div>

          {/* Scroll to top button (2 Cols) */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-white/[0.05] hover:bg-[#C1121F] text-white transition-all shadow-lg group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="text-left md:text-right text-[10px] font-mono text-[#A4A4A4]/60 mt-8">
              JODHPUR, RAJASTHAN
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A4A4A4]/70 gap-4">
          <div>
            © {new Date().getFullYear()} JK AGENCIES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-widest font-mono">
            <span>LIGHTING</span>
            <span>•</span>
            <span>ARCHITECTURE</span>
            <span>•</span>
            <span>INTERIORS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
