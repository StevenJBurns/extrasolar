import { Brand } from '@domain/types';
import { Either, Right } from '@utility/functional/monads';

type TrimmedStringType = Brand<'TrimmedString', string>;

function createTrimmedString(inputString: string): Either<never, TrimmedString> {
  return Right(inputString.trim() as TrimmedString);
}

const isTrimmedString = (x: unknown): x is TrimmedString =>
  typeof x === 'string' && x === x.trim();

const toString = (trimmedString: TrimmedString): string => trimmedString as string;

export type TrimmedString = TrimmedStringType;

export const TrimmedString = {
  create: createTrimmedString,
  isTrimmedString,
  toString,
};
