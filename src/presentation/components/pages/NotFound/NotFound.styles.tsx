import { SxProps, Theme } from '@mui/material';
import blackHoleImage from '@assets/images/black-hole.jpg';

export const styles: SxProps<Theme> = {
  flex: '1 0 auto',
  color: 'red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${blackHoleImage})`,
};
