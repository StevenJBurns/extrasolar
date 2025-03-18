import { Either, Right, Left } from '@utility/functional/monads';
import { createFiniteNonZeroPositiveNumber } from '@domain/primitives';
import type { Mass, MassUnit, MassError } from './Mass.types.ts';
import { createMassError } from './Mass.error.ts';

export const createMass = (value: number, unit: MassUnit): Either<MassError, Mass> => {
  const finiteResult = createFiniteNonZeroPositiveNumber(value);
  if (finiteResult.type === 'Left') {
    return Left(createMassError('InvalidValue'));
  }
  return (['kilogram', 'earth', 'jupiter', 'sun'] as const).includes(unit)
    ? Right(Object.freeze({ value: finiteResult.value, unit }))
    : Left(createMassError('InvalidUnit'));
};
