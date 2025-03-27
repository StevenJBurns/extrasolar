import { FiniteNumber, FiniteNumberError } from './FiniteNumber.types.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export function createFiniteNumberError() {
  return Object.freeze({
    code: 'FiniteNumberError',
    reason: 'OutOfRange',
    message: 'FiniteNumber must be a finite number',
  });
}

export function createFiniteNumber(value: number): Either<FiniteNumberError, FiniteNumber> {
  return Number.isFinite(value)
    ? Right(value as FiniteNumber)
    : Left(createFiniteNumberError() as FiniteNumberError);
}
