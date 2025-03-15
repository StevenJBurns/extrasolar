import { DomainError } from '@domain/types';

export type FiniteNumberError = DomainError & {
  code: 'FiniteNumberError';
  message: 'Value must be a finite number';
};

export const createFiniteNumberError = (
  message: FiniteNumberError['message'] = 'Value must be a finite number'
): FiniteNumberError =>
  Object.freeze({ code: 'FiniteNumberError', message });
