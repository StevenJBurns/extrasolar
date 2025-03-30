export type DomainError<Reason extends string> = {
  reason: Reason;
  message: string;
  values: unknown;
};
