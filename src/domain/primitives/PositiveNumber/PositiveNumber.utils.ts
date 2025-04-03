import { PositiveNumber } from './PositiveNumber.types.ts';

export const isPositiveNumber = (x: unknown): x is PositiveNumber =>
  typeof x === 'number' && !Number.isNaN(x) && x > 0;

export const toNumber = (x: PositiveNumber): number => x;

export const isGreaterThan = (x: PositiveNumber, threshold: PositiveNumber): boolean =>
  x > threshold;

export const add = (a: PositiveNumber, b: PositiveNumber): PositiveNumber =>
  (a + b) as PositiveNumber;
