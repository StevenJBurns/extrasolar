const MASS_UNITS = {
  kilogram: 'kilogram',
  earth: 'earth',
  jupiter: 'jupiter',
  sun: 'sun,',
} as const;

export type MassUnit = 'kilogram' | 'earth' | 'jupiter' | 'sun';

export function isValidMassUnit(inputValue: unknown): inputValue is MassUnit {
  return typeof inputValue === 'string' && inputValue in MASS_UNITS;
}
