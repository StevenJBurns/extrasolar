import { TemperatureError, TemperatureScale } from '@domain/values';
import { createTemperatureError } from '@domain/values/Temperature/Temperature.error';
import { Either, Left, Right, chainEither } from '@utility/functional/monads';

const TEMPERATURE_LOWER_BOUNDS: Record<TemperatureScale, number> = {
  Kelvin: 0,
  Celsius: -273.15,
  Fahrenheit: -459.67,
};

const checkValue = (value: number, scale: TemperatureScale): Either<TemperatureError, void> => {
  return value < TEMPERATURE_LOWER_BOUNDS[scale]
    ? Left(createTemperatureError('OutOfRange'))
    : Right(undefined);
};

const checkScale = (scale: string): Either<TemperatureError, TemperatureScale> => {
  return ['Kelvin', 'Celsius', 'Fahrenheit'].includes(scale)
    ? Right(scale as TemperatureScale)
    : Left(createTemperatureError('InvalidUnit'));
};

export const validateTemperature = (
  value: number,
  scale: string,
): Either<TemperatureError, void> =>
  chainEither((validScale: TemperatureScale) => checkValue(value, validScale))(
    checkScale(scale),
  );
