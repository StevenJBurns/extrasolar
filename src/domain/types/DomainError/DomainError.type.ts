export type DomainError<T> = {
  type: T;
  reason: string;
  message: string;
  context?: unknown;
  cause?: Array<unknown>;
};
