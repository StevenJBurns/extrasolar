import { SolarSystem } from '../components/canvas/types/SolarSystem.type.ts';

export const mockSolarSystemData: Array<SolarSystem> = [
  {
    name: 'Kepler-33',
    stars: [
      {
        label: 'A',
        class: 'G',
        mass: { value: 9999, scale: 'Sun' },
      },
    ],
    planets: [
      {
        label: 'b',
        mass: {
          value: 3.68,
          scale: 'Earth',
        },
        radius: {
          value: 1.74,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.0677,
            scale: 'AU',
          },
          period: {
            value: 5.7,
            scale: 'days',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'c',
        mass: {
          value: 0.39,
          scale: 'Earth',
        },
        radius: {
          value: 0.285,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.1189,
            scale: 'AU',
          },
          period: {
            value: 13.2,
            scale: 'days',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'd',
        mass: {
          value: 3.91,
          scale: 'Earth',
        },
        radius: {
          value: 0.477,
          scale: 'Jupiter',
        },
        orbit: {
          period: {
            value: 21.8,
            scale: 'days',
          },
          radius: {
            value: 0.1662,
            scale: 'AU',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'e',
        mass: {
          value: 5.57,
          scale: 'Earth',
        },
        radius: {
          value: 0.359,
          scale: 'Jupiter',
        },
        orbit: {
          period: {
            value: 31.8,
            scale: 'days',
          },
          radius: {
            value: 0.2138,
            scale: 'AU',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'f',
        mass: {
          value: 9.6,
          scale: 'Earth',
        },
        radius: {
          value: 0.398,
          scale: 'Jupiter',
        },
        orbit: {
          period: {
            value: 41,
            scale: 'days',
          },
          radius: {
            value: 0.2535,
            scale: 'AU',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
  {
    name: 'HD 15906',
    stars: [{ label: 'A', class: 'K', mass: { value: 9999, scale: 'Sun' } }],
    planets: [
      {
        label: 'b',
        mass: {
          value: 5.65,
          scale: 'Earth',
        },
        radius: {
          value: 0.2,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.09,
            scale: 'AU',
          },
          period: {
            value: 10.9,
            scale: 'days',
          },
          eccentricity: 0.11,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'c',
        mass: {
          value: 8.91,
          scale: 'Earth',
        },
        radius: {
          value: 0.261,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.141,
            scale: 'AU',
          },
          period: {
            value: 21.6,
            scale: 'days',
          },
          eccentricity: 0.04,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
  {
    name: 'TRAPPIST-1',
    stars: [{ label: 'A', class: 'M', mass: { value: 9999, scale: 'Sun' } }],
    planets: [
      {
        label: 'b',
        mass: {
          value: 1.374,
          scale: 'Earth',
        },
        radius: {
          value: 1.116,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.01154,
            scale: 'AU',
          },
          period: {
            value: 1.5,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'c',
        mass: {
          value: 1.308,
          scale: 'Earth',
        },
        radius: {
          value: 1.097,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.0158,
            scale: 'AU',
          },
          period: {
            value: 2.4,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'd',
        mass: {
          value: 0.388,
          scale: 'Earth',
        },
        radius: {
          value: 0.788,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.02227,
            scale: 'AU',
          },
          period: {
            value: 4,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'e',
        mass: {
          value: 0.692,
          scale: 'Earth',
        },
        radius: {
          value: 0.92,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.02925,
            scale: 'AU',
          },
          period: {
            value: 6.1,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'f',
        mass: {
          value: 1.039,
          scale: 'Earth',
        },
        radius: {
          value: 1.045,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.03849,
            scale: 'AU',
          },
          period: {
            value: 9.2,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'g',
        mass: {
          value: 1.321,
          scale: 'Earth',
        },
        radius: {
          value: 1.129,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.04683,
            scale: 'AU',
          },
          period: {
            value: 12.4,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'h',
        mass: {
          value: 0.326,
          scale: 'Earth',
        },
        radius: {
          value: 0.755,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.06189,
            scale: 'AU',
          },
          period: {
            value: 18.8,
            scale: 'days',
          },
          eccentricity: 0.01,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
  {
    name: '55 Cancri',
    stars: [
      {
        label: 'A',
        class: 'K',
        mass: { value: 0.905, scale: 'Sun' },
        radius: { value: 0.943, scale: 'Sun' },
        temperature: { value: 5172, scale: 'K' },
      },
      {
        label: 'B',
        class: 'M',
        mass: { value: 0.264, scale: 'Sun' },
        radius: { value: 0.268, scale: 'Sun' },
        temperature: { value: 3320, scale: 'K' },
      },
    ],
    planets: [
      {
        label: 'b',
        mass: {
          value: 0.8306,
          scale: 'Jupiter',
        },
        radius: {
          value: 1.24,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.1134,
            scale: 'AU',
          },
          period: {
            value: 14.7,
            scale: 'days',
          },
          eccentricity: 0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'c',
        mass: {
          value: 0.1714,
          scale: 'Jupiter',
        },
        radius: {
          value: 0.76,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.2373,
            scale: 'AU',
          },
          period: {
            value: 44.4,
            scale: 'days',
          },
          eccentricity: 0.03,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'd',
        mass: {
          value: 3.878,
          scale: 'Jupiter',
        },
        radius: {
          value: 1.16,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 5.957,
            scale: 'AU',
          },
          period: {
            value: 5584.5,
            scale: 'days',
          },
          eccentricity: 0.13,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'e',
        mass: {
          value: 7.99,
          scale: 'Earth',
        },
        radius: {
          value: 1.875,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.01544,
            scale: 'AU',
          },
          period: {
            value: 0.7,
            scale: 'days',
          },
          eccentricity: 0.05,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'f',
        mass: {
          value: 0.141,
          scale: 'Jupiter',
        },
        radius: {
          value: 0.677,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.7708,
            scale: 'AU',
          },
          period: {
            value: 259.9,
            scale: 'days',
          },
          eccentricity: 0.08,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
  {
    name: '61 Virginis',
    stars: [{ label: 'A', class: 'G', mass: { value: 9999, scale: 'Sun' } }],
    planets: [
      {
        label: 'b',
        mass: {
          value: 5.1,
          scale: 'Earth',
        },
        radius: {
          value: 2.11,
          scale: 'Earth',
        },
        orbit: {
          radius: {
            value: 0.050201,
            scale: 'AU',
          },
          period: {
            value: 4.2,
            scale: 'days',
          },
          eccentricity: 0.12,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'c',
        mass: {
          value: 18.2,
          scale: 'Earth',
        },
        radius: {
          value: 0.398,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.2175,
            scale: 'AU',
          },
          period: {
            value: 38,
            scale: 'days',
          },
          eccentricity: 0.14,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
      {
        label: 'd',
        mass: {
          value: 22.9,
          scale: 'Earth',
        },
        radius: {
          value: 0.456,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 0.476,
            scale: 'AU',
          },
          period: {
            value: 123,
            scale: 'days',
          },
          eccentricity: 0.35,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
  {
    name: 'HD 100546',
    stars: [
      {
        label: 'A',
        class: 'B',
        mass: { value: 9999, scale: 'Sun' },
        temperature: { value: 9800, scale: 'K' },
      },
    ],
    planets: [
      {
        label: 'b',
        mass: {
          value: 8.5,
          scale: 'Jupiter',
        },
        radius: {
          value: 6.9,
          scale: 'Jupiter',
        },
        orbit: {
          radius: {
            value: 53.0,
            scale: 'AU',
          },
          period: {
            value: 90958,
            scale: 'days',
          },
          eccentricity: 0.0,
          theta: {
            value: Math.random() * 2 * Math.PI,
            units: 'radians',
          },
        },
      },
    ],
  },
];
