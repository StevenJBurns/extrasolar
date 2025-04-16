import { NonEmptyString } from './NonEmptyString.ts';

const { create, isNonEmptyString, toString } = NonEmptyString;

describe('NonEmptyString', () => {
  describe('create', () => {
    it('rejects non string inputs', () => {
      [null, undefined, NaN, [], {}, () => {}].forEach(input => {
        const { type, value } = create(input as unknown as string);

        expect(type).toBe('Left');
        expect(value).toEqual({
          type: 'NonEmptyStringError',
          reason: 'InvalidInputType',
          message: 'input must be a string',
        });
      });
    });

    it('rejects an empty string', () => {
      const { type, value } = create('');

      expect(type).toBe('Left');
      expect(value).toEqual({
        type: 'NonEmptyStringError',
        reason: 'InvalidInputValue',
        message: 'input string cannot be empty',
      });
    });

    it('accepts a non-empty native string', () => {
      const { type, value } = create('Test String');

      expect(type).toBe('Right');
      expect(value).toBe('Test String');
    });

    it('accepts a whitespace-only native string', () => {
      const { type, value } = create('   ');

      expect(type).toBe('Right');
      expect(value).toBe('   ');
    });

    it('accepts a string with leading/trailing whitespace', () => {
      const { type, value } = create(' Test String ');

      expect(type).toBe('Right');
      expect(value).toBe(' Test String ');
    });

    it('returns an immutable object', () => {
      const expected = create('InvalidValue');

      expect(Object.isFrozen(expected)).toBe(true);
    });
  });

  describe('isNonEmptyString', () => {
    it('returns true for strings', () => {
      expect(isNonEmptyString('Test String')).toBe(true);
    });

    it('returns false for empty strings', () => {
      expect(isNonEmptyString('')).toBe(false);
    });

    it('returns false for non-string types', () => {
      [undefined, null, true, false, 4, [], {}, () => {}].forEach(input => {
        expect(isNonEmptyString(input)).toBe(false);
      });
    });
  });
  describe('toString', () => {
    it('returns the original value as a native string', () => {
      const result = toString('Test String' as NonEmptyString);

      expect(result).toEqual('Test String');
      expect(typeof result).toBe('string');
    });
  });
});
