type BaseError<T extends string = string> = Readonly<{
  readonly type: T;
  readonly reason: string;
  readonly message: string;
  readonly context?: Array<unknown>;
  readonly cause?: Array<unknown>;
}>;

export type DomainError<T extends string = string> = BaseError<T>;

export type InfrastructureError<T extends string = string> = BaseError<T>;

export type PresentationError<T extends string = string> = BaseError<T>;
