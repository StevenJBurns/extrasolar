import { DomainError } from '@domain/types';

export type NonEmptyStringError = DomainError & {
  code: 'NonEmptyStringError';
  reason: 'InvalidValue';
  message: 'message cannot be empty';
};

export type NonEmptyString = string & { readonly _tag: unique symbol };
