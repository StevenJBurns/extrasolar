import { Integer } from './Integer.ts';

describe('Integer', () => {
  describe('create', () => {
    it('accepts an integer', () => {
      expect(Integer.create(-4).type).toBe('Right');
      expect(Integer.create(0).type).toBe('Right');
      expect(Integer.create(4).type).toBe('Right');
    });
    it('rejects floats', () => {
      expect(Integer.create(4.44).type).toBe('Left');
      expect(Integer.create(-4.44).type).toBe('Left');
    });
    it('rejects Infinity and NaN', () => {
      expect(Integer.create(Infinity).type).toBe('Left');
      expect(Integer.create(-Infinity).type).toBe('Left');
      expect(Integer.create(NaN).type).toBe('Left');
    });
  });
  describe('isInteger', () => {
    it('returns true for an integer', () => {
      expect(Integer.isInteger(-4)).toBe(true);
      expect(Integer.isInteger(0)).toBe(true);
      expect(Integer.isInteger(4)).toBe(true);
    });
    it('returns false for floats', () => {
      expect(Integer.isInteger(4.44)).toBe(false);
      expect(Integer.isInteger(-4.44)).toBe(false);
    });
    it('returns false for Infinity and NaN', () => {
      expect(Integer.isInteger(Infinity)).toBe(false);
      expect(Integer.isInteger(-Infinity)).toBe(false);
      expect(Integer.isInteger(NaN)).toBe(false);
    });
  });
});
