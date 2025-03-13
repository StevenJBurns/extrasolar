import { NonZeroPositiveNumber } from './NonZeroPositiveNumber.type.ts';
import { Either, Left, Right } from '../../../utility/functional/monads/Either/Either.ts';

export function createNonZeroPositiveNumber(
  value: number
): Either<Error, NonZeroPositiveNumber> {
  return value > 0
    ? Right(value as NonZeroPositiveNumber)
    : Left(new Error('Value must be greater than zero'));
};
