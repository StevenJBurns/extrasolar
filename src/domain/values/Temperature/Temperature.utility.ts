import type { Temperature, TemperatureScale } from '@domain/values';
// import type { FiniteNumber } from '@domain/primitives';

export const getValue = (t: Temperature): number => t.value;
export const getScale = (t: Temperature): TemperatureScale => t.scale;

export const equals = (a: Temperature, b: Temperature): boolean =>
  a.value === b.value && a.scale === b.scale;

// export const convertTemperature = (t: Temperature, targetScale: TemperatureScale): Temperature => {
//   if (t.scale === targetScale) return t;

//    const value = t.unit === 'degrees'
//      ? (a.value * Math.PI) / 180
//      : (a.value * 180) / Math.PI;

//   const CONVERSIONS_FACTORS: Record<TemperatureScale, number> = {
//     Kelvin: 1,
//     Celsius: 
//   };

//   return Object.freeze({
//     value: value as FiniteNumber,
//     scale: targetScale,
//   });
// };
