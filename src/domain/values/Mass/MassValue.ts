import { Brand, DomainError } from '@domain/types';
import { FiniteNumber, PositiveNumber } from '@domain/primitives';
import { Either, Left, Right } from '@utility/functional/monads';

export type MassValue = Brand<'MassValue', number>;

type MassValueError = DomainError<'MassValueError'>;
type ErrorReason = 'InfiniteInput' | 'NegativeInput';

function createError(reason: ErrorReason): Either<MassValueError, never> {
  return Left({
    type: 'MassValueError',
    reason,
    message: '',
  });
}

export function createMassValue(input: number): Either<Array<MassValueError>, MassValue> {
  const finiteResult = FiniteNumber.create(input as number);
  const positiveResult = PositiveNumber.create(input as number);
  const errors: Array<typeof Left> = [];

  const isValid = FiniteNumber.isFinite(input) && PositiveNumber.isPositiveNumber(input);

  return errors.length > 0 ? Left([]) : Right(input as MassValue);
}
