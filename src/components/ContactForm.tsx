import React, { useEffect, useState } from 'react';
import { CheckCircle, Loader2, MessageSquare, Send } from 'lucide-react';
import {
  ENQUIRY_INTERESTS,
  ENQUIRY_ROLES,
  buildWhatsAppUrl,
  sendEnquiry,
  validateEnquiry,
  type EnquiryInterest,
  type EnquiryPayload,
  type EnquiryRole,
} from '../lib/enquiry';

interface ContactFormProps {
  source: EnquiryPayload['source'];
  initialMessage?: string;
  onSuccess?: () => void;
}

const fieldClass =
  'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C1121F] focus:border-[#C1121F]/60 transition-colors';

export const ContactForm: React.FC<ContactFormProps> = ({
  source,
  initialMessage = '',
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState<EnquiryRole>('Architect');
  const [interest, setInterest] = useState<EnquiryInterest>('Nortek LED Lights');
  const [message, setMessage] = useState(initialMessage);
  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialMessage) setMessage(initialMessage);
  }, [initialMessage]);

  const payload = (): EnquiryPayload => ({
    name,
    email,
    phone,
    city,
    role,
    interest,
    message,
    source,
    botField,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateEnquiry(payload());
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendEnquiry(payload());
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setCity('');
      setMessage('');
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try WhatsApp or call us.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(193,18,31,0.35)]">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
          Message sent
        </h3>
        <p className="text-sm text-[#888888] max-w-md mx-auto mb-8">
          Thank you. JK Agencies Jodhpur will reply on email or WhatsApp shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono tracking-[0.2em] uppercase text-white hover:bg-white/[0.1] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-10" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="mb-6">
        <label className="block text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-2">
          I am a
        </label>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_ROLES.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRole(item)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                role === item
                  ? 'bg-[#C1121F] text-white shadow-[0_0_12px_rgba(193,18,31,0.4)]'
                  : 'bg-white/[0.05] text-[#A4A4A4] hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">Full name *</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahul Sharma"
            className={fieldClass}
          />
          {errors.name && <p className="mt-1 text-[11px] text-[#C1121F]">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">Email *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@studio.com"
            className={fieldClass}
          />
          {errors.email && <p className="mt-1 text-[11px] text-[#C1121F]">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">Phone / WhatsApp *</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98290 00000"
            className={fieldClass}
          />
          {errors.phone && <p className="mt-1 text-[11px] text-[#C1121F]">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">City / Project location</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Jodhpur, Udaipur, Jaipur..."
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">Primary interest</label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value as EnquiryInterest)}
          className={`${fieldClass} bg-[#111111]`}
        >
          {ENQUIRY_INTERESTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-[10px] font-mono text-[#A4A4A4] mb-1 uppercase">Project details / message *</label>
        <textarea
          rows={4}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Room sizes, timeline, brands you are considering, or what you need from JK Agencies..."
          className={`${fieldClass} resize-none min-h-[120px]`}
        />
        {errors.message && <p className="mt-1 text-[11px] text-[#C1121F]">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="mb-4 text-xs text-[#E01B2E] bg-[#C1121F]/10 border border-[#C1121F]/30 rounded-xl px-4 py-3">
          {errorMessage} You can also send this enquiry on WhatsApp.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex-1 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#E01B2E] disabled:opacity-60 text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(193,18,31,0.4)] transition-all"
        >
          {status === 'sending' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span>{status === 'sending' ? 'Sending...' : 'Send message'}</span>
        </button>

        <button
          type="button"
          onClick={() => window.open(buildWhatsAppUrl(payload()), '_blank')}
          className="py-3.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all border border-white/10"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </button>
      </div>
    </form>
  );
};
