import { Angle, AngleUnit } from '@domain/values';
import { createAngle } from './Angle.factory.ts';
import { createAngleError } from './Angle.error.ts';
import { getValue, getUnit, equals, convertAngle } from './Angle.utility.ts';
import { validateAngle } from './Angle.validate';
import { Left, Right } from '@utility/functional/monads';
import { FiniteNumber } from '@domain/primitives/index.ts';
import { vi } from 'vitest';

vi.mock('@domain/primitives', () => ({
  createFiniteNumber: (value: number) =>
    Number.isFinite(value) ? Right(value) : Left('NotFinite'),
}));

describe('Angle', () => {
  describe('createAngleError', () => {
    it('should create InvalidValue error with correct message', () => {
      const error = createAngleError('InvalidValue');
      expect(error.code).toBe('AngleError');
      expect(error.reason).toBe('InvalidValue');
      expect(error.message).toBe('Angle.value must be a valid finite number');
      expect(Object.isFrozen(error)).toBe(true);
    });

    it('should create OutOfRange error with correct message', () => {
      const error = createAngleError('OutOfRange');
      expect(error.code).toBe('AngleError');
      expect(error.reason).toBe('OutOfRange');
      expect(error.message).toBe(
        'Angle.value must be within range (0-360 degrees or 0-2π radians)',
      );
    });

    it('should create InvalidUnit error with correct message', () => {
      const error = createAngleError('InvalidUnit');
      expect(error.code).toBe('AngleError');
      expect(error.reason).toBe('InvalidUnit');
      expect(error.message).toBe("Angle.unit must be 'degrees' or 'radians'");
    });

    it('should create UnitMismatch error with correct message', () => {
      const error = createAngleError('UnitMismatch');
      expect(error.code).toBe('AngleError');
      expect(error.reason).toBe('UnitMismatch');
      expect(error.message).toBe('Both angles must use the same unit (degrees or radians)');
    });
  });

  describe('validateAngle', () => {
    it('should validate finite number in degrees range', () => {
      const result = validateAngle(90, 'degrees');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toBeUndefined();
      }
    });

    it('should validate finite number in radians range', () => {
      const result = validateAngle(Math.PI, 'radians');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toBeUndefined();
      }
    });

    it('should reject NaN', () => {
      const result = validateAngle(NaN, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('InvalidValue'));
      }
    });

    it('should reject Infinity', () => {
      const result = validateAngle(Infinity, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('InvalidValue'));
      }
    });

    it('should reject invalid unit', () => {
      const result = validateAngle(90, 'invalid' as AngleUnit);
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('InvalidUnit'));
      }
    });

    it('should reject negative degrees', () => {
      const result = validateAngle(-1, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('OutOfRange'));
      }
    });

    it('should reject degrees >= 360', () => {
      const result = validateAngle(360, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('OutOfRange'));
      }
    });

    it('should reject negative radians', () => {
      const result = validateAngle(-1, 'radians');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('OutOfRange'));
      }
    });

    it('should reject radians >= 2π', () => {
      const result = validateAngle(2 * Math.PI, 'radians');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('OutOfRange'));
      }
    });
  });

  describe('createAngle', () => {
    it('should create valid angle in degrees', () => {
      const result = createAngle(90, 'degrees');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: 90, unit: 'degrees' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should create valid angle in radians', () => {
      const result = createAngle(Math.PI, 'radians');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: Math.PI, unit: 'radians' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should reject non-finite values', () => {
      const result = createAngle(NaN, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('InvalidValue'));
      }
    });

    it('should reject out-of-range degrees', () => {
      const result = createAngle(361, 'degrees');
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('OutOfRange'));
      }
    });

    it('should reject invalid unit', () => {
      const result = createAngle(90, 'invalid' as AngleUnit);
      expect(result.type).toBe('Left');
      if (result.type === 'Left') {
        expect(result.value).toEqual(createAngleError('InvalidUnit'));
      }
    });
  });

  describe('getValue', () => {
    it('should return the value of an angle in degrees', () => {
      const angle: Angle = { value: 45 as FiniteNumber, unit: 'degrees' };
      expect(getValue(angle)).toBe(45);
    });

    it('should return the value of an angle in radians', () => {
      const angle: Angle = { value: Math.PI as FiniteNumber, unit: 'radians' };
      expect(getValue(angle)).toBe(Math.PI);
    });
  });

  describe('getUnit', () => {
    it('should return degrees unit', () => {
      const angle: Angle = { value: 45 as FiniteNumber, unit: 'degrees' };
      expect(getUnit(angle)).toBe('degrees');
    });

    it('should return radians unit', () => {
      const angle: Angle = { value: Math.PI as FiniteNumber, unit: 'radians' };
      expect(getUnit(angle)).toBe('radians');
    });
  });

  describe('equals', () => {
    it('should return true for identical angles', () => {
      const angle1: Angle = { value: 90 as FiniteNumber, unit: 'degrees' };
      const angle2: Angle = { value: 90 as FiniteNumber, unit: 'degrees' };
      expect(equals(angle1, angle2)).toBe(true);
    });

    it('should return false for different values', () => {
      const angle1: Angle = { value: 90 as FiniteNumber, unit: 'degrees' };
      const angle2: Angle = { value: 45 as FiniteNumber, unit: 'degrees' };
      expect(equals(angle1, angle2)).toBe(false);
    });

    it('should return false for different units', () => {
      const angle1: Angle = { value: Math.PI as FiniteNumber, unit: 'radians' };
      const angle2: Angle = { value: Math.PI as FiniteNumber, unit: 'degrees' };
      expect(equals(angle1, angle2)).toBe(false);
    });
  });

  describe('convertAngle', () => {
    it('should return same angle when units match', () => {
      const angle: Angle = { value: 90 as FiniteNumber, unit: 'degrees' };
      const result = convertAngle(angle, 'degrees');
      expect(result).toEqual(angle);
    });

    it('should convert degrees to radians', () => {
      const angle: Angle = { value: 180 as FiniteNumber, unit: 'degrees' };
      const result = convertAngle(angle, 'radians');
      expect(result.value).toBeCloseTo(Math.PI);
      expect(result.unit).toBe('radians');
      expect(Object.isFrozen(result)).toBe(true);
    });

    it('should convert radians to degrees', () => {
      const angle: Angle = { value: Math.PI as FiniteNumber, unit: 'radians' };
      const result = convertAngle(angle, 'degrees');
      expect(result.value).toBeCloseTo(180);
      expect(result.unit).toBe('degrees');
      expect(Object.isFrozen(result)).toBe(true);
    });
  });
});
