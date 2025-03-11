import { Angle } from './Angle.type.ts';
import { AngleUnit } from "./AngleUnit/AngleUnit.type.ts";

export function createAngle(value: number, unit: AngleUnit): Angle {
  return Object.freeze({
    value,
    unit,
  });
};
