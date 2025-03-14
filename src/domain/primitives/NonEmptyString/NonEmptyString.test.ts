import { createNonEmptyString } from './NonEmptyString.factory.ts';

describe('NonEmptyString', () => {
  describe('createNonEmptyString', () => {
    it('accepts a valid non-empty string', () => {
      const result = createNonEmptyString('Mars');
      expect(result.type).toBe('Right');
      expect(result.value).toBe('Mars');
    });

    it('rejects an empty string', () => {
      const result = createNonEmptyString('');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'NonEmptyStringError',
        message: 'String must not be empty',
      });
    });

    it('rejects a whitespace-only string due to trim', () => {
      const result = createNonEmptyString('   ');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual({
        code: 'NonEmptyStringError',
        message: 'String must not be empty',
      });
    });

    it('accepts a string with leading/trailing whitespace', () => {
      const result = createNonEmptyString('  Sun  ');
      expect(result.type).toBe('Right');
      expect(result.value).toBe('  Sun  ');
    });
  });
});
