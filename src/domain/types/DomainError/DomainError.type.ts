export type DomainError<T> = {
  type: T;
  reason: string;
  message: string;
};
