import { Brand, DomainError } from '@domain/types';

export type NonEmptyString = Brand<string, 'NonEmptyString'>;

export type NonEmptyStringError = DomainError & {
  code: 'NonEmptyStringError';
  reason: 'InvalidValue';
  message: 'NonEmptyString cannot contain an empty string';
};
