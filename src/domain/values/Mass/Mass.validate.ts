import { Either, Right, Left } from 'src/utility/functional/monads';
import { createFiniteNonZeroPositiveNumber } from '@domain/primitives';
import type { MassUnit, MassError } from './Mass.types.ts';
import { createMassError } from './Mass.error.ts';

const MASS_UNITS: Array<MassUnit> = ['kilogram', 'earth', 'jupiter', 'sun'];

export const validateMass = (value: number, unit: MassUnit): Either<MassError, void> => {
  const finiteResult = createFiniteNonZeroPositiveNumber(value);
  
  if (finiteResult.type === 'Left') return Left(createMassError('InvalidValue'));

  if (!MASS_UNITS.includes(unit)) return Left(createMassError('InvalidUnit'));

  return Right(undefined);
};
