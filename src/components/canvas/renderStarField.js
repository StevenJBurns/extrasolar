export const renderStarField = (ctx, stars) => {
  if (ctx === null || stars.length === 0) return;

  const h = ctx.canvas.height;
  const w = ctx.canvas.width;

  for (let star of stars) {
    /* convert each star from radial to centered x-y coords */
    let x = Math.cos(star.theta) * star.distance + (w / 2);
    let y = Math.sin(star.theta) * star.distance + (h / 2);

    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fillRect(x, y, 3, 3)
  }
};
