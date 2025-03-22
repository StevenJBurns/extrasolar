export function pipe<T, R>(value: T, ...fns: Array<(x: any) => any>): R {
  return fns.reduce((acc, fn) => fn(acc), value) as unknown as R;
}
