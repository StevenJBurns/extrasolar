import { Brand, DomainError } from '@domain/types';

export type ErrorReason = 'InvalidType';
export type TrimmedStringError = DomainError<ErrorReason>;
export type TrimmedString = Brand<'TrimmedString', string>;
