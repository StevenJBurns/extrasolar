import { Brand, DomainError } from '@domain/types';
import { Either, Left, Right } from '@utility/functional/monads';

type PositiveNumberType = Brand<'PositiveNumber', number>;
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

function createPositiveNumber(
  inputValue: number,
): Either<PositiveNumberError, PositiveNumberType> {
  if (Number.isNaN(inputValue)) return createError('InvalidInputValue', inputValue);
  if (!isFinite(inputValue)) return createError('OutOfRange', inputValue);
  if (inputValue <= 0) return createError('InvalidInputValue', inputValue);

  return Right(inputValue as PositiveNumberType);
}

const isPositiveNumber = (inputValue: number): inputValue is PositiveNumberType =>
  isFinite(inputValue) && inputValue > 0;

const toNumber = (inputValue: PositiveNumberType): number => inputValue as number;

export type PositiveNumber = PositiveNumberType;

export const PositiveNumber = {
  create: createPositiveNumber,
  isPositiveNumber,
  toNumber,
};
