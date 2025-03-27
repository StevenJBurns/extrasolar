import { DomainError } from '@domain/types';

export type PositiveNumberError = DomainError & {
  tag: 'PositiveNumberError';
  code: string;
  reason: string;
  context: string;
  message: string;
};
