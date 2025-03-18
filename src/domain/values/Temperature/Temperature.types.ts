import { DomainError } from '@domain/types';
import { FiniteNumber } from '@domain/primitives';

export type TemperatureScale = "Celsius" | "Fahrenheit" | "Kelvin";

export type TemperatureErrorReason = 'OutOfRange' | 'InvalidUnit'

export type TemperatureError = DomainError & {
  code: 'TemperatureError';
  reason: TemperatureErrorReason;
  message: string;
};

export type Temperature = {
  value: FiniteNumber;
  scale: TemperatureScale;
};
