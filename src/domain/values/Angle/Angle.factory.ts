import type { Angle, AngleUnit, AngleError } from '@domain/values';
import { FiniteNumber, createFiniteNumber } from '@domain/primitives';
import { createAngleError } from './Angle.error.ts';
import { validateAngle } from './Angle.validate.ts';
import { type Either, Left, Right, chainEither } from '@utility/functional/monads';

export const createAngle = (value: number, unit: AngleUnit): Either<AngleError, Angle> =>
  chainEither<AngleError, void, Angle>(() => {
    const finiteResult = createFiniteNumber(value);

    return chainEither<AngleError, FiniteNumber, Angle>((finiteValue: FiniteNumber) =>
      Right(Object.freeze({ value: finiteValue, unit }))
    )(finiteResult.type === 'Left' ? Left(createAngleError('InvalidValue')) : finiteResult);
  })(validateAngle(value, unit));
