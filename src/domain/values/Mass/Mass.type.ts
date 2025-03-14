import { FiniteNonZeroPositiveNumber } from '../../primitives/FiniteZeroPositiveNumber/FiniteNonZeroPositiveNumber.type.ts';
import { MassUnit } from './MassUnit/MassUnit.enum.ts';

export type Mass = {
  value: FiniteNonZeroPositiveNumber,
  unit: MassUnit,
};
