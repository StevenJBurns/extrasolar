import { createAngleError } from './Angle.error.ts';
import type { AngleUnit, AngleError } from '@domain/values';
import { type Either, Left, Right, chainEither } from 'src/utility/functional/monads';

const ANGLE_UNIT_BOUNDS: Record<AngleUnit, number> = {
  degrees: 360,
  radians: 2 * Math.PI,
};

const checkFinite = (value: number): Either<AngleError, number> =>
  isNaN(value) || !Number.isFinite(value) ? Left(createAngleError('InvalidValue')) : Right(value);

const checkUnit = (unit: AngleUnit): Either<AngleError, AngleUnit> =>
  unit in ANGLE_UNIT_BOUNDS ? Right(unit) : Left(createAngleError('InvalidUnit'));

const checkRange = (value: number, unit: AngleUnit): Either<AngleError, void> => {
  const max = ANGLE_UNIT_BOUNDS[unit];
  return value < 0 || value >= max ? Left(createAngleError('OutOfRange')) : Right(undefined);
};

export const validateAngle = (value: number, unit: AngleUnit): Either<AngleError, void> =>
  chainEither(() =>
    chainEither(() => checkRange(value, unit))(
      checkUnit(unit)
    )
  )(checkFinite(value));
