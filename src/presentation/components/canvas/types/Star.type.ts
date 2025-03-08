import { Mass } from './Mass.type.ts';
import { Radius } from './Radius.type.ts';
import { Temperature } from './Temperature.type.ts';

export type Star = {
  label: string;
  mass?: Mass;
  radius?: Radius;
  temperature?: Temperature;
  class: 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M';
};
