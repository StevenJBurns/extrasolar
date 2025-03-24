import { NormalizedValueError, NormalizedValueErrorReasons } from './NormalizedValue.types.ts';

const errorReasons: Record<NormalizedValueErrorReasons, string> = {
  OutOfRange: 'NormalizedValue must be a number between 0 and 1, inclusive',
  Infinite: 'NormalizedValue must be a finite number',
  NaN: 'NormalizedValue must not be NaN',
};

export const createNormalizedValueError = (reason: NormalizedValueErrorReasons) =>
  Object.freeze({
    code: 'NormalizedValueError',
    reason,
    message: errorReasons[reason],
  } as NormalizedValueError);
