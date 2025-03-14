import { DomainError } from '@domain/types/errors/DomainError/DomainError.interface';

export type NonZeroPositiveNumberError = DomainError & {
  type: 'InvalidNonZeroPositiveNumber';
  reason: 'nonPositive';
  value: number;
};
