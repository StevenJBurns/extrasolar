import { NonEmptyString, NonEmptyStringError } from './NonEmptyString.types.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export function createNonEmptyString(
  value: string,
): Either<NonEmptyStringError, NonEmptyString> {
  const isEmpty = value === null || value === undefined || value.length === 0;

  return isEmpty ? Left(createNonEmptyStringError()) : Right(value as NonEmptyString);
}

export function createNonEmptyStringError() {
  return Object.freeze({
    code: 'NonEmptyStringError',
    reason: 'InvalidValue',
    message: 'NonEmptyString cannot contain an empty string',
  } as const);
}
