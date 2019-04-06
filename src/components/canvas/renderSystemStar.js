export const renderSystemStar = (ctx, star) => {
  // if (!star) return;
  
  let centerX = ctx.canvas.width / 2;
  let centerY = ctx.canvas.height / 2;

  /* create a radial gradient to "texture" the star arc below */
  let starRadialGradient = ctx.createRadialGradient(centerX, centerY , 0, centerX, centerY, 72);
  starRadialGradient.addColorStop(0, "#FFFF99");
  starRadialGradient.addColorStop(0.05, "rgba(255,255,127,255)")
  starRadialGradient.addColorStop(1, "rgba(0,0,0,0)");

  /* draw the arc over 2 * Pi radians AKA a circle using the gradient above */
  ctx.fillStyle = starRadialGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 96, 96, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
};
