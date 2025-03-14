import { DomainError } from '../../types/errors/DomainError/DomainError.interface.ts';

export type NonEmptyStringError = DomainError & {
  code: 'NonEmptyStringError';
  message: 'String must not be empty';
};

export const createNonEmptyStringError = (message: NonEmptyStringError['message']): NonEmptyStringError =>
  Object.freeze({
    code: 'NonEmptyStringError',
    message
  });
  