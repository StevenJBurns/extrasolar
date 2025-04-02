import { NonEmptyString, NonEmptyStringError, ErrorReason } from './NonEmptyString.types.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export function createNonEmptyStringError(reason: ErrorReason) {
  const errorMessages: Record<ErrorReason, string> = {
    InvalidType: 'invalid input type',
    InvalidValue: 'input cannot be an empty string',
  };

  return Object.freeze({
    reason,
    message: errorMessages[reason],
    values: '',
  } as const);
}

export function createNonEmptyString(
  input: unknown,
): Either<NonEmptyStringError, NonEmptyString> {
  if (typeof input !== 'string') return Left(createNonEmptyStringError('InvalidType'));

  return input === null || input === undefined || input.length === 0
    ? Left(createNonEmptyStringError('InvalidValue'))
    : Right(input as NonEmptyString);
}
