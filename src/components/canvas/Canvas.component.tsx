import { useEffect, useState } from 'react';
import { useViewModel } from './Canvas.viewmodel';
import { styles } from './Canvas.styles';

export const Canvas = () => {
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const canvasRef = useViewModel();

  const handleResize = (): void => setCanvasWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize, true);

    /* clean up */
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const canvasHeight = canvasWidth <= 800 ? canvasWidth / 2 : 400;

  return (
    <div css={styles}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};
