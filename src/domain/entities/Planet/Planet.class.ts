import { PlanetParameters } from '@domain/Planet/PlanetParameters';
import { PlanetOrbit } from '@domain/Planet/PlanetOrbit';

export class Planet {
  private constructor(
    private readonly _id: string,
    private readonly _mass: number | null,
    private readonly _radius: number | null,
    private readonly _orbit: PlanetOrbit
    ) {}

  public static create(newPlanetArgs: PlanetParameters) {
    console.log(`creating new planet: ${newPlanetArgs}`);
    const { id, mass, radius, orbit } = newPlanetArgs;
    return new Planet(id, mass, radius, orbit);
  }

  public get id() {
    return this._id;
  }

  get mass() {
    return this._mass;
  }

  get radius() {
    return this._radius;
  }

  get orbit() {
    return this._orbit;
  }
}
