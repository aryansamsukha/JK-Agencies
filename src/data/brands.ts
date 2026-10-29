export interface Brand {
  id: string;
  name: string;
  category: 'LIGHTING' | 'FANS' | 'COOLERS';
  tagline: string;
  description: string;
  featured?: boolean;
  logoText: string;
  logoUrl?: string;
  logoOnLight?: boolean;
  website?: string;
  image: string;
  heroImage?: string;
  stats?: { label: string; value: string }[];
  highlights: string[];
}

export const BRANDS: Brand[] = [
  {
    id: 'nortek',
    name: 'NORTEK',
    category: 'LIGHTING',
    tagline: 'Architectural Lighting Systems & Precision Illumination',
    description:
      'Lighting solutions engineered to bring precision, comfort, and character to high-end residential, commercial, and architectural spaces.',
    featured: true,
    logoText: 'NORTEK',
    logoUrl: '/nortek-logo-transparent.png',
    image: '/media/donna-2.webp',
    heroImage: '/media/serena-1a.webp',
    stats: [
      { label: 'CRI INDEX', value: '95+' },
      { label: 'OPTICAL EFFICIENCY', value: '98%' },
      { label: 'WARRANTY', value: '5 YEARS' },
    ],
    highlights: [
      'LED lights, downlights, battens, and bulbs',
      'Indoor track, COB, panel, and linear lighting',
      'Outdoor, garden, wall, and street lights',
      'PVC insulated tapes and wires & cables',
    ],
  },
  {
    id: 'ravi',
    name: 'RAVI FANS',
    category: 'FANS',
    tagline: 'All-metal pedestal, table, and wall fans since 1975',
    description:
      'Ravi Fans, manufactured in Varanasi, is known for durable all-metal construction, high air delivery, and long-life motors. JK Agencies is an authorized partner for Ravi pedestal, table, and wall fans in Jodhpur.',
    logoText: 'RAVI',
    logoUrl: '/ravi-logo.png',
    website: 'https://www.ravifans.com/',
    image: 'https://images.unsplash.com/photo-1565538810643-b5b1c39635cc?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Mini pedestal, table, wall, and power pedestal fans',
      'All-metal body with high air delivery',
      'ISO 9001:2015 certified manufacture in Varanasi',
      'Made in India, built for long service life',
    ],
  },
  {
    id: 'kuhl',
    name: 'KÜHL',
    category: 'COOLERS',
    tagline: 'Stylish BLDC fans and next-gen desert coolers',
    description:
      'Kühl by Kent brings energy-saving BLDC ceiling fans and desert air coolers with high airflow, low noise, and smart controls. Available through JK Agencies for homes and projects in Rajasthan.',
    logoText: 'KÜHL',
    logoUrl: '/kuhl-logo.png',
    logoOnLight: true,
    website: 'https://www.kuhl.in/',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'BLDC desert coolers including the Exzel series',
      'Stylish BLDC ceiling fans, up to 65% power saving',
      'Low noise, high airflow, Wi-Fi and Alexa control',
      'BEE 5-star rated, BIS certified, Made in India',
    ],
  },
];
