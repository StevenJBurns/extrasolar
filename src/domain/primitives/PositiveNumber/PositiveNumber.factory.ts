import type { PositiveNumber, PositiveNumberError, ErrorReason } from './PositiveNumber.types';
import { Either, Left, Right } from '@utility/functional/monads';

export function createPositiveNumberError(reason: ErrorReason) {
  const errorReasons: Record<ErrorReason, string> = {
    InvalidType: '',
    InvalidValue: '',
    OutOfRange: '',
  };

  return Object.freeze({
    reason,
    message: errorReasons[reason],
    values: '',
  } as const);
}

export function createPositiveNumber(
  input: unknown,
): Either<PositiveNumberError, PositiveNumber> {
  if (typeof input !== 'number') return Left(createPositiveNumberError('InvalidType'));
  if (isNaN(input)) return Left(createPositiveNumberError('InvalidValue'));
  if (input <= 0) return Left(createPositiveNumberError('OutOfRange'));

  return Right(input as PositiveNumber);
}
