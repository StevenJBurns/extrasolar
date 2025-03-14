import { DomainError } from '@domain/types/errors/DomainError/DomainError.interface';

export type MassError = DomainError & {
  type: 'MassError',
  reason: ''
};

export const invalidMass = (): MassError => (
  Object.freeze({
    type: 'MassError',
    reason: '',
  } as MassError)
);
