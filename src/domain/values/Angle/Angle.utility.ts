import type { Angle, AngleUnit } from '@domain/values';
import type { FiniteNumber } from '@domain/primitives';

export const getValue = (a: Angle): number => a.value;
export const getUnit = (a: Angle): AngleUnit => a.unit;

export const equals = (a: Angle, b: Angle): boolean => a.value === b.value && a.unit === b.unit;

export const convertAngle = (a: Angle, targetUnit: AngleUnit): Angle => {
  if (a.unit === targetUnit) return a;

  const value = a.unit === 'degrees' ? (a.value * Math.PI) / 180 : (a.value * 180) / Math.PI;

  return Object.freeze({
    value: value as FiniteNumber,
    unit: targetUnit,
  });
};
