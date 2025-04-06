export type DomainError<Reason extends string = string, Context = unknown> = {
  reason: Reason;
  message: string;
  context: Context;
};
