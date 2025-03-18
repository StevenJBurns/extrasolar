import { createMassError } from './Mass.error.ts';
import { createMass } from './Mass.factory.ts';
import { validateMass } from './Mass.validate';
import { getValue, getUnit, equals, convertMass } from './Mass.utility.ts';
import { FiniteNonZeroPositiveNumber } from '@domain/primitives';
import { Left, Right } from '@utility/functional/monads';
import { vi } from 'vitest';

vi.mock('@domain/primitives', () => ({
  createFiniteNonZeroPositiveNumber: (value: number) =>
    Number.isFinite(value) && value > 0
      ? Right(value as FiniteNonZeroPositiveNumber)
      : Left(createMassError('InvalidValue')),
}));

describe('Mass', () => {
  describe('createMassError', () => {
    it('should create InvalidValue error with correct message', () => {
      const error = createMassError('InvalidValue');
      expect(error.code).toBe('MassError');
      expect(error.reason).toBe('InvalidValue');
      expect(error.message).toBe('Mass.value must be a finite non-zero positive number');
      expect(Object.isFrozen(error)).toBe(true);
    });

    it('should create InvalidUnit error with correct message', () => {
      const error = createMassError('InvalidUnit');
      expect(error.code).toBe('MassError');
      expect(error.reason).toBe('InvalidUnit');
      expect(error.message).toBe("Mass.unit must be 'Kilogram' | 'earth' | 'jupiter' | 'sun'");
      expect(Object.isFrozen(error)).toBe(true);
    });
  });

  describe('validateMass', () => {
    it('should validate and create mass in kilograms', () => {
      const result = validateMass(1, 'kilogram');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') expect(result.value).toBeUndefined();
    });

    it('should validate and create mass in earth units', () => {
      const result = validateMass(2, 'earth');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') expect(result.value).toBeUndefined();
    });

    it('should reject NaN', () => {
      const result = validateMass(NaN, 'kilogram');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidValue'));
      }
    });

    it('should reject zero', () => {
      const result = validateMass(0, 'kilogram');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidValue'));
      }
    });

    it('should reject negative value', () => {
      const result = validateMass(-1, 'kilogram');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidValue'));
      }
    });

    it('should reject invalid unit', () => {
      const result = validateMass(1, 'kg' as any);
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidUnit'));
      }
    });
  });

  describe('createMass', () => {
    it('should create valid mass in kilograms', () => {
      const result = createMass(1, 'kilogram');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: 1, unit: 'kilogram' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should create valid mass in sun units', () => {
      const result = createMass(1.5, 'sun');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: 1.5, unit: 'sun' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should reject Infinity', () => {
      const result = createMass(Infinity, 'kilogram');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidValue'));
      }
    });

    it('should reject zero', () => {
      const result = createMass(0, 'earth');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidValue'));
      }
    });

    it('should reject invalid unit', () => {
      const result = createMass(1, 'kg' as any);
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createMassError('InvalidUnit'));
      }
    });
  });

  describe('getValue', () => {
    it('should return the value of a mass in kilograms', () => {
      const result = createMass(2, 'kilogram');
      if (result.type === 'Right') {
        expect(getValue(result.value)).toBe(2);
      }
    });

    it('should return the value of a mass in earth units', () => {
      const result = createMass(1.5, 'earth');
      if (result.type === 'Right') {
        expect(getValue(result.value)).toBe(1.5);
      }
    });
  });

  describe('getUnit', () => {
    it('should return kilogram unit', () => {
      const result = createMass(2, 'kilogram');
      if (result.type === 'Right') {
        expect(getUnit(result.value)).toBe('kilogram');
      }
    });

    it('should return sun unit', () => {
      const result = createMass(1, 'sun');
      if (result.type === 'Right') {
        expect(getUnit(result.value)).toBe('sun');
      }
    });
  });

  describe('equals', () => {
    it('should return true for identical masses', () => {
      const result1 = createMass(1, 'kilogram');
      const result2 = createMass(1, 'kilogram');
      if (result1.type === 'Right' && result2.type === 'Right') {
        expect(equals(result1.value, result2.value)).toBe(true);
      }
    });

    it('should return false for different values', () => {
      const result1 = createMass(1, 'kilogram');
      const result2 = createMass(2, 'kilogram');
      if (result1.type === 'Right' && result2.type === 'Right') {
        expect(equals(result1.value, result2.value)).toBe(false);
      }
    });

    it('should return false for different units', () => {
      const result1 = createMass(1, 'kilogram');
      const result2 = createMass(1, 'earth');
      if (result1.type === 'Right' && result2.type === 'Right') {
        expect(equals(result1.value, result2.value)).toBe(false);
      }
    });
  });

  describe('convertMass', () => {
    it('should return same mass when units match', () => {
      const result = createMass(1, 'kilogram');
      if (result.type === 'Right') {
        const mass = result.value;
        const converted = convertMass(mass, 'kilogram');
        expect(converted).toEqual(mass);
        expect(converted).toBe(mass);
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert kilogram to earth', () => {
      const result = createMass(5.972e24, 'kilogram');
      if (result.type === 'Right') {
        const converted = convertMass(result.value, 'earth');
        expect(converted.value).toBeCloseTo(1, 6);
        expect(converted.unit).toBe('earth');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert earth to kilogram', () => {
      const result = createMass(1, 'earth');
      if (result.type === 'Right') {
        const converted = convertMass(result.value, 'kilogram');
        expect(converted.value).toBeCloseTo(5.972e24, 6);
        expect(converted.unit).toBe('kilogram');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert sun to jupiter', () => {
      const result = createMass(1, 'sun');
      if (result.type === 'Right') {
        const converted = convertMass(result.value, 'jupiter');
        expect(converted.value).toBeCloseTo(1.989e30 / 1.898e27, 6);
        expect(converted.unit).toBe('jupiter');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert jupiter to sun', () => {
      const result = createMass(1, 'jupiter');
      if (result.type === 'Right') {
        const converted = convertMass(result.value, 'sun');
        expect(converted.value).toBeCloseTo(1.898e27 / 1.989e30, 6);
        expect(converted.unit).toBe('sun');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });
  });
});