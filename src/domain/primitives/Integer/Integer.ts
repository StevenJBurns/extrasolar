import { Brand, DomainError } from '@domain/types';
import { Either, Left, Right } from '@utility/functional/monads';

type IntegerType = Brand<'Integer', number>;
type IntegerError = DomainError<'Integer'>;
type ErrorReason = 'InvalidInput' | 'OutOfBounds';

const errorMessageLookup: Record<ErrorReason, (context: unknown) => string> = {
  InvalidInput: context => `input value is not an integer. received: ${context}`,
  OutOfBounds: context => `input value is out of bounds. received: ${context}`,
};

function createError(reason: ErrorReason, value: unknown) {
  return Left({
    type: 'Integer',
    reason,
    message: errorMessageLookup[reason](value),
  } as const);
}

function createInteger(inputValue: number): Either<IntegerError, Integer> {
  const reason: ErrorReason =
    inputValue === Infinity || inputValue === -Infinity ? 'OutOfBounds' : 'InvalidInput';

  return Number.isInteger(inputValue)
    ? Right(inputValue as Integer)
    : createError(reason, inputValue);
}

export type Integer = IntegerType;

export const Integer = {
  create: createInteger,
  isInteger: Number.isInteger,
};
