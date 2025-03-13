import { curry } from './curry';

describe('curry functional utility', () => {
  it('correctly curries a function with two arguments', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)).toBe(3);
    const addOne = curriedAdd(1) as (b: number) => number;
    expect(addOne(2)).toBe(3);
  });

  it('correctly curries a function with three arguments', () => {
    const multiply = (a: number, b: number, c: number) => a * b * c;
    const curriedMultiply = curry(multiply);
    const mulTwo = curriedMultiply(2) as (b: number) => (c: number) => number;
    expect(mulTwo(3)(4)).toBe(24);
  });

  it('handles partially applied functions', () => {
    const subtract = (a: number, b: number) => a - b;
    const curriedSubtract = curry(subtract);
    const subtractFrom10 = curriedSubtract(10) as (b: number) => number;
    expect(subtractFrom10(5)).toBe(5);
  });

  it('correctly handles curried functions with multiple argument sets', () => {
    const divide = (a: number, b: number, c: number) => a / b / c;
    const curriedDivide = curry(divide);
    const div100 = curriedDivide(100) as (b: number) => (c: number) => number;
    expect(div100(2)(5)).toBe(10);
  });

  it('works with functions of different arities', () => {
    const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
    const curriedGreet = curry(greet);
    const hello = curriedGreet('Hello') as (name: string) => string;
    expect(hello('John')).toBe('Hello, John!');
    expect(curriedGreet('Hi')('Alice')).toBe('Hi, Alice!');
  });
});