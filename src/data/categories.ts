export interface LightingCategory {
  id: string;
  name: string;
  count: string;
  description: string;
  image: string;
  tags: string[];
  badge?: string;
}

export const LIGHTING_CATEGORIES: LightingCategory[] = [
  {
    id: 'led-lights',
    name: 'LED LIGHTS',
    count: 'ENERGY EFFICIENT',
    description: 'Save energy, save money, save the planet. Nortek LED solutions built for long life, low heat, and everyday efficiency.',
    image: '/media/Creta%2015W%20black%201%20resized.webp',
    tags: ['LED Bulbs', 'Downlights', 'Batten Lights', 'Panel Lights'],
  },
  {
    id: 'indoor-lighting',
    name: 'INDOOR LIGHTING',
    count: 'RADIANCE INDOORS',
    description: 'Bringing radiance to your indoor spaces with track lights, COB downlights, panels, battens, and decorative fixtures.',
    image: '/media/Serena_1A.webp',
    tags: ['Track Light', 'COB Downlight', 'Panel Light', 'Linear Spot'],
  },
  {
    id: 'outdoor-lighting',
    name: 'OUTDOOR LIGHTING',
    count: 'WEATHER READY',
    description: 'Elevating your outdoor spaces with IP-rated garden lights, street lights, wall lights, and facade illumination.',
    image: '/media/New%20street%20light%20100W_2.webp',
    tags: ['Garden Light', 'Street Light', 'Wall Light', 'Bollard'],
  },
  {
    id: 'pvc-tapes',
    name: 'PVC INSULATED TAPES',
    count: 'ELECTRICAL RANGE',
    description: 'For the perfect electrical connection. Durable PVC insulated tapes for safe, clean, and reliable wiring work.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop',
    tags: ['PVC Tapes', 'Insulation', 'Electrical Safety'],
    badge: 'New Release',
  },
  {
    id: 'wires-cables',
    name: 'WIRES & CABLES',
    count: 'SAFE POWER',
    description: 'The heart of a safe and reliable electrical system. Nortek wires and cables for residential and project installations.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200&auto=format&fit=crop',
    tags: ['House Wires', 'Cables', 'Project Supply'],
    badge: 'New Release',
  },
];
