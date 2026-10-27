export const ENQUIRY_EMAIL = 'info@jkagencies.com';
export const WHATSAPP_NUMBER = '919829000000';

export const ENQUIRY_ROLES = ['Architect', 'Designer', 'Builder', 'Homeowner', 'Other'] as const;
export const ENQUIRY_INTERESTS = [
  'Nortek LED Lights',
  'Ravi Fans',
  'Kühl Fans & Coolers',
  'Indoor Lighting',
  'Outdoor Lighting',
  'Track & Downlights',
  'Wires, Cables & PVC Tapes',
  'Showroom Visit Booking',
] as const;

export type EnquiryRole = (typeof ENQUIRY_ROLES)[number];
export type EnquiryInterest = (typeof ENQUIRY_INTERESTS)[number];

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  role: EnquiryRole;
  interest: EnquiryInterest | string;
  message: string;
  city?: string;
  source: 'contact' | 'quote';
  botField?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateEnquiry(payload: EnquiryPayload) {
  const errors: Partial<Record<keyof EnquiryPayload, string>> = {};

  if (!payload.name.trim()) errors.name = 'Please enter your name.';
  if (!isValidEmail(payload.email)) errors.email = 'Please enter a valid email.';

  const digits = payload.phone.replace(/\D/g, '');
  if (digits.length < 10) errors.phone = 'Please enter a valid phone number.';
  if (!payload.message.trim()) errors.message = 'Please add a short message.';

  return errors;
}

export function buildWhatsAppUrl(payload: Pick<EnquiryPayload, 'name' | 'phone' | 'email' | 'role' | 'interest' | 'message' | 'city'>) {
  const text = [
    'Hello JK Agencies, I would like to send an enquiry from the website.',
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `I am: ${payload.role}`,
    `Interest: ${payload.interest}`,
    payload.city ? `City: ${payload.city}` : '',
    `Message: ${payload.message}`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export async function sendEnquiry(payload: EnquiryPayload) {
  if (payload.botField) {
    return { ok: true as const, skipped: true };
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const toEmail = import.meta.env.VITE_ENQUIRY_EMAIL || ENQUIRY_EMAIL;

  const fields = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    role: payload.role,
    interest: payload.interest,
    city: payload.city?.trim() || 'Not specified',
    message: payload.message.trim(),
    source: payload.source === 'quote' ? 'Quote / Talk modal' : 'Contact page',
  };

  if (accessKey) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `JK Agencies enquiry from ${fields.name}`,
        from_name: 'JK Agencies Website',
        replyto: fields.email,
        ...fields,
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Could not send your message.');
    }
    return { ok: true as const };
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `JK Agencies enquiry from ${fields.name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: fields.email,
      ...fields,
    }),
  });

  const data = (await response.json()) as { success?: boolean | string; message?: string };
  const succeeded = data.success === true || data.success === 'true';
  if (!response.ok || !succeeded) {
    throw new Error(data.message || 'Could not send your message.');
  }

  return { ok: true as const };
}
