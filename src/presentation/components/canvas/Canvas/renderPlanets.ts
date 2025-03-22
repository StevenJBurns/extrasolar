import { TSolarSystem } from '../pages/PageSystems/PageSystems.component';

export const renderPlanets = (ctx: CanvasRenderingContext2D, systemData: TSolarSystem) => {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;

  const mappedPlanets = systemData.planets
    .map(planet => ({
      label: planet.label,
      orbit: {
        radius: planet.orbit.radius.value,
        period: planet.orbit.period.value,
        theta: planet.orbit.theta,
      },
    }))
    .flat()
    .sort((a, b) => (a < b ? 1 : -1));

  const maxRadius = Math.max(...mappedPlanets.map(p => p.orbit.radius));

  mappedPlanets.forEach(p => {
    const scaledR = Math.floor(192 * (p.orbit.radius / maxRadius));
    // const dtheta = 1 / (4 * p.orbit.period);

    // render orbit
    ctx.strokeStyle = '#909090';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, scaledR, scaledR, 0, 0, 2 * Math.PI, false);
    ctx.stroke();

    // calculate cartesian coords
    const x = Math.cos(p.orbit.theta ?? 0) * p.orbit.radius + scaledR; // + this.foci;
    const y = Math.sin(p.orbit.theta ?? 0) * p.orbit.radius + scaledR;

    //render planet
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(centerX - x, centerY - y, 8, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  });
};
