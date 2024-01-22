import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { Snackbar, SnackbarCloseReason, SnackbarContent } from '@mui/material';
import { styles } from './AppSnackbar.styles';

export type TProps = {
  hasErrors: boolean;
};

export const AppSnackbar = (props: TProps): ReactNode => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const fetchErrorString = 'An error occured fetching data';
  const fetchSuccessString = 'Data successfully fetched';

  useEffect(() => {
    setIsSnackbarOpen(true);
  }, [props.hasErrors]);

  const handleCloseSnackbar = (
    event: Event | SyntheticEvent<unknown, Event>,
    reason: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') return;
    setIsSnackbarOpen(false);
  };

  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <SnackbarContent
        message={props.hasErrors ? fetchErrorString : fetchSuccessString}
        css={styles}
      />
    </Snackbar>
  );
};
