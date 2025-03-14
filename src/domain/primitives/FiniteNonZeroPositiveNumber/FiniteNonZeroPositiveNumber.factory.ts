import { FiniteNonZeroPositiveNumber } from './FiniteNonZeroPositiveNumber.type.ts';
import { Either, Left, Right } from '../../../utility/functional/monads/Either/Either.ts';

export function createFiniteNonZeroPositiveNumber(
  value: number
): Either<Error, FiniteNonZeroPositiveNumber> {
  return value > 0
    ? Right(value as FiniteNonZeroPositiveNumber)
    : Left(new Error('Value must be greater than zero'));
};
