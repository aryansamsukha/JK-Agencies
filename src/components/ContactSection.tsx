import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { WHATSAPP_NUMBER } from '../lib/enquiry';

export const ContactSection: React.FC = () => {
  const handleMapDirections = () => {
    window.open('https://maps.google.com/?q=JK+Agencies+Jodhpur', '_blank');
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5" data-reveal>
            <div className="inline-flex items-center gap-2.5 mb-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] shadow-md">
              <img src="/logo.png" alt="JK Agencies Emblem" className="h-5 w-auto object-contain" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                CONTACT JK AGENCIES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
              Send us a message
            </h2>
            <p className="text-sm text-[#A4A4A4] leading-relaxed mb-8 max-w-lg">
              Tell us about your project. Our Jodhpur team will reply with catalogs, photometric guidance, or a showroom appointment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-[#111111] shadow-xl">
                <Phone className="w-4 h-4 text-[#C1121F] mb-3" />
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-1">Phone</div>
                <a href="tel:+919829000000" className="text-sm font-bold text-white hover:text-[#C1121F] transition-colors">
                  +91 98290 00000
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-[#111111] shadow-xl">
                <MessageSquare className="w-4 h-4 text-emerald-400 mb-3" />
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-1">WhatsApp</div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  +91 98290 00000
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-[#111111] shadow-xl">
                <Mail className="w-4 h-4 text-[#C1121F] mb-3" />
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-1">Email</div>
                <a href="mailto:info@jkagencies.com" className="text-sm font-bold text-white hover:text-[#C1121F] transition-colors break-all">
                  info@jkagencies.com
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-[#111111] shadow-xl">
                <Clock className="w-4 h-4 text-[#C1121F] mb-3" />
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-1">Hours</div>
                <div className="text-sm font-bold text-white">Mon – Sat, 10 AM – 8 PM</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#111111] flex items-start gap-3 mb-6 shadow-xl">
              <MapPin className="w-5 h-5 text-[#C1121F] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase">Showroom</div>
                <div className="text-sm font-bold text-white mt-1">
                  JK Agencies, Industrial Area / Light Market, Jodhpur, Rajasthan 342001
                </div>
              </div>
            </div>

            <button
              onClick={handleMapDirections}
              className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-[#C1121F] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
            >
              <span>Get directions</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <div className="relative rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C1121F]/10 rounded-bl-full blur-3xl pointer-events-none" />
              <div className="relative mb-6">
                <div className="text-[10px] font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold mb-2">
                  // Enquiry form
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                  Tell us about your project
                </h3>
              </div>
              <ContactForm source="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
