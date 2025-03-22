import { Temperature, TemperatureScale, TemperatureError } from '@domain/values';
import { FiniteNumber, createFiniteNumber } from '@domain/primitives';
import { createTemperatureError } from './Temperature.error.ts';
import { validateTemperature } from './Temperature.validate.ts';
import { chainEither, Left, Right } from '@utility/functional/monads';

export function createTemperature(value: number, scale: TemperatureScale) {
  chainEither<TemperatureError, void, Temperature>(() => {
    const finiteResult = createFiniteNumber(value);

    return chainEither<TemperatureError, FiniteNumber, Temperature>(
      (finiteValue: FiniteNumber) => Right(Object.freeze({ value: finiteValue, scale })),
    )(finiteResult.type === 'Left' ? Left(createTemperatureError('OutOfRange')) : finiteResult);
  })(validateTemperature(value, scale));
}
