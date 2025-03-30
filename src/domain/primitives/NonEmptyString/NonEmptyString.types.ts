import { Brand, DomainError } from '@domain/types';

export type ErrorReason = 'InvalidType' | 'InvalidValue';

export type NonEmptyStringError = DomainError<ErrorReason>;

export type NonEmptyString = Brand<string, 'NonEmptyString'>;
