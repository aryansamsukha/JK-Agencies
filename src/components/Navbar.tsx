import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { ScrollTrigger, scrollWithLenis } from '../lib/motion';
import { useLockLenis } from '../hooks/useLockLenis';

const NAV_LINKS = [
  { label: 'BRANDS', href: '#brands', id: 'brands' },
  { label: 'LIGHTING', href: '#lighting', id: 'lighting' },
  { label: 'APPLICATIONS', href: '#solutions', id: 'solutions' },
  { label: 'SHOWROOM', href: '#showroom', id: 'showroom' },
  { label: 'ABOUT', href: '#about', id: 'about' },
] as const;

interface NavbarProps {
  onOpenTalk: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTalk }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();
  useLockLenis(mobileMenuOpen);

  useEffect(() => {
    const scrolledTrigger = ScrollTrigger.create({
      start: 48,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });

    const sectionTriggers = [
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: 'bottom 45%',
        onEnter: () => setActiveSection('home'),
        onEnterBack: () => setActiveSection('home'),
      }),
      ...NAV_LINKS.map((link) =>
        ScrollTrigger.create({
          trigger: `#${link.id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActiveSection(link.id),
          onEnterBack: () => setActiveSection(link.id),
        }),
      ),
      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 45%',
        end: 'bottom bottom',
        onEnter: () => setActiveSection('contact'),
        onEnterBack: () => setActiveSection('contact'),
      }),
    ];

    return () => {
      scrolledTrigger.kill();
      sectionTriggers.forEach((t) => t.kill());
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollWithLenis(lenis, href, -8);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 sm:gap-3 py-1"
          >
            <img
              src="/logo.png"
              alt="JK Agencies Logo"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            />
            <span className="text-white/35 font-mono text-sm font-bold" aria-hidden>
              ×
            </span>
            <img
              src="/nortek-logo-transparent.png"
              alt="NORTEK Lighting Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(193,18,31,0.55)]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 bg-white/[0.03] backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-xl">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[11px] font-mono tracking-[0.2em] font-semibold transition-colors duration-300 py-0.5 ${
                    isActive ? 'text-white' : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C1121F] rounded-full shadow-[0_0_8px_#C1121F]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenTalk}
              data-cursor="TALK"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-mono tracking-[0.2em] font-bold text-white bg-[#C1121F] hover:bg-[#E01B2E] transition-all duration-300 shadow-[0_0_20px_rgba(193,18,31,0.35)]"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white hover:text-[#C1121F] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/logo.png"
                alt="JK Agencies"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white/35 font-mono text-sm font-bold" aria-hidden>
                ×
              </span>
              <img
                src="/nortek-logo-transparent.png"
                alt="NORTEK Lighting"
                className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(193,18,31,0.5)]"
              />
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-3xl font-bold tracking-wider text-white hover:text-[#C1121F] transition-colors py-2 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalk();
              }}
              className="w-full py-4 rounded-xl bg-[#C1121F] text-white text-xs font-mono tracking-[0.2em] font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(193,18,31,0.4)]"
            >
              <span>TALK TO LIGHTING EXPERT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
