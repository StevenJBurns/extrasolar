import { DomainError } from '@domain/types';
import { NonEmptyString } from '@domain/primitives';
import { Mass, Temperature } from '@domain/values';
import { Either, Left, Right } from '@utility/functional/monads/index.ts';

type StarError = DomainError<'StarError'>;
type SpectralType = 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M';
type ErrorMessageHandler = (context: unknown) => string;
type ErrorReason = 'InvalidStarParams';
type NewStarParams = Partial<Star>;

export type Star = {
  id: NonEmptyString;
  mass: Mass;
  radius: number;
  temperature: Temperature;
  spectralType: SpectralType;
  age: number;
};

function createError(reason: ErrorReason, context?: unknown): Either<StarError, never> {
  const errorMessageLookup: Record<ErrorReason, ErrorMessageHandler> = {
    InvalidStarParams: ctx => `Invalid new Star params.  received: ${ctx}`,
  };

  return Left({
    type: 'StarError',
    reason,
    message: errorMessageLookup[reason](context),
  } as const);
}

function createStar(params: NewStarParams): Either<StarError, Star> {
  const { mass, radius, temperature, spectralType, age } = params;
  console.log({ params });
  if (!mass || mass.value <= 0) return createError('InvalidStarParams', mass);
  if (!radius || radius <= 0) return createError('InvalidStarParams', radius);
  if (!temperature || temperature.value <= 0)
    return createError('InvalidStarParams', temperature);
  if (!spectralType) return createError('InvalidStarParams', spectralType);
  if (!age || age <= 0) return createError('InvalidStarParams', age);

  return Right({
    id: 'some Id' as NonEmptyString,
    mass,
    radius,
    temperature,
    spectralType,
    age,
  } as Star);
}

export const Star = {
  create: createStar,
};
