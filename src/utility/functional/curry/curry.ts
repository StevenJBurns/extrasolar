export const curry =
  <T extends (...args: Array<unknown>) => unknown>(fn: T) =>
  (...args: Array<Parameters<T>[0]>): unknown =>
    args.length >= fn.length
      ? fn(...(args as Array<Parameters<T>[0]>))
      : (...moreArgs: Array<Parameters<T>[0]>) =>
          curry(fn)(...args, ...moreArgs);
