import { NonEmptyString } from './NonEmptyString.types.ts';
import { createNonEmptyString, createNonEmptyStringError } from './NonEmptyString.factory.ts';
import { isNonEmptyString, toString } from './NonEmptyString.utils.ts';

describe('NonEmptyString', () => {
  describe('createNonEmptyString', () => {
    it('rejects an empty string', () => {
      const result = createNonEmptyString('');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        reason: 'InvalidValue',
        message: 'input cannot be an empty string',
        values: '',
      });
    });

    it('accepts a valid non-empty string', () => {
      const result = createNonEmptyString('Mars');
      expect(result.type).toBe('Right');
      expect(result.value).toBe('Mars');
    });

    it('accepts a whitespace-only string', () => {
      const result = createNonEmptyString('   ');
      expect(result.type).toBe('Right');
      expect(result.value).toBe('   ');
    });

    it('accepts a string with leading/trailing whitespace', () => {
      const result = createNonEmptyString(' Sun ');
      expect(result.type).toBe('Right');
      expect(result.value).toBe(' Sun ');
    });
  });
  describe('createNonEmptyStringError', () => {
    it('creates an immutable error object with expected properties', () => {
      const expectedError = createNonEmptyStringError('InvalidValue');

      expect(expectedError).toEqual({
        reason: 'InvalidValue',
        message: 'input cannot be an empty string',
        values: '',
      });
    });
    it('returns an immutable object', () => {
      const expectedError = createNonEmptyStringError('InvalidValue');

      expect(Object.isFrozen(expectedError)).toBe(true);
    });
  });
  describe('utility functions', () => {
    describe('isNonEmptyString', () => {
      it('returns true for strings', () => {
        expect(isNonEmptyString('Saturn')).toBe(true);
      });

      it('returns false for empty strings', () => {
        expect(isNonEmptyString('')).toBe(false);
      });

      it('returns false for non-string types', () => {
        expect(isNonEmptyString(undefined)).toBe(false);
        expect(isNonEmptyString(null)).toBe(false);
        expect(isNonEmptyString(true)).toBe(false);
        expect(isNonEmptyString(42)).toBe(false);
        expect(isNonEmptyString([])).toBe(false);
        expect(isNonEmptyString({})).toBe(false);
      });
    });
    describe('toString', () => {
      it('returns the original value as a native string', () => {
        const result = toString('Jupiter' as NonEmptyString);

        expect(result).toEqual('Jupiter');
        expect(typeof result).toBe('string');
      });
    });
  });
});
