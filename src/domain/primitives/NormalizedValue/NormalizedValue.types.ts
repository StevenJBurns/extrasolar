import { DomainError } from '@domain/types';

export type NormalizedValue = number & { readonly _tag: unique symbol };
export type NormalizedValueError = DomainError<'NormalizedValueError'>;
export type ErrorReasons = 'OutOfRange' | 'Infinite' | 'NaN';
