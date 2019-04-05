export const renderSystemStar = (ctx, width, star) => {
  if (!star) return;

  let rgStar = ctx.createRadialGradient(width / 2, 180, 4, width /2, 180, 80);
  rgStar.addColorStop(0, "#FFFF99");
  rgStar.addColorStop(0.05, "rgba(255,255,127,255)")
  rgStar.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = rgStar;
  ctx.beginPath();
  ctx.arc(width /2, 180, 96, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
};
