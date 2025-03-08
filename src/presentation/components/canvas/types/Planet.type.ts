import { Mass } from './Mass.type.ts';
import { Radius } from './Radius.type.ts';
import { Orbit } from './Orbit.type.ts';

export type Planet = {
  label: string;
  mass: Mass;
  radius: Radius;
  orbit: Orbit;
};
