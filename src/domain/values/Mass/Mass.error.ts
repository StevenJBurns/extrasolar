import { MassErrorReason } from '@domain/values';

const errorMessages: Record<MassErrorReason, string> = {
  InvalidValue: 'Mass.value must be a finite non-zero positive number',
  InvalidUnit: "Mass.unit must be 'Kilogram' | 'earth' | 'jupiter' | 'sun'",
};

export const createMassError = (reason: MassErrorReason) => (
  Object.freeze({
    code: 'MassError',
    reason,
    message: errorMessages[reason],
  })
);
