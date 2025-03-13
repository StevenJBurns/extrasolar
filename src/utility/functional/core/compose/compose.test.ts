import { compose } from './compose.ts';

const add2 = (x: number) => x + 2;
const double = (x: number) => x * 2;
const subtract1 = (x: number) => x - 1;
const toString = (x: number) => x.toString();

describe('compose functional utility', () => {
  test('composes functions right-to-left', () => {
    const fn = compose<number, string>(toString, double, add2);
    expect(fn(5)).toBe("14");
  });

  test('works with homogeneous types', () => {
    const fn = compose<number, number>(subtract1, double, add2);
    expect(fn(5)).toBe(13);
  });

  // Edge Cases
  test('returns identity function with no functions', () => {
    const fn = compose<number, number>();
    expect(fn(42)).toBe(42);
  });

  test('applies single function correctly', () => {
    const fn = compose<number, number>(add2);
    expect(fn(5)).toBe(7);
  });

  test('handles type mismatch at runtime', () => {
    const badFn = (x: string) => {
      if (typeof x !== 'string') throw new Error('Expected string');
      return x.length;
    };
    const fn = compose<number, number>(badFn, add2);
    expect(() => fn(5)).toThrow('Expected string');  });

  test('infers return type with explicit generics', () => {
    const fn = compose<number, string>(toString, double);
    const result: string = fn(5);
    expect(result).toBe("10");
  });
});
