import { SxProps } from '@mui/material/styles';

type TStyles = {
  app: SxProps;
  page: SxProps;
};

export const styles: TStyles = {
  app: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
  },
  page: {
    flex: '1 0 auto',
  },
};
