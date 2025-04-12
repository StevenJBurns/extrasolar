import { Brand, DomainError } from '@domain/types';
import { Either, Left, Right } from '@utility/functional/monads';

type FiniteNumberType = Brand<'FiniteNumber', number>;
type FiniteNumberError = DomainError<'FiniteNumberError'>;
type ErrorReason = 'InvalidInput' | 'OutOfBounds';

const errorMessageLookup: Record<ErrorReason, (context: unknown) => string> = {
  OutOfBounds: context => `input value is infinite. received: ${context}`,
  InvalidInput: context => `input value is invalid. received: ${context}`,
};

function createError(reason: ErrorReason, value: unknown) {
  return Left({
    type: 'FiniteNumberError',
    reason,
    message: errorMessageLookup[reason](value),
  } as const);
}

function createFiniteNumber(inputValue: number): Either<FiniteNumberError, FiniteNumberType> {
  const reason: ErrorReason = isNaN(inputValue) ? 'InvalidInput' : 'OutOfBounds';

  return Number.isFinite(inputValue)
    ? Right(inputValue as FiniteNumberType)
    : createError(reason, inputValue);
}

export type FiniteNumber = FiniteNumberType;

export const FiniteNumber = {
  create: createFiniteNumber,
  isFinite: Number.isFinite,
};
