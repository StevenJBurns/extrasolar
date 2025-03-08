import { Star } from './Star.type.ts';
import { Planet } from './Planet.type.ts';

export type SolarSystem = {
  name: string;
  stars: Array<Star>;
  planets: Array<Planet>;
};
