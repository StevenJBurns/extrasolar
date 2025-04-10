import { Integer } from './Integer.ts';

describe('Integer', () => {
  describe('create', () => {
    it('accepts valid integers', () => {
      [-4, 0, 4].forEach(i => {
        expect(Integer.create(i)).toEqual({
          type: 'Right',
          value: i,
        });
      });
    });
    it('rejects floats', () => {
      [-4.44, 4.44].forEach(i => {
        expect(Integer.create(i).type).toBe('Left');
        expect(Integer.create(i).value).toEqual({
          message: `input value is not an integer. received: ${i}`,
          reason: 'InvalidInput',
          type: 'Integer',
        });
      });
    });
    it('rejects -Infinity and Infinity', () => {
      [-Infinity, Infinity].forEach(i => {
        expect(Integer.create(i).type).toBe('Left');
        expect(Integer.create(i).value).toEqual({
          type: 'Integer',
          message: `input value is out of bounds. received: ${i}`,
          reason: 'OutOfBounds',
        });
      });
    });
    it('rejects NaN', () => {
      expect(Integer.create(NaN).type).toBe('Left');
      expect(Integer.create(NaN).value).toEqual({
        type: 'Integer',
        message: 'input value is not an integer. received: NaN',
        reason: 'InvalidInput',
      });
    });
  });
  describe('isInteger', () => {
    it('returns true for valid integers', () => {
      [-4, 0, 4].forEach(i => expect(Integer.isInteger(i)).toBe(true));
    });
    it('returns false for floats, -Infinity, Infinity and NaN', () => {
      [-4.44, 4.44, -Infinity, Infinity, NaN].forEach(i =>
        expect(Integer.isInteger(i)).toBe(false),
      );
    });
  });
});
