const JUST = 'Just';
const NOTHING = 'Nothing';

type Nothing = { type: typeof NOTHING };
type Just<T> = { type: typeof JUST; value: T };
type Maybe<T> = Just<T> | Nothing;

const Nothing = () => Object.freeze({ type: 'Nothing' } as const);

const Just = <T>(value: T) => Object.freeze({ type: 'Just', value } as const);

const map =
  <T, U>(fn: (t: T) => U) =>
  (maybe: Maybe<T>): Maybe<U> =>
    maybe.type === JUST ? Just(fn(maybe.value)) : Nothing();

const chain =
  <T, U>(fn: (t: T) => Maybe<U>) =>
  (maybe: Maybe<T>): Maybe<U> =>
    maybe.type === JUST ? fn(maybe.value) : Nothing();

const fold =
  <T, U>(onNothing: () => U, onJust: (t: T) => U) =>
  (maybe: Maybe<T>): U =>
    maybe.type === JUST ? onJust(maybe.value) : onNothing();

const fromNullable = <T>(value: T | null | undefined): Maybe<T> =>
  value === null || value === undefined ? Nothing() : Just(value);

export {
  Just,
  Nothing,
  type Maybe,
  map as mapMaybe,
  chain as chainMaybe,
  fold as foldMaybe,
  fromNullable,
};
