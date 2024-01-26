import { Star } from "core/domain/entities/Star/Star";
import { Planet } from "core/domain/entities/Planet/Planet";

export type SolarSystemParameters = {
  id: string,
  stars: Array<Star>,
  planets: Array<Planet>,
}