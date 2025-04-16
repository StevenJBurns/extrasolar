import { Brand, DomainError } from '@domain/types';
import { Either, Left, Right } from '@utility/functional/monads';

export type NonEmptyString = Brand<'NonEmptyString', string>;
type NonEmptyStringError = DomainError<'NonEmptyStringError'>;
type ErrorReason = 'InvalidInputType' | 'InvalidInputValue';

function createError(reason: ErrorReason): Either<NonEmptyStringError, never> {
  const errorMessageLookup: Record<ErrorReason, string> = {
    InvalidInputType: 'input must be a string',
    InvalidInputValue: 'input string cannot be empty',
  };

  return Left({
    type: 'NonEmptyStringError',
    reason,
    message: errorMessageLookup[reason],
  } as NonEmptyStringError);
}

function create(inputString: string): Either<NonEmptyStringError, NonEmptyString> {
  if (typeof inputString !== 'string') return createError('InvalidInputType');
  if (inputString.length === 0) return createError('InvalidInputValue');

  return Right(inputString as NonEmptyString);
}

const isNonEmptyString = (value: unknown): value is NonEmptyString =>
  typeof value === 'string' && value !== '';

const toString = (value: NonEmptyString): string => value as string;

export const NonEmptyString = {
  create: create,
  isNonEmptyString,
  toString,
};
