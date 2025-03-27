import { createNormalizedValue } from './NormalizedValue.factory.ts';

describe('createNormalizedValue', () => {
  it('returns Right for 0 (inclusive lower bound)', () => {
    const result = createNormalizedValue(0);

    expect(result.type).toEqual('Right');
    expect(result.value).toBe(0);
  });

  it('returns Right for 0.5 (middle of range)', () => {
    const result = createNormalizedValue(0.5);

    expect(result.type).toEqual('Right');
    expect(result.value).toBe(0.5);
  });

  it('returns Right for 1 (inclusive upper bound)', () => {
    const result = createNormalizedValue(1);

    expect(result.type).toEqual('Right');
    expect(result.value).toBe(1);
  });

  it('returns Left with Infinite reason for Infinity', () => {
    const error = createNormalizedValue(Infinity);

    expect(error.type).toEqual('Left');
    expect(error.value).toEqual({
      code: 'NormalizedValueError',
      reason: 'Infinite',
      message: 'NormalizedValue must be a finite number',
    });
  });

  it('returns Left with Infinite reason for -Infinity', () => {
    const error = createNormalizedValue(-Infinity);

    expect(error.type).toBe('Left');
    expect(error.value).toEqual({
      code: 'NormalizedValueError',
      reason: 'Infinite',
      message: 'NormalizedValue must be a finite number',
    });
  });

  it('returns Left with NaN reason for NaN', () => {
    const error = createNormalizedValue(NaN);

    expect(error.type).toBe('Left');
    expect(error.value).toEqual({
      code: 'NormalizedValueError',
      reason: 'NaN',
      message: 'NormalizedValue must not be NaN',
    });
  });

  it('returns Left with OutOfRange reason for negative values', () => {
    const error = createNormalizedValue(-1);

    expect(error.type).toBe('Left');
    expect(error.value).toEqual({
      code: 'NormalizedValueError',
      reason: 'OutOfRange',
      message: 'NormalizedValue must be a number between 0 and 1, inclusive',
    });
  });

  it('returns Left with OutOfRange reason for values greater than 1', () => {
    const error = createNormalizedValue(1.1);

    expect(error.type).toBe('Left');
    expect(error.value).toEqual({
      code: 'NormalizedValueError',
      reason: 'OutOfRange',
      message: 'NormalizedValue must be a number between 0 and 1, inclusive',
    });
  });
});
