import { CSSProperties } from 'react';
import { useViewModel } from './Canvas.viewmodel.tsx';
import { SolarSystem } from '../types/SolarSystem.type.ts';
import { Box } from '@mui/material';
import { boxStyles } from './Canvas.styles.tsx';

export const Canvas = (props: { solarSystemData: SolarSystem }) => {
  const { solarSystemData } = props;
  const { canvasRef } = useViewModel(solarSystemData);

  const canvasStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'block',
  };

  return (
    <Box sx={boxStyles}>
      <canvas ref={canvasRef} style={canvasStyles} />
    </Box>
  );
};
