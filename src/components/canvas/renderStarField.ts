import { IStarPoint } from ".";

export const renderStarField = (
  ctx: CanvasRenderingContext2D,
  stars: Array<IStarPoint>,
  ): void => {
    const h = ctx.canvas.height;
    const w = ctx.canvas.width;
  

    for (const star of stars) {
      /* convert each star from polar to x-y coords */
      const x = Math.cos(star.polar.theta) * star.polar.distance + (w / 2);
      const y = Math.sin(star.polar.theta) * star.polar.distance + (h / 2);

      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fillRect(x, y, 1, 1)
    }
};
