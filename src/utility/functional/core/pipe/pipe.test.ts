import { pipe } from './pipe.ts';

describe('pipe functional utility', () => {
  it('returns initial value if no functions are provided', () => {
    const result = pipe(42);
    expect(result).toBe(42);
  });

  it('works with a single function', () => {
    const square = (x: number) => x * x;

    const result = pipe(4, square);
    expect(result).toBe(16);
  });

  it('handles complex function chains', () => {
    const trim = (s: string) => s.trim();
    const toUpper = (s: string) => s.toUpperCase();
    const addPeriod = (s: string) => s + '.';

    const result = pipe('  hello  ', trim, toUpper, addPeriod); // "HELLO."
    expect(result).toBe('HELLO.');
  });

  it('applies functions in order', () => {
    const add2 = (x: number) => x + 2;
    const multiply3 = (x: number) => x * 3;

    const result = pipe(5, add2, multiply3);
    expect(result).toBe(21);
  });

  it('handles different return types', () => {
    const toString = (x: number) => x.toString();
    const addExclamation = (s: string) => `${s}!`;

    const result = pipe(7, toString, addExclamation);
    expect(result).toBe('7!');
  });
});
