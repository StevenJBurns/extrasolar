import { NonEmptyString, createNonEmptyString, NonEmptyStringError } from './';

describe('NonEmptyString', () => {
  describe('createNonEmptyString', () => {
    it('should create a valid NonEmptyString when given a non-empty string', () => {
      const validString = 'Hello World';
      const result: NonEmptyString = createNonEmptyString(validString);

      expect(result).toBe(validString); // Ensure the string matches the input
      // expect(result).toBeInstanceOf(String); // It should be a string (immutable)
    });

    it('should throw a NonEmptyStringError when given an empty string', () => {
      const invalidString = '';
      
      expect(() => createNonEmptyString(invalidString)).toThrow(NonEmptyStringError());
    });

    it('should throw a NonEmptyStringError when given a string with only spaces', () => {
      const invalidString = '   ';
      
      expect(() => createNonEmptyString(invalidString)).toThrow(NonEmptyStringError());
    });
  });
  describe('Immutability', () => {
    it('should not allow mutation of NonEmptyString', () => {
      const validString = 'Test String';
      let nonEmptyString: NonEmptyString = createNonEmptyString(validString);

      expect(() => {
        nonEmptyString = 'New String';
      }).toThrow();

      expect(() => {
        // @ts-expect-error: invalid mutation attempt
        nonEmptyString[0] = 'n';
      }).toThrow();
    });
  });
});
