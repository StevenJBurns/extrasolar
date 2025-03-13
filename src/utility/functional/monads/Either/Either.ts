const Left = <L>(value: L) => Object.freeze({ type: 'Left', value } as const);

const Right = <R>(value: R) => Object.freeze({ type: 'Right', value } as const);

type Either<L, R> = { type: 'Left'; value: L } | { type: 'Right'; value: R };

const map = <L, R, T>(fn: (r: R) => T) => (either: Either<L, R>): Either<L, T> => 
  either.type === 'Right' ? Right(fn(either.value)) : either;

const fold = <L, R, E, V>(onLeft: (l: L) => E, onRight: (r: R) => V) => (either: Either<L, R>): E | V => 
  either.type === 'Left' ? onLeft(either.value) : onRight(either.value);

const chain = <L, R, T>(fn: (r: R) => Either<L, T>) => 
  (either: Either<L, R>): Either<L, T> => ( 
    either.type === 'Right'
      ? fn(either.value)
      : { type: 'Left', value: either.value } as Either<L, T>
    );

export {
  Left,
  Right,
  type Either,
  map as mapEither,
  fold as foldEither,
  chain as chainEither,
};
