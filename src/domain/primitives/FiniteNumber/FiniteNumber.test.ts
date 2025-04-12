import { FiniteNumber } from './FiniteNumber.ts';

describe('FiniteNumber', () => {
  describe('create', () => {
    it('accepts valid finite numbers', () => {
      [Number.MIN_VALUE, -444.444, 0, 444.444, Number.MAX_VALUE].forEach(i => {
        const result = FiniteNumber.create(i);
        expect(result.type).toBe('Right');
        expect(result.value).toBe(i);
      });
    });
    it('rejects -Infinity and Infinity', () => {
      [-Infinity, Infinity].forEach(i => {
        const result = FiniteNumber.create(i);
        expect(result.type).toBe('Left');
        expect(result.value).toEqual({
          type: 'FiniteNumberError',
          reason: 'OutOfBounds',
          message: `input value is infinite. received: ${i}`,
        });
      });
    });
    it('rejects NaN', () => {
      const result = FiniteNumber.create(NaN);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        type: 'FiniteNumberError',
        reason: 'InvalidInput',
        message: 'input value is invalid. received: NaN',
      });
    });
  });
  describe('isFinite', () => {
    it('accepts finite numbers', () => {
      [Number.MIN_VALUE, -444.444, 0, 444.444, Number.MAX_VALUE].forEach(i => {
        expect(FiniteNumber.isFinite(i)).toBe(true);
      });
    });
    it('rejects -Infinity and Infinity', () => {
      [-Infinity, Infinity].forEach(i => expect(FiniteNumber.isFinite(i)).toBe(false));
    });
    it('rejects NaN', () => expect(FiniteNumber.isFinite(NaN)).toBe(false));
  });
});
