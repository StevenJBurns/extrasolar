export function pipe<T>(value: T, ...fns: Array<(x: T) => T>) {
  return fns.reduce((acc, fn) => fn(acc), value);
}
