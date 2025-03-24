import { DomainError } from '@domain/types';

export type FiniteNumberError = DomainError & {
  code: 'FiniteNumberError';
  reason: 'OutOfRange';
  message: 'FiniteNumber must be a finite number';
};

export type FiniteNumber = number & { readonly _tag: unique symbol };
