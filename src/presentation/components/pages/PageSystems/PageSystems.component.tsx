import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeAudioSource } from 'state/actions/ui';
// import { LinearProgress } from '@mui/material';
// import { Page } from '../Page/Page.component';
import { PageHeader } from '../index.ts';
import { Canvas } from '../../canvas';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
// import SystemsOGG from 'assets/audio/systems.ogg';

type TMass = {
  value: number;
  scale: 'Earth' | 'Jupiter' | 'Sun';
};

type TRadius = {
  value: number;
  scale: 'Earth' | 'Jupiter' | 'Sun';
};

type TTemperature = {
  value: number;
  scale: 'K' | 'C' | 'F';
};

type TOribitalRadius = {
  value: number;
  scale: 'AU';
};

type TOrbitalPeriod = {
  value: number;
  scale: 'years' | 'days' | 'hours';
};

type TOrbit = {
  radius: TOribitalRadius;
  period: TOrbitalPeriod;
  eccentricity: number;
  theta?: number;
};

type TPlanet = {
  label: string;
  mass: TMass;
  radius: TRadius;
  orbit: TOrbit;
};

type TStar = {
  label: string;
  mass?: TMass;
  radius?: TRadius;
  temperature?: TTemperature;
  class: 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M';
};

export type TSolarSystem = {
  name: string;
  stars: Array<TStar>;
  planets: Array<TPlanet>;
};

export const mockData: Array<TSolarSystem> = [
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
          theta: Math.random() * 2 * Math.PI,
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
        },
      },
    ],
  },
];

export const PageSystems = () => {
  const [selectedSolarSystem, setSelectedSolarSystem] = useState(
    mockData[0].name,
  );

  const handleChange = (e: SelectChangeEvent<string>) =>
    setSelectedSolarSystem(e.target.value);

  return (
    <>
      <PageHeader />
      <Box sx={{ position: 'static' }}>
        <Canvas
          systemData={
            mockData.find(system => system.name === selectedSolarSystem) ??
            mockData[0]
          }
        />
        <Box p={2} position={'absolute'} color={'azure'} zIndex={1}>
          <FormControl
            sx={{ my: 1, minWidth: 180, backgroundColor: '#292929' }}
            variant="filled"
            size="small"
          >
            <InputLabel>Selected System</InputLabel>
            <Select
              onChange={handleChange}
              value={selectedSolarSystem}
              sx={{
                color: '#f0f0f0',
              }}
            >
              {mockData
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map(s => (
                  <MenuItem key={s.name} value={s.name}>
                    {s.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Box mt={4}>
            {mockData
              .find(system => system.name === selectedSolarSystem)
              ?.stars.map(star => (
                <Box key={star.label}>
                  <Typography variant="body2">
                    {selectedSolarSystem} {star.label}
                  </Typography>
                  {/* <Typography variant="body2">Class: {star.class}</Typography>
                <Typography variant="body2">
                  Mass: {star.mass?.value ?? '--'} M<sub>&#9737;</sub>
                </Typography>
                <Typography variant="body2">
                  Radius: {star.radius?.value ?? '--'} R<sub>&#9737;</sub>
                </Typography>
                <Typography variant="body2">
                  Temperature: {star.temperature?.value ?? '--'}K
                </Typography> */}
                </Box>
              )) ?? <Typography>--</Typography>}
          </Box>
          <Divider sx={{ my: 1.5, bgcolor: '#f0f0f0' }} />
          {mockData
            .find(system => system.name === selectedSolarSystem)
            ?.planets.map(planet => (
              <Box key={planet.label}>
                <Typography variant="body2">
                  {selectedSolarSystem} {planet.label}
                </Typography>
              </Box>
            ))}
          {/* <PageFooter /> */}
        </Box>
      </Box>
    </>
  );
};
