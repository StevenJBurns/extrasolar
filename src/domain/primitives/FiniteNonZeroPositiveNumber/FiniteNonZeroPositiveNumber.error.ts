import { DomainError } from '@domain/types/errors/DomainError/DomainError.interface.ts';

export type FiniteNonZeroPositiveNumberError = DomainError & {
  code: 'FiniteNonZeroPositiveNumberError';
  message: 'Value must be a finite, non-zero positive number';
};

export const createFiniteNonZeroPositiveNumberError = (
  message: FiniteNonZeroPositiveNumberError['message'] = 'Value must be a finite, non-zero positive number'
): FiniteNonZeroPositiveNumberError =>
  Object.freeze({ code: 'FiniteNonZeroPositiveNumberError', message });
  