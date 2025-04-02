import { TrimmedString, TrimmedStringError, ErrorReason } from './TrimmedString.types.ts';
import { Either, Left, Right } from '@utility/functional/monads';

export const createTrimmedStringError = (reason: ErrorReason): TrimmedStringError => {
  const errorMessages: Record<ErrorReason, string> = {
    InvalidType: 'invalid input type',
  };

  return Object.freeze({ reason, message: errorMessages[reason], values: '' } as const);
};

export const createTrimmedString = (
  input: unknown,
): Either<TrimmedStringError, TrimmedString> => {
  return typeof input !== 'string'
    ? Left(createTrimmedStringError('InvalidType'))
    : Right(input.trim() as TrimmedString);
};
