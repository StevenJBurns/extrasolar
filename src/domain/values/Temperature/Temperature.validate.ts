import { Temperature } from "@domain/values";

export function isTemperatureValueValid(temp: Temperature): boolean {
  switch (temp.scale) {
    case 'Kelvin':
      return temp.value >= 0;
    case 'Celsius':
      return temp.value >= -273.15;
    case 'Fahrenheit':
      return temp.value >= -459.67;
  };
};

export function isTemperatureScaleValid(temp: Temperature): boolean {
  return ['Kelvin', 'Celsius', 'Fahrenheit'].includes(temp.scale);
};
