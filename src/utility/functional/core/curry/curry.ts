export function curry<T extends any[], R>(fn: (...args: T) => R, arity = fn.length) {
  return (...args: Array<any>): any =>
    args.length >= arity
      ? fn(...(args.slice(0, arity) as T))
      : (...moreArgs: Array<any>) => curry(fn, arity)(...args, ...moreArgs);
}
