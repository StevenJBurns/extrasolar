import { NonEmptyString } from '@domain/primitives/NonEmptyString/NonEmptyString.types';
import { DomainError } from '@domain/types';

export type NormalizedValueErrorReasons = 'OutOfRange' | 'Infinite' | 'NaN';

export type NormalizedValueError = DomainError & {
  code: 'NormalizedValueError';
  reason: 'OutOfRange';
  message: NonEmptyString;
};

export type NormalizedValue = number & { readonly _tag: unique symbol };
