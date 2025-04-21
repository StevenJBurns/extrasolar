export type BaseError<T extends string = string> = Readonly<{
  readonly reason: T;
  readonly message: string;
  readonly values: unknown[];
}>;
