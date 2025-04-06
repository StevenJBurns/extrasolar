import { TrimmedString } from './TrimmedString.types.ts';

export const isTrimmedString = (x: unknown): x is TrimmedString =>
  typeof x === 'string' && x === x.trim();

export const toString = (x: TrimmedString): string => x;
