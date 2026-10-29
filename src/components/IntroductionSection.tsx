import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, MapPin, Award, Building2, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Initial silent autoplay attempt
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.15, rootMargin: '80px' },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    setSoundOn(next);
    video.muted = !next;
    video.volume = 1;
    video.play().then(() => setIsPlaying(true)).catch(() => undefined);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => undefined);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="about" className="relative py-32 bg-[#050505] text-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center" data-reveal>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 shadow-lg w-fit">
              <img src="/logo.png" alt="JK Agencies Emblem" className="h-5 w-auto object-contain" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                SINCE 1990
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.98] mb-6">
              SINCE 1990. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/40">
                TRUST & LIGHT.
              </span>
            </h2>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-[3px] h-32 bg-gradient-to-b from-[#D4AF37] via-[#C1121F] to-transparent rounded-full flex-shrink-0" />
              <p className="text-sm sm:text-base text-[#888888] font-normal leading-relaxed">
                JK Agencies is Rajasthan’s premier architectural lighting and electrical distribution partner. We connect architects, interior designers, property owners, and luxury developers with global manufacturer engineering.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-8 pl-7">
              From calculating beam angle lux metrics in luxury villas to programming DALI scene automation protocols for heritage resorts in Jodhpur, we serve as dedicated technical and product sourcing partners.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase font-display">DIRECT DEALERSHIP</div>
                  <div className="text-[11px] text-[#888888]">100% Genuine Manufacturer Warranties</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase font-display">JODHPUR FLAGSHIP</div>
                  <div className="text-[11px] text-[#888888]">Physical Darkroom & Experience Hub</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase font-display">SINCE 1990</div>
                  <div className="text-[11px] text-[#888888]">Unbroken Record of Credibility</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase font-display">PROJECT CONSULTANCY</div>
                  <div className="text-[11px] text-[#888888]">End-to-End Architectural Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative" data-reveal>
            <div
              ref={frameRef}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] bg-[#0A0A0A]"
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-20" />

              <video
                ref={videoRef}
                src="/videos/about-showroom.mp4"
                poster="/media/scenes/gallery-track.webp"
                className="w-full h-[420px] sm:h-[520px] lg:h-[560px] object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="JK Agencies showroom and lighting film"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />

              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity group"
                  aria-label="Play film"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C1121F]/90 text-white flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(193,18,31,0.6)] group-hover:scale-110 group-hover:bg-[#C1121F] transition-all">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                </button>
              )}

              <div className="absolute top-5 left-5 right-5 z-30 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-[0.25em] text-[#FCE5C8] uppercase">
                  Showroom film
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#C1121F] transition-colors"
                    aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#C1121F] transition-colors"
                    aria-label={soundOn ? 'Mute film' : 'Turn sound on'}
                  >
                    {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 p-5 sm:p-6 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#C1121F] font-bold">JK AGENCIES JODHPUR</div>
                  <div className="text-sm font-bold text-white tracking-wide uppercase font-display">
                    Architectural lighting consultancy
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-mono text-[#888888]">SINCE 1990</div>
                  <div className="text-xs font-bold text-[#FCE5C8] tracking-widest">RAJASTHAN</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#C1121F]/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
