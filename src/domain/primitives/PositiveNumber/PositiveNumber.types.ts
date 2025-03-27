import { DomainError } from '@domain/types';

type PositiveNumberErrorReason = 'OutOfRange' | 'InvalidValue';

export type PositiveNumberError = DomainError & {
  tag: 'PositiveNumberError';
  reason: PositiveNumberErrorReason;
  context: string;
  message: string;
};

export type PositiveNumber = number & { readonly _tag: unique symbol };
