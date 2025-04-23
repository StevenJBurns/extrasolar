import { MassValue } from './MassValue.ts';
import { MassUnit, isValidMassUnit } from './MassUnit.ts';
import { Either, Left, Right } from '@utility/functional/monads/index.ts';
import { DomainError } from '@domain/types';

type Mass = { value: MassValue; unit: MassUnit };
type ErrorReason = 'InvalidValue' | 'InvalidUnit';
type MassError = DomainError<'MassError'>;

const massConversions: Record<MassUnit, number> = {
  kilogram: 1,
  earth: 5.972e24,
  jupiter: 1.898e27,
  sun: 1.989e30,
};

const errorMessages: Record<ErrorReason, string> = {
  InvalidValue: 'Mass.value must be a finite positive number',
  InvalidUnit: "Mass.unit must be 'kilogram' | 'earth' | 'jupiter' | 'sun'",
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

  const baselineValue = inputMass.value * massConversions[inputMass.unit];
  const newValue = baselineValue / massConversions[targetUnit];

  return {
    value: newValue as MassValue,
    unit: targetUnit,
  };
}

const Mass = {
  create: createMass,
  convert: convertMass,
  getValue: (m: Mass): MassValue => m.value,
  getUnit: (m: Mass): MassUnit => m.unit,
};

export type { Mass };
