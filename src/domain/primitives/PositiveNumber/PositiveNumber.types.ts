import { Brand, DomainError } from '@domain/types';

export type ErrorReason = 'InvalidType' | 'InvalidValue' | 'OutOfRange';
export type PositiveNumberError = DomainError<ErrorReason>;
export type PositiveNumber = Brand<'PositiveNumber', number>;
