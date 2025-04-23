import { Star } from './Star.ts';

const { create } = Star;

describe.skip('Star entity', () => {
  describe('create', () => {
    it('should be a function', () => expect(typeof create).toBe('function'));
    it('should return a valid Star given valid args', () => {
      const star = create({
        mass: { value: 1, unit: 'kilogram' },
        radius: 1,
        temperature: { value: 0, scale: 'Kelvin' },
        spectralType: 'K',
        age: 1,
      });

      expect(star).toEqual({
        type: 'Right',
        value: {
          mass: { value: 1, unit: 'kilogram' },
          radius: 0,
          temperature: { value: 0, scale: 'Kelvin' },
          spectralType: 'K',
          age: 1,
        },
      });
    });
  });
});
