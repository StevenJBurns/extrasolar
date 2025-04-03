import { isPositiveNumber, toNumber } from './PositiveNumber.utils.ts';
import { createPositiveNumber } from './PositiveNumber.factory.ts';

export const PositiveNumber = {
  create: createPositiveNumber,
  isPositiveNumber,
  toNumber,
};
