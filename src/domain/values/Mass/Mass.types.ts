import type { FiniteNonZeroPositiveNumber } from '@domain/primitives/FiniteNonZeroPositiveNumber/FiniteNonZeroPositiveNumber.type.ts';

export type MassUnit = 'kilogram' | 'earth' | 'jupiter' | 'sun';

export type MassErrorReason = 'InvalidValue' | 'InvalidUnit';

export type MassError = {
  code: 'MassError';
  reason: MassErrorReason;
  message: string;
};

export type Mass = {
  value: FiniteNonZeroPositiveNumber;
  unit: MassUnit;
};
