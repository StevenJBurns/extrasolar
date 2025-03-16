import { AngleErrorReason } from '@domain/values';

const errorMessages: Record<AngleErrorReason, string> = {
  InvalidValue: 'Angle.value must be a valid finite number',
  OutOfRange: 'Angle.value must be within range (0-360 degrees or 0-2π radians)',
  InvalidUnit: "Angle.unit must be 'degrees' or 'radians'",
  UnitMismatch: 'Both angles must use the same unit (degrees or radians)',
};

export const createAngleError = (reason: AngleErrorReason) => (
  Object.freeze({
    code: 'AngleError',
    reason,
    message: errorMessages[reason],
  })
);
