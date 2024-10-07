import { useEffect, useRef } from 'react';
import { IStarField } from '.';
import { renderStarField } from './renderStarField';
import { wipeCanvas } from './wipeCanvas';
import { TSolarSystem } from '../pages/PageSystems/PageSystems.component';
import { PlanetSprite } from './classes/PlanetSprite';

export const useViewModel = (data: TSolarSystem) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starfield: IStarField = { stars: [] };
  const planets: Array<PlanetSprite> = data.planets.map(
    p => new PlanetSprite(p.label, p.orbit.radius.value, p.orbit.period.value),
  );

  /* get the largest radius and store it in the static property of PlanetSprite;
  this is used in each sprite's instance render method to scale its orbit relative
  to the largest, keeping the whole solar system within screen boundaries */
  PlanetSprite.maxRadius = Math.max(...planets.map(p => p.radius));

  if (!starfield.stars.length) {
    const filler = {
      polar: { theta: 0, distance: 1 },
      opacity: 1,
    };

    starfield.stars = Array(1024)
      .fill(filler)
      .map(() => ({
        polar: {
          theta: Math.random() * 2 * Math.PI,
          distance: Math.random() * 1024 + 8,
        },
        opacity: Math.random(),
      }));
  }

  useEffect(() => {
    if (!canvasRef) return;

    const canvas = canvasRef;
    const observer = new ResizeObserver(() => {
      if (!canvas.current) return;

      canvas.current.width = canvas.current.clientWidth;
      canvas.current.height = canvas.current.clientHeight;
    });

    if (canvasRef.current)
      observer.observe(canvasRef.current as HTMLCanvasElement);

    return () => {
      if (canvas.current)
        observer.unobserve(canvas.current as HTMLCanvasElement);
    };
  }, [canvasRef]);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      let nextFrame: number;

      if (!context) return;

      const render = () => {
        if (context) {
          /* render order is important */
          wipeCanvas(context);
          renderStarField(context, starfield.stars);

          /* render star */
          const halfWidth = context.canvas.width / 2;
          const halfHeight = context.canvas.height / 2;
          const rgStar = context.createRadialGradient(0, 0, 0, 0, 0, 48);

          const starClassColorMap = {
            G: {
              begin: '#FFFF99',
              stop: 'rgba(255, 255, 127, 255)',
            },
            K: {
              begin: '#FFA500',
              stop: 'rgba(255, 165, 0, 255)',
            },
            M: {
              begin: '#d41a1a',
              stop: 'rgba(120, 24, 24, 255)',
            },
            O: {
              begin: '#b1bbfb',
              stop: 'rgba(24, 24, 120, 255)',
            },
            B: {
              begin: '#b1bbfb',
              stop: 'rgba(24, 24, 120, 255)',
            },
            A: {
              begin: '#fafbfd',
              stop: 'rgba(255, 63, 63, 255)',
            },
            F: {
              begin: '',
              stop: '',
            },
          };

          const primaryStar = data.stars[0];

          rgStar.addColorStop(0.0, starClassColorMap[primaryStar.class].begin);
          rgStar.addColorStop(0.1, starClassColorMap[primaryStar.class].begin);
          rgStar.addColorStop(0.2, starClassColorMap[primaryStar.class].stop);
          rgStar.addColorStop(1.0, 'rgba(0, 0, 0, 0)');

          context.save();
          context.translate(halfWidth, halfHeight);
          context.fillStyle = rgStar;
          context.beginPath();
          context.arc(0, 0, 360, 0, Math.PI * 2, true);
          context.closePath();
          context.fill();
          context.restore();

          planets.forEach(p => {
            const canvasMaxRenderDistance = Math.min(
              context.canvas.width / 2,
              context.canvas.height / 2,
            );

            const renderRadius =
              (p.radius / PlanetSprite.maxRadius) * canvasMaxRenderDistance;
            p.render(context, renderRadius * 0.8);
          });
        }

        /* update each sprite's theta before the next render */
        starfield.stars.forEach(s => (s.polar.theta += 0.00025 * s.opacity));
        planets.forEach(p => p.update(1 / (8 * p.period)));

        nextFrame = window.requestAnimationFrame(render);
      };

      render();

      /* effect clean up */
      return () => cancelAnimationFrame(nextFrame);
    }
  }, [starfield.stars, data, planets]);

  return {
    canvasRef,
  };
};
