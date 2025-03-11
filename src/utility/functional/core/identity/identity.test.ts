import { identity } from './identity.ts';

describe('identity functional utility', () => {
  it('returns the same value for a boolean', () => {
    expect(identity(true)).toBe(true);
    expect(identity(false)).toBe(false);
    expect(identity(true)).not.toBe(false);
  });

  it('returns the same value for a number', () => {
    expect(identity(-4)).toBe(-4);
    expect(identity(0)).toBe(0);
    expect(identity(4)).toBe(4);
    expect(identity(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    expect(identity(NaN)).toBe(NaN);
    expect(identity(0)).not.toBe(1);
  });

  it('returns the same value for a string', () => {
    expect(identity('hello')).toBe('hello');
    expect(identity('')).toBe('');
  });

  it('returns the same value for a Symbol', () => {
    const sym1 = Symbol('unique');
    const sym2 = Symbol('unique');
    
    expect(identity(sym1)).toBe(sym1);
    expect(identity(sym2)).toBe(sym2);
    expect(identity(sym1)).not.toBe(sym2);
  });

  it('returns the same value for an array', () => {
    const arr = [1, 2, 3];
    expect(identity(arr)).toBe(arr);
    expect(identity([])).toStrictEqual([]);
  });

  it('returns the same value for an object', () => {
    const someObj = { someKey: 'someValue' };
    const emptyObj = {};

    expect(identity(someObj)).toBe(someObj);
    expect(identity(emptyObj)).toBe(emptyObj);
  });

  it('returns the same value for a function', () => {
    const testFn = () => 'test function';
    expect(identity(testFn)).toBe(testFn);
  });

  it('works with null and undefined', () => {
    expect(identity(null)).toBeNull();
    expect(identity(undefined)).toBeUndefined();
  });
});
