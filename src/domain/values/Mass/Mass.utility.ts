import type { Mass, MassUnit } from './Mass.types.ts';
import type { FiniteNonZeroPositiveNumber } from '@domain/primitives';

const MASS_CONVERSIONS: Record<MassUnit, number> = {
  kilogram: 1,
  earth: 5.972e24,
  jupiter: 1.898e27,
  sun: 1.989e30,
};

export const getValue = (m: Mass): FiniteNonZeroPositiveNumber => m.value;
export const getUnit = (m: Mass): MassUnit => m.unit;

export const equals = (a: Mass, b: Mass): boolean =>
  a.value === b.value && a.unit === b.unit;

export const convertMass = (m: Mass, targetUnit: MassUnit): Mass => {
  if (m.unit === targetUnit) return m;

  const kgValue = m.value * MASS_CONVERSIONS[m.unit];
  const newValue = kgValue / MASS_CONVERSIONS[targetUnit];

  return Object.freeze({
    value: newValue as FiniteNonZeroPositiveNumber,
    unit: targetUnit,
  });
};
