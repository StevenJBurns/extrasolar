import { useEffect } from 'react';
import { useViewModel } from './Canvas.viewmodel';
import { Box } from '@mui/material';

export const Canvas = () => {
  const canvasRef = useViewModel();

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

  return (
    <Box
      width="100%"
      height="100%"
      position="absolute"
      overflow="hidden"
      zIndex={-1}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'block',
        }}
      />
    </Box>
  );
};
