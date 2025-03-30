import { createNonEmptyString } from './NonEmptyString.factory.ts';
import { isNonEmptyString, toString } from './NonEmptyString.utils.ts';

export const NonEmptyString = {
  create: createNonEmptyString,
  isNonEmptyString,
  toString,
} as const;
