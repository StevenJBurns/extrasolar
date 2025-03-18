import { Temperature, TemperatureScale, createTemperature } from "@domain/values";

export function convertTemperature(
  temp: Temperature,
  newScale: TemperatureScale
): Temperature {
  return createTemperature({
    value: temp.value,
    scale: newScale,
  });
}
