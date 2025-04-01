import { Star } from '@domain/entities/Star/Star.types.ts';
import { Planet } from '@domain/entities/Planet/Planet.types.ts';

export type SolarSystem = {
  id: string;
  stars: Array<Star>;
  planets: Array<Planet>;
};
