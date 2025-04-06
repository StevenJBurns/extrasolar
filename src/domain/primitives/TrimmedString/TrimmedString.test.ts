import { TrimmedString } from './TrimmedString.types.ts';
import { createTrimmedString, createTrimmedStringError } from './TrimmedString.factory.ts';
import { isTrimmedString, toString } from './TrimmedString.utils.ts';

describe('TrimmedString', () => {
  describe('createTrimmedString', () => {
    it('rejects non-string', () => {
      expect(createTrimmedString([])).toEqual({
        type: 'Left',
        value: { reason: 'InvalidType', message: 'invalid input type', values: '' },
      });
    });
    it('trims whitespace', () => {
      expect(createTrimmedString('  hi  ')).toEqual({ type: 'Right', value: 'hi' });
    });
    it('accepts empty', () => {
      expect(createTrimmedString('   ')).toEqual({ type: 'Right', value: '' });
    });
  });
  describe('createTrimmedStringError', () => {
    it('creates an error object with expected properties', () => {
      const expectedError = createTrimmedStringError('InvalidType');

      expect(expectedError).toEqual({
        reason: 'InvalidType',
        message: 'invalid input type',
        values: '',
      });
    });

    it('returns an immutable object', () => {
      const expectedError = createTrimmedStringError('InvalidType');

      expect(Object.isFrozen(expectedError)).toBe(true);
    });
  });
  describe('utils', () => {
    it('isTrimmedString', () => {
      expect(isTrimmedString('hi')).toBe(true);
      expect(isTrimmedString(' hi ')).toBe(false);
    });
    it('toString', () => {
      expect(toString('test' as TrimmedString)).toBe('test');
    });
  });
});
