export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  gallery?: string[];
  specs: {
    wattage?: string;
    beamAngle?: string;
    cri?: string;
    colorTemp?: string;
    finish?: string;
    ipRating?: string;
    material?: string;
    controlProtocol?: string;
  };
  applications: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'nortek-creta-cob-downlight',
    brand: 'NORTEK',
    name: 'CRETA COB DOWNLIGHT',
    category: 'Downlights',
    subtitle: '15W focused ceiling downlight',
    description:
      'Nortek Creta 15W COB downlight — a homepage flagship from nortekled.com. Beautifully designed for home ceilings with a strong, focused beam, high efficacy, and low power consumption.',
    image: '/media/creta-15w-black-1-resized.webp',
    gallery: [
      '/media/creta-15w-black-1-resized.webp',
      '/media/creta-15w-black-3.webp',
      '/media/creta-15w-white-4-resized.webp',
    ],
    specs: {
      wattage: '15W COB LED',
      beamAngle: 'Focused ceiling beam',
      cri: 'High CRI',
      colorTemp: 'Warm / Neutral',
      finish: 'Matte Black / White',
      ipRating: 'Indoor ceiling',
      material: 'Die-cast heat sink',
    },
    applications: ['Homes', 'Living rooms', 'Retail ceilings', 'Offices'],
    featured: true,
  },
  {
    id: 'nortek-evana-cob-downlight',
    brand: 'NORTEK',
    name: 'EVANA PREMIUM',
    category: 'Downlights',
    subtitle: 'Flicker-free COB downlight',
    description:
      'Nortek Evana Premium — featured on nortekled.com. High brightness, excellent illumination, and instant flicker-free light. Deep junction-box friendly for clean recessed ceilings.',
    image: '/media/kreta-1b.webp',
    gallery: ['/media/kreta-1b.webp', '/media/kreta-2e.webp'],
    specs: {
      wattage: 'Multiple wattages',
      beamAngle: 'Recessed COB optic',
      cri: 'High brightness',
      colorTemp: 'Warm / Cool white',
      finish: 'White / Black baffle',
      ipRating: 'Indoor recessed',
      material: 'Aluminum housing',
      controlProtocol: 'Flicker-free driver',
    },
    applications: ['Residences', 'Hotels', 'Offices', 'Showrooms'],
    featured: true,
  },
  {
    id: 'nortek-della-track-light',
    brand: 'NORTEK',
    name: 'DELLA TRACK LIGHT',
    category: 'Track',
    subtitle: '10W track spotlight, 30,000 hour LED',
    description:
      'Nortek Della track light from the official shop. About 10W consumption with output comparable to a much higher conventional lamp, a brighter reflector, and LED life rated up to 30,000 hours.',
    image: '/media/della-white-bg-4.webp',
    gallery: ['/media/della-white-bg-4.webp', '/media/shika-white-bg-1.webp'],
    specs: {
      wattage: '10W class LED',
      beamAngle: 'Directional reflector',
      cri: 'Bright accent',
      colorTemp: 'Warm / Neutral',
      finish: 'Matte architectural',
      ipRating: 'Indoor dry locations',
      material: 'Metal track body',
    },
    applications: ['Retail displays', 'Galleries', 'Feature walls', 'Showrooms'],
    featured: true,
  },
  {
    id: 'nortek-eliza-linear-spotlight',
    brand: 'NORTEK',
    name: 'ELIZA LINEAR SPOTLIGHT',
    category: 'Indoor',
    subtitle: 'Linear laser and diffused hanging light',
    description:
      'Nortek Eliza linear spotlight — a premium hanging fitting from nortekled.com. Focused lighting with enhanced lux levels for residential and commercial interiors.',
    image: '/media/parama-5.webp',
    gallery: ['/media/parama-5.webp', '/media/parama-3a.webp'],
    specs: {
      wattage: 'Linear hanging LED',
      beamAngle: 'Focused + diffused',
      finish: 'Premium metal',
      ipRating: 'Indoor',
      material: 'Aluminum profile',
    },
    applications: ['Dining', 'Receptions', 'Offices', 'Retail'],
    featured: true,
  },
  {
    id: 'nortek-magnetic-track',
    brand: 'NORTEK',
    name: 'MAGNETIC TRACK',
    category: 'Track',
    subtitle: 'Click-in spots and linear modules',
    description:
      'Nortek magnetic track system for click-in spots, linear modules, and architectural ceilings. A flexible indoor lighting platform for homes, galleries, and showrooms.',
    image: '/media/magnetic-1-5.webp',
    gallery: ['/media/magnetic-1-5.webp', '/media/profile-white-bg-4.webp', '/media/profile-white-bg-6.webp'],
    specs: {
      wattage: 'Modular spots & linears',
      beamAngle: 'Spot / flood / diffuse',
      finish: 'Black / white track',
      ipRating: 'Indoor architectural',
      material: 'Extruded aluminum',
      controlProtocol: 'Magnetic click-in',
    },
    applications: ['Living rooms', 'Galleries', 'Offices', 'Showrooms'],
    featured: true,
  },
  {
    id: 'nortek-flexa-rope-light',
    brand: 'NORTEK',
    name: 'FLEXA ROPE LIGHT',
    category: 'Indoor',
    subtitle: 'Super-bright waterproof LED rope',
    description:
      'Nortek Flexa rope light from the official shop. High-lumen chip, long life, and fully waterproof construction for coves, outlines, and decorative runs.',
    image: '/media/contra-rope-light-2.webp',
    gallery: ['/media/contra-rope-light-2.webp', '/media/contra-rope-light-4.webp', '/media/flexa-4a.webp'],
    specs: {
      wattage: 'Flexible LED rope',
      beamAngle: 'Uniform glow',
      cri: 'High lumen chip',
      finish: 'Opal silicone',
      ipRating: 'Waterproof',
      material: 'Flexible LED + silicone',
    },
    applications: ['Cove lighting', 'Facades', 'Signage', 'Feature edges'],
  },
  {
    id: 'nortek-corea-wall-light',
    brand: 'NORTEK',
    name: 'COREA WALL LIGHT',
    category: 'Outdoor',
    subtitle: '2-way IP65 up-down wall light',
    description:
      'Nortek Corea 2W and 4W wall lights from nortekled.com. Two-way illumination for outdoor walls and bedrooms, with weatherproof IP65 durability.',
    image: '/media/yaama-3w-b-1.webp',
    gallery: ['/media/yaama-3w-b-1.webp', '/media/yaama-3w-b-4.webp', '/media/yaama-15w-1a.webp'],
    specs: {
      wattage: '2W / 4W',
      beamAngle: 'Two-way wall wash',
      finish: 'Architectural outdoor',
      ipRating: 'IP65 weatherproof',
      material: 'Outdoor-rated housing',
    },
    applications: ['Compound walls', 'Bedrooms', 'Passages', 'Facades'],
  },
  {
    id: 'nortek-spica-garden',
    brand: 'NORTEK',
    name: 'SPICA SPIKE LIGHT',
    category: 'Outdoor',
    subtitle: 'IP65 garden spike light',
    description:
      'Nortek Spica garden / spike light — featured on nortekled.com. IP65 waterproof and dustproof, easy to install, and built to create a beautiful illuminated garden at night.',
    image: '/media/se-bollard-white-bg-1.webp',
    gallery: ['/media/se-bollard-white-bg-1.webp', '/media/yaama-15w-1a.webp'],
    specs: {
      wattage: 'Garden LED',
      beamAngle: 'Uplight / path',
      finish: 'Outdoor landscape',
      ipRating: 'IP65 waterproof',
      material: 'Outdoor spike housing',
    },
    applications: ['Gardens', 'Lawns', 'Pathways', 'Landscape beds'],
    featured: true,
  },
  {
    id: 'nortek-omnia-outdoor',
    brand: 'NORTEK',
    name: 'OMNIA OUTDOOR',
    category: 'Outdoor',
    subtitle: 'Stylish, durable outdoor lighting',
    description:
      'Nortek Omnia outdoor lights — a homepage collection on nortekled.com. Stylish and durable fixtures for gardens, decks, and building perimeters.',
    image: '/media/new-street-light-100w-2.webp',
    gallery: ['/media/new-street-light-100w-2.webp', '/media/se-bollard-white-bg-1.webp'],
    specs: {
      wattage: 'Outdoor LED range',
      finish: 'Weather-resistant coat',
      ipRating: 'Outdoor rated',
      material: 'Die-cast aluminum',
    },
    applications: ['Gardens', 'Driveways', 'Terraces', 'Building perimeters'],
    featured: true,
  },
];
