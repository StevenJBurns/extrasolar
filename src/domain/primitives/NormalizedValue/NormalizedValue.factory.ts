import { NormalizedValue, NormalizedValueError } from './NormalizedValue.types.ts';
import { createNormalizedValueError } from './NormalizedValue.errors.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export function createNormalizedValue(
  value: number,
): Either<NormalizedValueError, NormalizedValue> {
  const isInfinite = value === Infinity || value === -Infinity;
  const isOutOfBounds = value < 0 || value > 1;
  const isNan = Number.isNaN(value);

  if (isInfinite) return Left(createNormalizedValueError('Infinite'));
  if (isOutOfBounds) return Left(createNormalizedValueError('OutOfRange'));
  if (isNan) return Left(createNormalizedValueError('NaN'));

  return Right(value as NormalizedValue);
}
