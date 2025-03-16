import type { DomainError } from '@domain/types';
import type { FiniteNumber } from '@domain/primitives';

export type AngleUnit = 'degrees' | 'radians';

export type AngleErrorReason = 'InvalidValue' | 'OutOfRange' | 'InvalidUnit' | 'UnitMismatch';

export type AngleError = DomainError & {
  code: 'AngleError',
  reason: AngleErrorReason,
  message: string,
};

export type Angle = {
  value: FiniteNumber;
  unit: AngleUnit;
};
