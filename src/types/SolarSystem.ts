import { Star } from './Star';
import { Planet } from './Planet';

export type SolarSystem = {
  star: Star,
  planets: Array<Planet>,
};
