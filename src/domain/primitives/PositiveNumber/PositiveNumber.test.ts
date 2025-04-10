import { PositiveNumber } from './PositiveNumber.types.ts';
import { createPositiveNumber, createPositiveNumberError } from './PositiveNumber.factory.ts';
import { isPositiveNumber, toNumber } from './PositiveNumber.utils.ts';

describe('PositiveNumber', () => {
  describe('createPositiveNumber', () => {
    it('rejects non number inputs', () => {
      const expectedError = createPositiveNumber('bad input');

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        reason: 'InvalidType',
        message: 'input value must be a number',
        values: '',
      });
    });
    it('rejects NaN', () => {
      const expectedError = createPositiveNumber(NaN);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        reason: 'InvalidValue',
        message: 'input value cannot be NaN',
        values: '',
      });
    });
    it('rejects zero', () => {
      const expectedError = createPositiveNumber(0);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        reason: 'OutOfRange',
        message: 'input value must be a non-zero positive number',
        values: '',
      });
    });
    it('rejects negative numbers', () => {
      const expectedError = createPositiveNumber(-4);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        reason: 'OutOfRange',
        message: 'input value must be a non-zero positive number',
        values: '',
      });
    });
    it('rejects -Infinity', () => {
      const expectedError = createPositiveNumber(-Infinity);
      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        reason: 'OutOfRange',
        message: 'input value must be a non-zero positive number',
        values: '',
      });
    });
    it('accepts Infinity', () => {
      const result = createPositiveNumber(Infinity);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(Infinity);
      expect(Object.isFrozen(result.value)).toBe(true);
    });
    it('accepts positive numbers', () => {
      const result = createPositiveNumber(4);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(4);
    });
    it('returns an immutable object', () => {
      const result = createPositiveNumber(4);
      expect(Object.isFrozen(result)).toBe(true);
    });
  });
  describe('createPositiveNumberError', () => {
    it('returns an error object with expected properties', () => {
      const error = createPositiveNumberError('OutOfRange');
      expect(error).toEqual({
        reason: 'OutOfRange',
        message: 'input value must be a non-zero positive number',
        values: '',
      });
    });
    it('returns an immutable error object', () => {
      const error = createPositiveNumberError('InvalidValue');
      expect(Object.isFrozen(error)).toBe(true);
    });
  });
  describe('utility functions', () => {
    describe('isPositiveNumber', () => {
      it('returns true as expected', () => {
        expect(isPositiveNumber(4 as number)).toBe(true);
      });
      it('returns false as expected', () => {
        expect(isPositiveNumber(-Infinity as number)).toBe(false);
        expect(isPositiveNumber(NaN as number)).toBe(false);
        expect(isPositiveNumber(-4 as number)).toBe(false);
        expect(isPositiveNumber(0 as number)).toBe(false);
      });
    });
    describe('toNumber', () => {
      it('returns a valid input as a native number', () => {
        const result = toNumber(4 as PositiveNumber);
        expect(typeof result === 'number');
        expect(result).toEqual(4);
      });
    });
  });
});
