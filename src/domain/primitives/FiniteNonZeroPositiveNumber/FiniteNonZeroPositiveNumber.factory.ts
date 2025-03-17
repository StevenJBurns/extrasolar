import { Either, Left, Right } from '@utility/functional/monads';
import { FiniteNonZeroPositiveNumber } from './FiniteNonZeroPositiveNumber.type.ts';
import {
  FiniteNonZeroPositiveNumberError,
  createFiniteNonZeroPositiveNumberError
} from './FiniteNonZeroPositiveNumber.error.ts';

export function createFiniteNonZeroPositiveNumber(
  value: number
): Either<FiniteNonZeroPositiveNumberError, FiniteNonZeroPositiveNumber> {
  const isInfinite = value === Infinity;
  const isNaN = Number.isNaN(value);
  const isNegative = value <= 0;

  return (isInfinite || isNegative || isNaN)
    ? Left(createFiniteNonZeroPositiveNumberError('Value must be a finite, non-zero positive number'))
    : Right(value as FiniteNonZeroPositiveNumber)
};
