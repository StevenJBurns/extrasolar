import { NormalizedValueError, ErrorReasons } from './NormalizedValue.types.ts';

const errorReasons: Record<ErrorReasons, string> = {
  OutOfRange: 'NormalizedValue must be a number between 0 and 1, inclusive',
  Infinite: 'NormalizedValue must be a finite number',
  NaN: 'NormalizedValue must not be NaN',
};

export const createNormalizedValueError = (reason: ErrorReasons) =>
  Object.freeze({
    type: 'NormalizedValueError',
    reason,
    message: errorReasons[reason],
  } as NormalizedValueError);
