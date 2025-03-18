import { Either, Right, Left } from 'src/utility/functional/monads';
import { createFiniteNonZeroPositiveNumber } from '@domain/primitives';
import type { Mass, MassUnit, MassError } from './Mass.types.ts';
import { createMassError } from './Mass.error.ts';

const MASS_UNITS: Array<MassUnit> = ['kilogram', 'earth', 'jupiter', 'sun'];

export const validateMass = (value: number, unit: MassUnit): Either<MassError, Mass> => {
  const finiteResult = createFiniteNonZeroPositiveNumber(value);
  if (finiteResult.type === 'Left') {
    return Left(createMassError('InvalidValue'));
  }
  if (!MASS_UNITS.includes(unit)) {
    return Left(createMassError('InvalidUnit'));
  }
  return Right(Object.freeze({ value: finiteResult.value, unit }));
};
