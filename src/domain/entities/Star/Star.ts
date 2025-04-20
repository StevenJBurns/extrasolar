import { NonEmptyString } from '@domain/primitives';
import { DomainError } from '@domain/types';
import { Mass, Temperature } from '@domain/values';
import { Either, Left, Right } from '@utility/functional/monads/index.ts';

type SpectralType = 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M';
type StarError = DomainError<'StarError'>;
type ErrorMessageHandler = (context: unknown) => string;
type ErrorReason =
  | 'InvalidId'
  | 'InvalidMass'
  | 'InvalidRadius'
  | 'InvalidTemperature'
  | 'InvalidSpectralType'
  | 'InvalidAge';

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
    InvalidId: ctx => `Invalid ID.  received: ${ctx}`,
    InvalidMass: ctx => `Invalid Mass.  Received: ${ctx}`,
    InvalidRadius: ctx => `Invalid Radius.  Received: ${ctx}`,
    InvalidTemperature: ctx => `Invalid Mass.  Received: ${ctx}`,
    InvalidSpectralType: ctx => `Invalid Mass.  Received: ${ctx}`,
    InvalidAge: ctx => `Invalid Mass.  Received: ${ctx}`,
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
  if (!mass || mass.value <= 0) return createError('InvalidMass', mass);
  if (!radius || radius <= 0) return createError('InvalidRadius');
  if (!temperature || temperature.value <= 0) return createError('InvalidTemperature');
  if (!spectralType) return createError('InvalidSpectralType');
  if (!age || age <= 0) return createError('InvalidAge');

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
