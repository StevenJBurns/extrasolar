import { DomainError } from "@domain/types";
import { TemperatureErrorReason } from "@domain/values";

const errorMessages: Record<TemperatureErrorReason, string> = {
  OutOfRange: 'Temperature value must be within range',
  InvalidUnit: "Temperature unit must be 'Kelvin' 'Celsius' or 'Fahrenheit'",
};

export const createTemperatureError = (reason: TemperatureErrorReason): DomainError => 
  Object.freeze({
    code: 'TemperatureError',
    reason,
    message: errorMessages[reason],
  });
