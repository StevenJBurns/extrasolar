type CartesianPosition = {
  x: number;
  y: number;
};

type PolarPosition = {
  theta: number;
  radius: number;
};

export class PlanetSprite {
  #label: string;
  #radius: number;
  #period: number;
  #polar: PolarPosition;
  #cartesian: CartesianPosition = { x: 0, y: 0 };
  static #maxRadius: number;

  constructor(label: string, radius = 0, period = 0) {
    this.#label = label;
    this.#radius = radius;
    this.#period = period;
    this.#polar = {
      theta: Math.random() * 2 * Math.PI,
      radius: 1024,
    };
  }

  get radius() {
    return this.#radius;
  }

  get period() {
    return this.#period;
  }

  get polarLocation() {
    return this.#polar;
  }

  get cartesianLocation() {
    return this.#cartesian;
  }

  static get maxRadius(): number {
    return this.#maxRadius;
  }

  static set maxRadius(newRadius) {
    this.#maxRadius = newRadius;
  }

  private drawOrbit(ctx: CanvasRenderingContext2D, radius: number) {
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;

    ctx.strokeStyle = '#909090';
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false);
    ctx.stroke();
  }

  private drawPlanet(ctx: CanvasRenderingContext2D, radius: number) {
    const centerX = ctx.canvas.clientWidth / 2;
    const centerY = ctx.canvas.clientHeight / 2;

    const x = Math.cos(this.#polar.theta) * radius; // + this.foci;
    const y = Math.sin(this.#polar.theta) * radius;

    ctx.fillStyle = '#00dd00';
    ctx.beginPath();
    ctx.arc(x + centerX, y + centerY, 4, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }

  public render(ctx: CanvasRenderingContext2D, scale: number) {
    this.drawOrbit(ctx, scale);
    this.drawPlanet(ctx, scale);
  }

  public update(deltaTheta: number) {
    if (this.polarLocation.theta >= 2 * Math.PI) this.polarLocation.theta = 0;

    this.#polar.theta += deltaTheta;
  }
}
