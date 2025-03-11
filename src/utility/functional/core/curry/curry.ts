type AnyFn = (...args: unknown[]) => unknown;

export function curry<F extends AnyFn>(fn: F, arity = fn.length): unknown {
  return function curried(...args: Array<unknown>): unknown {
    if (args.length >= arity) return fn(...args.slice(0, arity));

    return (...moreArgs: Array<unknown>) => curried(...args, ...moreArgs);
  };
}
