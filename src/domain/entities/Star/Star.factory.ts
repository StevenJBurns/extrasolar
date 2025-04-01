import { Star } from '@domain/entities/Star/Star.types.ts';

export function createStar(): Star {
  return {
    id: '',
    mass: 0,
    radius: 0,
    temperature: 0,
    age: 0,
  } as Star;
}
