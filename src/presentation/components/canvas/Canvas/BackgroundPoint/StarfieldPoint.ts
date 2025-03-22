type PolarCoordinates = {
  theta: number;
  distance: number;
};

export class StarfieldPoint {
  #polar: PolarCoordinates;
  #opacity: number;

  constructor() {
    this.#polar = {
      theta: Math.random() * 2 * Math.PI,
      distance: Math.random() * 1024,
    };
    this.#opacity = Math.random();
  }

  public render(ctx: CanvasRenderingContext2D) {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    const x = Math.cos(this.#polar.theta) * this.#polar.distance + centerX;
    const y = Math.sin(this.#polar.theta) * this.#polar.distance + centerY;

    ctx.fillStyle = `rgba(255, 255, 255, ${this.#opacity})`;
    ctx.fillRect(x, y, 1, 1);
  }

  public update(deltaTheta: number) {
    this.#polar.theta >= 2 * Math.PI
      ? (this.#polar.theta = 0)
      : (this.#polar.theta += deltaTheta);
  }
}
