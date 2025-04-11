import { Brand, DomainError } from '@domain/types';
import { Either, Left, Right } from '@utility/functional/monads';

type PositiveNumber = Brand<'PositiveNumber', number>;
type PositiveNumberError = DomainError<'PositiveNumberError'>;
type ErrorReason = 'InvalidInputValue' | 'OutOfRange';

const errorMessageLookup: Record<ErrorReason, (context: unknown) => string> = {
  InvalidInputValue: context => `input value is not a positive number. received: ${context}`,
  OutOfRange: context => `input value is out of bounds. received: ${context}`,
};

function createError(reason: ErrorReason, value: unknown) {
  return Left({
    type: 'PositiveNumberError',
    reason,
    message: errorMessageLookup[reason](value),
  } as const);
}

function createPositiveNumber(inputValue: number): Either<PositiveNumberError, PositiveNumber> {
  if (Number.isNaN(inputValue)) return createError('InvalidInputValue', inputValue);
  if (!isFinite(inputValue)) return createError('OutOfRange', inputValue);
  if (inputValue <= 0) return createError('InvalidInputValue', inputValue);

  return Right(inputValue as PositiveNumber);
}

const isPositiveNumber = (inputValue: number): inputValue is PositiveNumber =>
  isFinite(inputValue) && inputValue > 0;

const toNumber = (inputValue: PositiveNumber): number => inputValue as number;

export const PositiveNumber = {
  create: createPositiveNumber,
  isPositiveNumber,
  toNumber,
};
