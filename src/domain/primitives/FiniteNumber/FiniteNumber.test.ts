import { createFiniteNumber } from './FiniteNumber.factory.ts';

describe('FiniteNumber', () => {
  describe('createFiniteNumber', () => {
    it('accepts zero', () => {
      const result = createFiniteNumber(0);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(0);
    });

    it('accepts a positive finite number', () => {
      const result = createFiniteNumber(42);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(42);
    });

    it('accepts a negative finite number', () => {
      const result = createFiniteNumber(-23.5);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(-23.5);
    });

    it('rejects Infinity', () => {
      const result = createFiniteNumber(Infinity);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNumberError',
        reason: 'OutOfRange',
        message: 'FiniteNumber must be a finite number',
      });
    });

    it('rejects NaN', () => {
      const result = createFiniteNumber(NaN);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'FiniteNumberError',
        reason: 'OutOfRange',
        message: 'FiniteNumber must be a finite number',
      });
    });
  });
});
