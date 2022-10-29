import React from 'react';
import { IStarField } from '.';
import { renderStarField } from './renderStarField';

function draw(ctx: CanvasRenderingContext2D): void {
  /* wipe the canvas between re-draws */
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export const useViewModel = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const starfield: IStarField = { stars: [] };

  if (!starfield.stars.length) {
    const filler = {
      polar: { theta: 0, distance: 1 },
      opacity: 1,
    };

    starfield.stars = Array(2048)
      .fill(filler)
      .map(() => ({
        polar: {
          theta: Math.random() * 2 * Math.PI,
          distance: Math.random() * 1024 + 8,
        },
        opacity: Math.random(),
      }));
  }

  React.useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      let nextFrame: number;

      const render = () => {
        if (context) {
          draw(context);
          renderStarField(context, starfield.stars);
        }

        /* update each star.theta before the next render */
        for (const star of starfield.stars) {
          star.polar.theta -= 0.001 * star.opacity;
        }

        nextFrame = window.requestAnimationFrame(render);
      };

      render();

      /* clean up */
      return () => cancelAnimationFrame(nextFrame);
    }
  }, [draw]);

  return canvasRef;
};
