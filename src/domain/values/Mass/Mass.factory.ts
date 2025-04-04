import { Either, Right, chainEither } from '@utility/functional/monads';
import { createFiniteNonZeroPositiveNumber } from '@domain/primitives';
import { Mass, MassUnit, MassError } from './Mass.types.ts';
import { validateMass } from './Mass.validate.ts';

export const createMass = (inputValue: number, unit: MassUnit): Either<MassError, Mass> =>
  chainEither<MassError, void, Mass>(() => {
    const { value } = createFiniteNonZeroPositiveNumber(inputValue);

    return Right(Object.freeze({ value, unit }));
  })(validateMass(inputValue, unit));
