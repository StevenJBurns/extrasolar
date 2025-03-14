import { DomainError } from '@domain/types/DomainError/DomainError.interface';

export type MassError = DomainError & {
  code: 'MassError',
  message: ''
};

export const invalidMass = (): MassError => (
  Object.freeze({
    code: 'MassError',
    message: '',
  } as MassError)
);
