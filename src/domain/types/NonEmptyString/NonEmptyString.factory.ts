import { NonEmptyString, NonEmptyStringError, isNonEmptyString } from "./";

export function createNonEmptyString(value: string): NonEmptyString {
  if (!isNonEmptyString(value)) throw new NonEmptyStringError('oops');

  return value as NonEmptyString;
}
