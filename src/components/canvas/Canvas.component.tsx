import { useViewModel } from './Canvas.viewmodel';
import { TSolarSystem } from '../pages/PageSystems/PageSystems.component';
import { Box } from '@mui/material';

type TProps = {
  systemData: TSolarSystem;
};

export const Canvas = (props: TProps) => {
  const { systemData } = props;
  const { canvasRef } = useViewModel(systemData);
  const handleMouseOver = (e: { clientX: unknown; clientY: unknown }) =>
    console.log(e.clientX, e.clientY);

  return (
    <Box
      width="100%"
      height="100%"
      position="absolute"
      overflow="hidden"
      zIndex={-1}
    >
      <canvas
        onMouseOver={handleMouseOver}
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
