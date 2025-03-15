import { Star } from '@domain/entities/Star/Star.class.ts';
import { Planet } from '@domain/entities/Planet/Planet.class';

export type SolarSystemParameters = {
  id: string,
  stars: Array<Star>,
  planets: Array<Planet>,
};
