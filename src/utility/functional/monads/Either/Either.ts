const LEFT = 'Left';
const RIGHT = 'Right';

type Either<L, R> = { type: 'Left'; value: L } | { type: 'Right'; value: R };

const Left = <L>(value: L) => Object.freeze({ type: LEFT, value } as const);
const Right = <R>(value: R) => Object.freeze({ type: RIGHT, value } as const);

const isLeft = <L, R>(either: Either<L, R>): either is { type: 'Left'; value: L } =>
  either.type === LEFT;
const isRight = <L, R>(either: Either<L, R>): either is { type: 'Right'; value: R } =>
  either.type === RIGHT;

const map =
  <L, R, T>(fn: (r: R) => T) =>
  (either: Either<L, R>): Either<L, T> =>
    either.type === RIGHT ? Right(fn(either.value)) : either;

const fold =
  <L, R, E, V>(handleLeft: (l: L) => E, handleRight: (r: R) => V) =>
  (either: Either<L, R>): E | V =>
    either.type === LEFT ? handleLeft(either.value) : handleRight(either.value);

const chain =
  <L, R, T>(fn: (r: R) => Either<L, T>) =>
  (either: Either<L, R>): Either<L, T> =>
    either.type === RIGHT
      ? fn(either.value)
      : ({ type: LEFT, value: either.value } as Either<L, T>);

export {
  type Either,
  Left,
  Right,
  isLeft,
  isRight,
  map as mapEither,
  fold as foldEither,
  chain as chainEither,
};
