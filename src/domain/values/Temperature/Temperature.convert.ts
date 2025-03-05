import { Temperature } from "@domain/Temperature/Temperature.value";
import { TemperatureScale } from "@domain/Temperature/TemperatureScale";
import { createTemperature } from "@domain/Temperature/Temperature.factory";

export function convertTemperature(
  temp: Temperature,
  newScale: TemperatureScale
): Temperature {
  return createTemperature({
    value: temp.value,
    scale: newScale,
  });
}
