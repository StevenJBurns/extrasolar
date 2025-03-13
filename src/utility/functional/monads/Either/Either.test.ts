import { Left, Right, Either, mapEither, foldEither, chainEither } from './Either.ts';

describe('Either<L, R> monad', () => {
  it('constructs Left and Right', () => {
    expect(Left('error')).toEqual({ type: 'Left', value: 'error' });
    expect(Right(42)).toEqual({ type: 'Right', value: 42 });
  });

  it('maps Right values, skips Left', () => {
    const add2 = (x: number) => x + 2;

    expect(mapEither(add2)(Right(3))).toEqual(Right(5));
    expect(mapEither(add2)(Left('error'))).toEqual(Left('error'));
  });

  it('folds Left and Right to values', () => {
    const leftSide = (e: string): string => `Error: ${e}`;
    const rightSide = (x: number): number => x * 10;

    const foldRight = foldEither(leftSide, rightSide)(Right(5));
    expect(foldRight).toBe(50);

    const foldLeft = foldEither(leftSide, rightSide)(Left('bad'));
    expect(foldLeft).toBe('Error: bad');
  });

  it('chains Right to new Either, skips Left', () => {
    const doubleIfPositive = (x: number): Either<string, number> => 
      x > 0 ? Right(x * 2) : Left('Value must be positive');

    const rightResult = chainEither(doubleIfPositive)(Right(3));
    expect(rightResult).toEqual(Right(6));

    const leftResult = chainEither(doubleIfPositive)(Left('initial error'));
    expect(leftResult).toEqual(Left('initial error'));  });
});
