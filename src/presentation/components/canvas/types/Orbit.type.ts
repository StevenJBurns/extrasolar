import { Angle } from './Angle.type.ts';
import { Radius } from './Radius.type.ts';

export type Orbit = {
  radius: Radius;
  period: Period;
  eccentricity: number;
  theta?: Angle;
};
