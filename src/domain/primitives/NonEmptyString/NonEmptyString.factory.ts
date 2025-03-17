import { NonEmptyString } from './NonEmptyString.type.ts';
import { NonEmptyStringError, createNonEmptyStringError } from "./NonEmptyString.error.ts";
import { Either, Left, Right } from '@utility/functional/monads';

export function createNonEmptyString(value: string): Either<NonEmptyStringError, NonEmptyString> {
  const isNonEmptyString = value.trim().length > 0;

  return isNonEmptyString
    ? Right(value as NonEmptyString)
    : Left(createNonEmptyStringError('String must not be empty'));
};
