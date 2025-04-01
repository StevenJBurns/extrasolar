export function curry<T extends Array<unknown>, R>(fn: (...args: T) => R, arity = fn.length) {
  return (...args: Array<unknown>): unknown =>
    args.length >= arity
      ? fn(...(args.slice(0, arity) as T))
      : (...moreArgs: Array<unknown>) => curry(fn, arity)(...args, ...moreArgs);
}
