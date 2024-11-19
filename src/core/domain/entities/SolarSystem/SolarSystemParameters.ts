import { Star } from "core/domain/entities/Star/Star.class";
import { Planet } from "core/domain/entities/Planet/Planet.class";

export type SolarSystemParameters = {
  id: string,
  stars: Array<Star>,
  planets: Array<Planet>,
}