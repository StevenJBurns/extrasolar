export function compose<T>(...fns: Array<(x: T) => T>): (value: T) => T {
  return (value: T) => fns.reduceRight((acc, fn) => fn(acc), value);
}
