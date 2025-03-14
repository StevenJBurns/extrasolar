import { FiniteNumber } from './FiniteNumber.type.ts';
import { FiniteNumberError, createFiniteNumberError } from './FiniteNumber.error.ts';
import { Either, Left, Right } from 'src/utility/functional/monads/Either/Either.ts';

export function createFiniteNumber(
  value: number
): Either<FiniteNumberError, FiniteNumber> {
  return Number.isFinite(value)
    ? Right(value as FiniteNumber)
    : Left(createFiniteNumberError('Value must be a finite number'));
};
