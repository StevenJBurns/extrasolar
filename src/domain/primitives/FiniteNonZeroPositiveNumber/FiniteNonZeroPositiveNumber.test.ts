import { createFiniteNonZeroPositiveNumber } from './FiniteNonZeroPositiveNumber.factory.ts';
import { FiniteNonZeroPositiveNumberError } from './FiniteNonZeroPositiveNumber.error.ts';

describe('FiniteNonZeroPositiveNumber', () => {
  describe('createFiniteNonZeroPositiveNumber', () => {
    it('accepts a positive finite number', () => {
      const result = createFiniteNonZeroPositiveNumber(42);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(42);
    });

    it('rejects zero', () => {
      const result = createFiniteNonZeroPositiveNumber(0);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNonZeroPositiveNumberError',
        message: 'Value must be a finite, non-zero positive number',
      } as FiniteNonZeroPositiveNumberError);
    });

    it('rejects a negative number', () => {
      const result = createFiniteNonZeroPositiveNumber(-5);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNonZeroPositiveNumberError',
        message: 'Value must be a finite, non-zero positive number',
      } as FiniteNonZeroPositiveNumberError);
    });

    it('rejects Infinity', () => {
      const result = createFiniteNonZeroPositiveNumber(Infinity);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNonZeroPositiveNumberError',
        message: 'Value must be a finite, non-zero positive number',
      } as FiniteNonZeroPositiveNumberError);
    });

    it('rejects NaN', () => {
      const result = createFiniteNonZeroPositiveNumber(NaN);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNonZeroPositiveNumberError',
        message: 'Value must be a finite, non-zero positive number',
      } as FiniteNonZeroPositiveNumberError);
    });
  });
});
