import { NonEmptyString } from './NonEmptyString.types.ts';

export const isNonEmptyString = (value: unknown): value is NonEmptyString =>
  typeof value === 'string' && value !== '';

export const toString = (value: NonEmptyString): string => value as string;
