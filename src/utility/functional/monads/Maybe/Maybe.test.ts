import { Just, Nothing, mapMaybe, chainMaybe, foldMaybe, fromNullable } from './Maybe.ts';

const JUST = 'Just';
const NOTHING = 'Nothing';

describe('Maybe Monad', () => {
  describe('Just', () => {
    it('constructs with a value', () => {
      const just = Just(42);
      expect(just.type).toBe(JUST);
      expect(just.value).toBe(42);
    });

    it('is immutable', () => {
      const just = Just(42);
      expect(Object.isFrozen(just)).toBe(true);
    });
  });

  describe('Nothing', () => {
    it('constructs without a value', () => {
      const nothing = Nothing();
      expect(nothing.type).toBe(NOTHING);
      expect('value' in nothing).toBe(false);
    });

    it('is immutable', () => {
      const nothing = Nothing();
      expect(Object.isFrozen(nothing)).toBe(true);
    });
  });

  describe('mapMaybe', () => {
    it('maps Just to transformed Just', () => {
      const result = mapMaybe((x: number) => x * 2)(Just(42));
      expect(result.type).toBe(JUST);
      expect(
        foldMaybe(
          () => 0,
          x => x,
        )(result),
      ).toBe(84);
    });

    it('maps Nothing to Nothing', () => {
      const result = mapMaybe((x: number) => x * 2)(Nothing());
      expect(result.type).toBe(NOTHING);
    });

    it('handles complex values', () => {
      const obj = { a: 1 };
      const result = mapMaybe((o: { a: number }) => o.a)(Just(obj));
      expect(
        foldMaybe(
          () => 0,
          x => x,
        )(result),
      ).toBe(1);
    });
  });

  describe('chainMaybe', () => {
    it('chains Just to Just', () => {
      const result = chainMaybe((x: number) => Just(x * 2))(Just(42));
      expect(result.type).toBe(JUST);
      expect(
        foldMaybe(
          () => 0,
          x => x,
        )(result),
      ).toBe(84);
    });

    it('chains Just to Nothing', () => {
      const result = chainMaybe((x: number) => (x > 0 ? Just(x) : Nothing()))(Just(0));
      expect(result.type).toBe(NOTHING);
    });

    it('chains Nothing to Nothing', () => {
      const result = chainMaybe((x: number) => Just(x * 2))(Nothing());
      expect(result.type).toBe(NOTHING);
    });
  });

  describe('foldMaybe', () => {
    it('folds Just to onJust result', () => {
      expect(
        foldMaybe(
          () => 'None',
          x => `${x}`,
        )(Just(42)),
      ).toBe('42');
    });

    it('folds Nothing to onNothing result', () => {
      expect(
        foldMaybe(
          () => 'None',
          (x: number) => `${x}`,
        )(Nothing()),
      ).toBe('None');
    });
  });

  describe('fromNullable', () => {
    it('converts number to Just', () => {
      const result = fromNullable(42);
      expect(result.type).toBe(JUST);
      expect(
        foldMaybe(
          () => 0,
          x => x,
        )(result),
      ).toBe(42);
    });

    it('converts null to Nothing', () => {
      expect(fromNullable(null).type).toBe(NOTHING);
    });

    it('converts undefined to Nothing', () => {
      expect(fromNullable(undefined).type).toBe(NOTHING);
    });
  });

  describe('Monad Laws', () => {
    const pure = <T>(x: T) => Just(x);
    const f = (x: number) => Just(x * 2);
    const g = (x: number) => Just(x + 3);

    it('Left Identity: chainMaybe(f)(pure(x)) === f(x)', () => {
      const x = 42;
      const left = chainMaybe(f)(pure(x));
      const right = f(x);
      expect(
        foldMaybe(
          () => 0,
          v => v,
        )(left),
      ).toBe(
        foldMaybe(
          () => 0,
          v => v,
        )(right),
      );
    });

    it('Right Identity: chainMaybe(pure)(m) === m', () => {
      const just = Just(42);
      const nothing = Nothing();
      expect(
        foldMaybe(
          () => 0,
          v => v,
        )(chainMaybe(pure)(just)),
      ).toBe(just.value);
      expect(chainMaybe(pure)(nothing).type).toBe(NOTHING);
    });

    it('Associativity: chainMaybe(f . chainMaybe(g))(m) === chainMaybe(g . f)(m)', () => {
      const m = Just(42);
      const left = chainMaybe((x: number) => chainMaybe(f)(g(x)))(m);
      const right = chainMaybe((x: number) => f(g(x).value))(m);
      expect(
        foldMaybe(
          () => 0,
          v => v,
        )(left),
      ).toBe(
        foldMaybe(
          () => 0,
          v => v,
        )(right),
      );
    });

    it('Associativity with Nothing', () => {
      const m = Nothing();
      const left = chainMaybe((x: number) => chainMaybe(f)(g(x)))(m);
      const right = chainMaybe((x: number) => f(g(x).value))(m);
      expect(left.type).toBe(NOTHING);
      expect(right.type).toBe(NOTHING);
    });
  });
});
