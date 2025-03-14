// src/domain/primitives/FiniteNumber/FiniteNumber.error.ts
import { DomainError } from '@domain/types/errors/DomainError/DomainError.interface.ts';

export type FiniteNumberError = DomainError & {
  code: 'FiniteNumberError';
  message: 'Value must be a finite number';
};

export const createFiniteNumberError = (
  message: FiniteNumberError['message'] = 'Value must be a finite number'
): FiniteNumberError =>
  Object.freeze({ code: 'FiniteNumberError', message });
  