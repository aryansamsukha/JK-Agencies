import React from 'react';
import { X } from 'lucide-react';
import { useLockLenis } from '../hooks/useLockLenis';
import { ContactForm } from './ContactForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductName = '',
}) => {
  useLockLenis(isOpen);

  if (!isOpen) return null;

  const initialMessage = initialProductName
    ? `Inquiry regarding: ${initialProductName}`
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0B0B] p-6 sm:p-10 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C1121F]/15 rounded-bl-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-[#C1121F] text-white transition-colors shadow-md z-20"
          aria-label="Close enquiry form"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 mb-6 pr-10">
          <div className="inline-flex items-center gap-3 mb-4 p-2.5 rounded-2xl bg-white/[0.03] shadow-md">
            <img
              src="/logo.png"
              alt="JK Agencies Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>
          <h3 className="text-3xl font-black uppercase mb-1">Discuss your project</h3>
          <p className="text-xs text-[#A4A4A4]">
            Connect with JK Agencies Jodhpur for catalogs, photometric support, or a quote.
          </p>
        </div>

        <ContactForm
          source="quote"
          initialMessage={initialMessage}
          onSuccess={() => {
            window.setTimeout(onClose, 2400);
          }}
        />
      </div>
    </div>
  );
};
