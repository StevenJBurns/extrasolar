import React from 'react';
import { useViewModel } from './Canvas.viewmodel';
import { useStyles } from './Canvas.styles';

export const Canvas = () => {
  const [canvasWidth, setCanvasWidth] = React.useState(window.innerWidth);
  const canvasRef = useViewModel();
  const classes = useStyles();

  const handleResize = (): void => setCanvasWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    /* clean up */
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const canvasHeight = canvasWidth <= 800 ? canvasWidth / 2 : 400;

  return (
    <div className={classes.container}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};
