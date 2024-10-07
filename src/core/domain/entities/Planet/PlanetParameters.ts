import { PlanetOrbit } from "core/domain/entities/Planet/PlanetOrbit";

export type PlanetParameters = {
  id: string,
  mass: number | null,
  radius: number | null,
  orbit: PlanetOrbit,
}
