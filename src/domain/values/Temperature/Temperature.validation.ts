import { Temperature } from "@domain/Temperature/Temperature.value";
import { TemperatureScale } from "@domain/Temperature/TemperatureScale";

export function isTemperatureValid(temp: Temperature): boolean {
  switch (temp.scale) {
    case TemperatureScale.CELSIUS:
      return temp.value >= -273.15;
    case TemperatureScale.FAHRENHEIT:
      return temp.value >= -459.67;
    case TemperatureScale.KELVIN:
      return temp.value >= 0;
  }
}
