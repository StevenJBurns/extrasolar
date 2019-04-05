import React from 'react';
import { connect } from "react-redux";
import { renderStarField } from './renderStarField';
// import { renderSystemStar } from './renderSystemStar';

/* custom hook to render an HTML5 canvas */
function useCanvas(draw, context = '2d') {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext(context);
    let frame = requestAnimationFrame(renderFrame);

    renderStarField(ctx)

    function renderFrame() {
      frame = requestAnimationFrame(renderFrame);
      draw(ctx);
    }

    return () => cancelAnimationFrame(frame);
  }, []);

  return canvasRef;
};

const resizeCanvas = e => {
  // console.log(e.target);
  // ctx.fillStyle = "#000000";
  // ctx.fillRect(0, 0, 2048, 2048);
};

export const CanvasComponent = ({selectedSolarSystem = null}) => {
  const [starField, setStarField] = React.useState([]);
  const [canvasWidth, setCanvasWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    
    setCanvasWidth(window.innerWidth);

    /* on Mount, create a randomized starfield for the canvas */
    const _starfield = [];
    for (let i = 0; i < (canvasWidth / 2); i++) {
      let randomX = Math.floor(Math.random() * canvasWidth * 4);
      let randomY = Math.floor(Math.random() * canvasWidth * 2);
      let randomO = Math.random();
      // Create an array [x, y, o] for each star from the above variables
      // x and y are randomized coords based on canvas size
      // o is a random opacity (conveniently) from 0 to 1 for the illusion of depth in the starfield
      _starfield.push([randomX, randomY, randomO]);
    }
    setStarField(_starfield);
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const canvasRef = useCanvas(gl => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }, "webgl2", starField);

  console.log(starField);
  
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