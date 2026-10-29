export interface LightSceneFitting {
  name: string;
  image: string;
}

export interface LightScene {
  id: string;
  number: string;
  label: string;
  title: string;
  meaning: string;
  caption: string;
  image: string;
  fittings: LightSceneFitting[];
}

export const LIGHT_SCENES: LightScene[] = [
  {
    id: 'living',
    number: '01',
    label: 'Living room',
    title: 'Warm downlights for everyday living',
    meaning:
      'Small recessed spots in the ceiling fill the room evenly. Faces, sofas, and walls stay comfortable to look at — no single harsh bulb in the middle of the room.',
    caption: 'What you are seeing: ceiling downlights plus a lamp for a second, softer layer.',
    image: '/media/scenes/living-dusk.webp',
    fittings: [
      { name: 'Creta COB Downlight', image: '/media/creta-15w-black-1-resized.webp' },
      { name: 'Evana COB Downlight', image: '/media/kreta-1b.webp' },
    ],
  },
  {
    id: 'gallery',
    number: '02',
    label: 'Art & display',
    title: 'Track spots that point at what matters',
    meaning:
      'Each beam is aimed at a painting or object. The room stays darker; the art is bright. This is how galleries, jewellery counters, and feature walls should be lit.',
    caption: 'What you are seeing: ceiling track lights aimed at the walls.',
    image: '/media/scenes/gallery-track.webp',
    fittings: [
      { name: 'Della Track Light', image: '/media/della-white-bg-4.webp' },
      { name: 'Magnetic Track', image: '/media/magnetic-1-5.webp' },
    ],
  },
  {
    id: 'dining',
    number: '03',
    label: 'Dining & hotels',
    title: 'Decorative light that sets a mood',
    meaning:
      'Pendants hang over tables so plates and faces look rich. The rest of the room stays calmer. This is the lighting used in restaurants, hotel lounges, and dining rooms.',
    caption: 'What you are seeing: hanging decorative fittings over the tables.',
    image: '/media/scenes/dining-hospitality.webp',
    fittings: [
      { name: 'Serena Luminaire', image: '/media/serena-1a.webp' },
      { name: 'Eliza Linear Spotlight', image: '/media/parama-5.webp' },
    ],
  },
  {
    id: 'facade',
    number: '04',
    label: 'Home at dusk',
    title: 'Outdoor light that draws the house',
    meaning:
      'Warm light at the entrance, a wash across the wall, and a clear path to the door. The building is readable after sunset without looking like a shopfront.',
    caption: 'What you are seeing: entry downlight and wall lighting on the facade.',
    image: '/media/scenes/facade-dusk.webp',
    fittings: [
      { name: 'Corea Wall Light', image: '/media/yaama-3w-b-1.webp' },
      { name: 'Spica Garden Light', image: '/media/se-bollard-white-bg-1.webp' },
    ],
  },
];
