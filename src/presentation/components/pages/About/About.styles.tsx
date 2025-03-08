import { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

export const dividerStyles: SxProps<Theme> = {
  bgcolor: '#7d7d7d',
  mb: 2,
};
