import { curry } from './curry';

describe('curry functional utility', () => {
  it('correctly curries a function with two arguments', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)).toBe(3); // 1 + 2 = 3
  });

  it('correctly curries a function with three arguments', () => {
    const multiply = (a: number, b: number, c: number) => a * b * c;
    const curriedMultiply = curry(multiply);

    // Test currying in three steps
    expect(curriedMultiply(2)(3)(4)).toBe(24); // 2 * 3 * 4 = 24
  });

  it('handles partially applied functions', () => {
    const subtract = (a: number, b: number) => a - b;
    const curriedSubtract = curry(subtract);

    // Apply only the first argument
    const subtractFrom10 = curriedSubtract(10);
    expect(subtractFrom10(5)).toBe(5); // 10 - 5 = 5
  });

  it('correctly handles curried functions with multiple argument sets', () => {
    const divide = (a: number, b: number, c: number) => a / b / c;
    const curriedDivide = curry(divide);

    // Test currying in parts
    expect(curriedDivide(100)(2)(5)).toBe(10); // 100 / 2 / 5 = 10
  });

  it('works with functions of different arities', () => {
    const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
    const curriedGreet = curry(greet);

    expect(curriedGreet('Hello')('John')).toBe('Hello, John!');
    expect(curriedGreet('Hi')('Alice')).toBe('Hi, Alice!');
  });
});
