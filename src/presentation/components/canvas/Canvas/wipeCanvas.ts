/* wipes the canvas between re-draws */

export const wipeCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
