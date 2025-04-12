import { PositiveNumber } from './PositiveNumber.ts';

describe('PositiveNumber', () => {
  describe('create', () => {
    it('rejects NaN', () => {
      const expectedError = PositiveNumber.create(NaN);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        type: 'PositiveNumberError',
        reason: 'InvalidInputValue',
        message: 'input value is not a positive number. received: NaN',
      });
    });
    it('rejects zero', () => {
      const expectedError = PositiveNumber.create(0);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        type: 'PositiveNumberError',
        reason: 'InvalidInputValue',
        message: 'input value is not a positive number. received: 0',
      });
    });
    it('rejects negative numbers', () => {
      const expectedError = PositiveNumber.create(-4);

      expect(expectedError.type).toBe('Left');
      expect(expectedError.value).toEqual({
        type: 'PositiveNumberError',
        reason: 'InvalidInputValue',
        message: 'input value is not a positive number. received: -4',
      });
    });
    it('rejects -Infinity and Infinity', () => {
      [-Infinity, Infinity].forEach(i => {
        const expectedError = PositiveNumber.create(i);
        expect(expectedError.type).toBe('Left');
        expect(expectedError.value).toEqual({
          type: 'PositiveNumberError',
          reason: 'OutOfRange',
          message: `input value is out of bounds. received: ${i}`,
        });
      });
    });
    it('accepts positive numbers', () => {
      const result = PositiveNumber.create(4);
      expect(result.type).toBe('Right');
      expect(result.value).toBe(4);
    });
    it('returns an immutable object', () => {
      const result = PositiveNumber.create(4);
      expect(Object.isFrozen(result)).toBe(true);
    });
  });
  describe('utility functions', () => {
    describe('isPositiveNumber', () => {
      it('returns true for valid positive numbers', () => {
        expect(PositiveNumber.isPositiveNumber(4)).toBe(true);
      });
      it('returns false for invalid number inputs', () => {
        [NaN, -Infinity, Infinity, -444, -4.44, 0].forEach(i => {
          console.log(i);
          expect(PositiveNumber.isPositiveNumber(i as number)).toBe(false);
        });
      });
    });
    describe('toNumber', () => {
      it('returns a native number when given a PositiveNumber input', () => {
        const result = PositiveNumber.create(4);
        if (result.type === 'Left') return;
        expect(PositiveNumber.toNumber(result.value)).toEqual(4);
      });
    });
  });
});
