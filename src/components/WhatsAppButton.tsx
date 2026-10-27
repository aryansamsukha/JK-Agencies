import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent('Hello JK Agencies! I am contacting you via your website for lighting & electrical enquiries.');
    window.open(`https://wa.me/919829000000?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Connect on WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#111111] hover:bg-[#C1121F] text-white shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center gap-3"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
      </div>
      <span className="hidden md:inline-block text-xs font-bold tracking-widest pr-1 uppercase">
        TALK ON WHATSAPP
      </span>
    </button>
  );
};
