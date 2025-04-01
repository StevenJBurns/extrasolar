import { Planet } from './Planet.types.ts';

export function createPlanet(): Planet {
  return {
    id: '',
    mass: 0,
    radius: 0,
    semiMajorAxis: 0,
    eccentricity: 0,
    period: 0,
  };
}
