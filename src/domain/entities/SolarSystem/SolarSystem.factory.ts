import { SolarSystem } from './SolarSystem.types.ts';

export function createSolarSystem(): SolarSystem {
  return {
    id: '',
    stars: [],
    planets: [],
  };
}
