import { type } from "os";

import { Planet } from './Planet';

/* star mass and radius are relative to the Sun */
export type Star = {
  name: string,
  isBinary: boolean,
  mass: number | undefined,
  radius: number | undefined,
  temperature: number | undefined,
  planets: Array<Planet> | [],
};
