export function curry<T extends any[], R>(fn: (...args: T) => R, arity = fn.length) {
  return (...args: any[]): any => 
    args.length >= arity 
      ? fn(...args.slice(0, arity) as T) 
      : (...moreArgs: any[]) => curry(fn, arity)(...args, ...moreArgs);
};
