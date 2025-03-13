export function compose<T, R>(...fns: Array<(x: any) => any>): (value: T) => R {
  return (value: T) => fns.reduceRight((acc, fn) => fn(acc), value) as unknown as R;
};
