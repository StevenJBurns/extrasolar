import { TrimmedString } from './TrimmedString.ts';

describe('TrimmedString', () => {
  describe('create', () => {
    // it.skip('rejects non-string', () => {
    //   expect(TrimmedString.create([])).toEqual({
    //     type: 'Left',
    //     value: { reason: 'InvalidType', message: 'invalid input type', values: '' },
    //   });
    // });
    it('trims whitespace', () => {
      expect(TrimmedString.create('  test string  ')).toEqual({
        type: 'Right',
        value: 'test string',
      });
    });
    it('accepts empty', () => {
      expect(TrimmedString.create('   ')).toEqual({ type: 'Right', value: '' });
    });
    it('returns an immutable object', () => {
      const result = TrimmedString.create('test string');
      expect(Object.isFrozen(result)).toBe(true);
    });
  });
  describe('isTrimmedString', () => {
    it('returns true for a trimmed string', () => {
      expect(TrimmedString.isTrimmedString('test string')).toBe(true);
      expect(TrimmedString.isTrimmedString('  test string  ')).toBe(false);
    });
  });
  describe('toString', () => {
    it('returns a native string when given a TrimmedString as input', () => {
      const result = TrimmedString.toString('test string' as TrimmedString);
      expect(result).toBe('test string');
      expect(typeof result).toBe('string');
    });
  });
});
