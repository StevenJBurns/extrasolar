type IStar = {
  id: string,
  mass: number | null,
  radius: number | null,
  temperature: number | null,
};

/* mass and radius are relative to the Sun */
export class Star implements IStar {
  #id: string;
  #mass: number | null;
  #radius: number | null;
  #temperature: number | null;

  constructor(args: IStar ) {
    this.#id = args.id;
    this.#mass = args.mass;
    this.#radius = args.radius;
    this.#temperature = args.temperature;
  }

  public get id() {
    return this.#id;
  }

  public get mass() {
    return this.#mass;
  }

  public get radius() {
    return this.#radius;
  }

  public get temperature() {
    return this.#temperature;
  }
}
