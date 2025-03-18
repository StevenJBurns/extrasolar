import { Either, Right, Left, chainEither } from '@utility/functional/monads';
import { createFiniteNonZeroPositiveNumber } from '@domain/primitives';
import type { Mass, MassUnit, MassError } from './Mass.types.ts';
import { createMassError } from './Mass.error.ts';
import { validateMass } from './Mass.validate.ts';

export const createMass = (value: number, unit: MassUnit): Either<MassError, Mass> =>
  chainEither<MassError, void, Mass>(() => {
    const finiteResult = createFiniteNonZeroPositiveNumber(value);

    return finiteResult.type === 'Left'
      ? Left(createMassError('InvalidValue'))
      : Right(Object.freeze({ value: finiteResult.value, unit }));
  })(validateMass(value, unit));
