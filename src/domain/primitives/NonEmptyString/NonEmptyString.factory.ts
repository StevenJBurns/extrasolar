import { NonEmptyString, NonEmptyStringError } from './NonEmptyString.types.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export function createNonEmptyString(
  value: string,
): Either<NonEmptyStringError, NonEmptyString> {
  const isNonEmptyString = value.trim().length > 0;

  return isNonEmptyString ? Right(value as NonEmptyString) : Left(createNonEmptyStringError());
}

export function createNonEmptyStringError() {
  return Object.freeze({
    code: 'NonEmptyStringError',
    reason: 'InvalidValue',
    message: 'NonEmptyString cannot contain an empty string',
  }) as NonEmptyStringError;
}
