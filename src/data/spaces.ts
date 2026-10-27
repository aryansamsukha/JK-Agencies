export interface Space {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  lightingType: string;
  highlights: string[];
}

export const SPACES: Space[] = [
  {
    id: 'residential',
    number: '01',
    title: 'RESIDENTIAL',
    subtitle: 'Villas, Penthouses & Private Estates',
    description: 'Transforming private living spaces through warm layered ambient lighting, zero-glare downlights, and intuitive smart scene automation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'Warm Ambient & Anti-Glare Recessed Spots',
    highlights: ['Living Room Atmosphere Layering', 'Circadian Bedroom Lighting', 'Dining Accent Framing', 'Courtyard Landscape Spots']
  },
  {
    id: 'commercial',
    number: '02',
    title: 'COMMERCIAL',
    subtitle: 'Executive Offices & Corporate HQs',
    description: 'Optimizing workspace productivity with low UGR<19 task illumination, DALI energy management, and statement lobby linear lighting.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'Magnetic 48V Track & Diffused Linear Lines',
    highlights: ['Boardroom Tunable White Tracks', 'Acoustic Light Panels', 'Corridor Linear Lines', 'Automated Daylight Sensors']
  },
  {
    id: 'hospitality',
    number: '03',
    title: 'HOSPITALITY',
    subtitle: 'Luxury Hotels, Fine Dining & Resorts',
    description: 'Evoking luxury and emotional warmth with intimate low-glare warm dimming downlights, decorative installations, and facade grandeur.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'Warm Dimming (2200K - 3000K)',
    highlights: ['Warm Dimming 2200K - 3000K', 'Lobby Chandelier Artwork', 'Poolside IP68 Ambient Lighting', 'Guestroom Touch Consoles']
  },
  {
    id: 'architectural',
    number: '04',
    title: 'ARCHITECTURAL',
    subtitle: 'Museums, Galleries & Monuments',
    description: 'High-CRI optical beams engineered to accentuate sculptural forms, stone finishes, and museum-grade artwork without UV damage.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'Narrow Beam Spotlights (RA > 98)',
    highlights: ['Narrow 10° Spot Framing', 'Surface Textural Grazing', 'UV-Free LED Modules', 'Micro Track Systems']
  },
  {
    id: 'outdoor',
    number: '05',
    title: 'OUTDOOR',
    subtitle: 'Facades, Gardens & Heritage Architecture',
    description: 'Heavy-duty weather-resistant IP67 illuminated wall grazing, tree uplighting, and pillar spotlights for architectural facades.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'IP67 Waterproof Exterior Grazers',
    highlights: ['Stone Facade Grazing', 'Garden Tree Uplighting', 'Submersible IP68 Lights', 'Pathway Micro-Bollards']
  },
  {
    id: 'retail',
    number: '06',
    title: 'RETAIL',
    subtitle: 'Boutiques, Jewelers & Luxury Showrooms',
    description: 'High-CRI (>95) true-color rendering spotlights designed to accentuate luxury merchandise textures, precious metals, and fine fabrics.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'High-CRI True Color Accent Beams',
    highlights: ['High-CRI Jewelry Beams', 'Window Display Framing', 'Accent Wall Washing', 'Custom Track Grids']
  },
  {
    id: 'institutional',
    number: '07',
    title: 'INSTITUTIONAL',
    subtitle: 'Universities, Hospitals & Public Buildings',
    description: 'Reliable, long-lifespan glare-free lighting engineered for visual clarity, energy compliance, and low maintenance overhead.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    lightingType: 'Efficient Recessed Troffers & Linear Battens',
    highlights: ['Low Glare UGR<19', '50,000+ Hour Lifespan', 'Emergency Backup Modules', 'DALI Central Controls']
  }
];
