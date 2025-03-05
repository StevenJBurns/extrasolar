import { Temperature } from '@domain/Temperature/Temperature.value';
import { isTemperatureValid } from '@domain/Temperature/Temperature.validation';
import { TemperatureError } from '@domain/Temperature/TemperatureError/';

export function createTemperature(params: Temperature) {
  const { value, scale } = params;

  if (!isTemperatureValid(params)) {
    throw TemperatureError('Temperature Validation Error');
  }

  return Object.freeze({
    value,
    scale,
  });
}
