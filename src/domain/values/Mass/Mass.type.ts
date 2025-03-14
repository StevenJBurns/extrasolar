import { NonZeroPositiveNumber } from '../../primitives/NonZeroPositiveNumber/NonZeroPositiveNumber.type.ts';
import { MassUnit } from './MassUnit/MassUnit.enum.ts';

export type Mass = {
  value: NonZeroPositiveNumber,
  unit: MassUnit,
};
