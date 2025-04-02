import { createTrimmedString } from './TrimmedString.factory.ts';
import { isTrimmedString, toString } from './TrimmedString.utils.ts';

export const TrimmedString = {
  create: createTrimmedString,
  isTrimmedString,
  toString,
} as const;
