import { Mass } from './Mass.ts';

describe.skip('Mass', () => {
  describe('create', () => {
    it('should create valid mass in kilograms', () => {
      const result = Mass.create(1, 'kilogram');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: 1, unit: 'kilogram' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should create valid mass in sun units', () => {
      const result = Mass.create(1.5, 'sun');
      expect(result.type).toBe('Right');
      if (result.type === 'Right') {
        expect(result.value).toEqual({ value: 1.5, unit: 'sun' });
        expect(Object.isFrozen(result.value)).toBe(true);
      }
    });

    it('should reject Infinity', () => {
      const result = Mass.create(Infinity, 'kilogram');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual(createMassError('InvalidValue'));
    });

    it('should reject zero', () => {
      const result = Mass.create(0, 'earth');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual(createMassError('InvalidValue'));
    });

    it('should reject invalid unit', () => {
      const invalidUnit = 'unknown unit' as never;
      const result = Mass.create(1, invalidUnit);
      expect(result.type).toBe('Left');
      expect(result.value).toEqual(createMassError('InvalidUnit'));
    });

    it('should reject invalid input types', () => {
      const invalidInput = 'invalid input type as string' as never;
      const result = Mass.create(invalidInput, 'kilogram');
      expect(result.type).toBe('Left');
      expect(result.value).toEqual(createMassError('InvalidValue'));
    });
  });

  describe('convert', () => {
    it('should return same mass when units match', () => {
      const result = Mass.create(1, 'kilogram');
      if (result.type === 'Right') {
        const mass = result.value;
        const converted = Mass.convert(mass, 'kilogram');
        expect(converted).toEqual(mass);
        expect(converted).toBe(mass);
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert kilogram to M⊕ (earth)', () => {
      const result = Mass.create(5.972e24, 'kilogram');
      if (result.type === 'Right') {
        const converted = Mass.convert(result.value, 'earth');
        expect(converted.value).toBeCloseTo(1, 6);
        expect(converted.unit).toBe('earth');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert M⊕ (earth) to kilogram', () => {
      const result = Mass.create(1, 'earth');
      if (result.type === 'Right') {
        const converted = Mass.convert(result.value, 'kilogram');
        expect(converted.value).toBeCloseTo(5.972e24, 6);
        expect(converted.unit).toBe('kilogram');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert sun to jupiter', () => {
      const result = Mass.create(1, 'sun');
      if (result.type === 'Right') {
        const converted = Mass.convert(result.value, 'jupiter');
        expect(converted.value).toBeCloseTo(1.989e30 / 1.898e27, 6);
        expect(converted.unit).toBe('jupiter');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });

    it('should convert jupiter to sun', () => {
      const result = Mass.create(1, 'jupiter');
      if (result.type === 'Right') {
        const converted = Mass.convert(result.value, 'sun');
        expect(converted.value).toBeCloseTo(1.898e27 / 1.989e30, 6);
        expect(converted.unit).toBe('sun');
        expect(Object.isFrozen(converted)).toBe(true);
      }
    });
  });

  describe('getUnit', () => {
    it('should return kilogram unit', () => {
      const result = Mass.create(2, 'kilogram');
      if (result.type === 'Right') {
        expect(Mass.getUnit(result.value)).toBe('kilogram');
      }
    });

    it('should return sun unit', () => {
      const result = Mass.create(1, 'sun');
      if (result.type === 'Right') {
        expect(Mass.getUnit(result.value)).toBe('sun');
      }
    });
  });

  describe('getValue', () => {
    it('should return the value of a mass in kilograms', () => {
      const result = Mass.create(2, 'kilogram');
      if (result.type === 'Right') {
        expect(Mass.getValue(result.value)).toBe(2);
      }
    });

    it('should return the value of a mass in earth units', () => {
      const result = Mass.create(1.5, 'earth');
      if (result.type === 'Right') {
        expect(Mass.getValue(result.value)).toBe(1.5);
      }
    });
  });
});
