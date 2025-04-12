import { MassValue } from './MassValue.ts';
import { MassUnit, isValidMassUnit } from './MassUnit.ts';
import { Either, Left, Right } from '@utility/functional/monads/index.ts';
import { DomainError } from '@domain/types';

type ErrorReason = 'InvalidValue' | 'InvalidUnit';
type MassError = DomainError<'MassError'>;
type MassType = {
  value: MassValue;
  unit: MassUnit;
};

const errorMessages: Record<ErrorReason, string> = {
  InvalidValue: 'Mass.value must be a finite non-zero positive number',
  InvalidUnit: "Mass.unit must be 'Kilogram' | 'earth' | 'jupiter' | 'sun'",
};

const massConversions: Record<MassUnit, number> = {
  kilogram: 1,
  earth: 5.972e24,
  jupiter: 1.898e27,
  sun: 1.989e30,
};

function createError(reason: ErrorReason): Either<MassError, never> {
  return Left({
    type: 'MassError',
    reason,
    message: errorMessages[reason],
  });
}

function createMass(inputValue: MassValue, inputUnit: MassUnit): Either<MassError, Mass> {
  if (!isValidMassUnit(inputUnit)) return createError('InvalidUnit');

  return Right({ value: inputValue, unit: inputUnit });
}

function convertMass(inputMass: Mass, targetUnit: MassUnit): Mass {
  if (inputMass.unit === targetUnit) return inputMass;

  const valueInKg = inputMass.value * massConversions[inputMass.unit];
  const newValue = valueInKg / massConversions[targetUnit];

  return {
    value: newValue as MassValue,
    unit: targetUnit,
  };
}

export type Mass = MassType;

export const Mass = {
  create: createMass,
  convert: convertMass,
  getUnit: (m: Mass): MassUnit => m.unit,
  getValue: (m: Mass): MassValue => m.value,
};
