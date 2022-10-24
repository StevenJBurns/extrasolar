import React from 'react';
import { connect } from "react-redux";
import { renderStarField } from './renderStarField';
import { renderSystemStar } from './renderSystemStar';

/* custom hook to render an HTML5 canvas */
const useCanvas = (draw, stars, selectedSolarSystem) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let frame = requestAnimationFrame(renderFrame);

    function renderFrame() {
      frame = requestAnimationFrame(renderFrame);

      /* wipe the canvas between re-draws */
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      /* update each star.theta and re-render */
      for (let star of stars) star.theta -= 0.001 * (star.opacity * 2);
      draw(ctx, stars);
      renderSystemStar(ctx, {})
    }

    return () => cancelAnimationFrame(frame);
  }, [draw, stars]);

  return canvasRef;
};

export const CanvasComponent = ({ selectedSolarSystem }) => {
  const [canvasWidth, setCanvasWidth] = React.useState(0);
  const [solarSystem, setSolarSystem] = React.useState(selectedSolarSystem || null);
  const [starField, setStarField] = React.useState([]);

  const handleResize = () => setCanvasWidth(window.innerWidth);

  React.useEffect(() => {
    setCanvasWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, true);
    
    return () => window.removeEventListener("resize", handleResize, true);
  }, []);

  React.useEffect(() => {
    /* on Mount, create a randomized starfield background for the canvas */
    const _starfield = [];
    for (let i = 0; i < (canvasWidth / 2); i++) {
      // Create an object for each star as { theta, dist and opacity }
      // theta and dist are randomized radial coords based on canvas width
      // o is a random opacity for the illusion of depth in the starfield
      _starfield.push({
        theta: Math.random() * 2 * Math.PI,
        distance: (Math.random() * canvasWidth * 1.5) + 96,
        opacity: Math.random() / 2,
      });
    }
    setStarField(_starfield);
  }, [canvasWidth]);

  React.useEffect(() => {
    if(selectedSolarSystem) setSolarSystem(selectedSolarSystem);
  }, [solarSystem, selectedSolarSystem]);

  const canvasRef = useCanvas(renderStarField, starField, solarSystem);
  
  return (
    <div id='div-canvas-wrapper'>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasWidth <= 800 ? canvasWidth / 2 : 400} />
    </div>
  );
};

const mapStateToProps = state => {
  const { stars, planets, selectedSolarSystem, isLoading, error } = state.data;
  return { stars, planets, selectedSolarSystem, isLoading, error };
};

export default connect(mapStateToProps, null)(CanvasComponent);