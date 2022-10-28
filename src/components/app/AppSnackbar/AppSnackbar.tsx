import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { useStyles } from './AppSnackbar.styles';

interface IProps {
  hasErrors: boolean
}

const fetchErrorString = 'An error occured fetching data';
const fetchSuccessString = 'Data successfully fetched';

export const AppSnackbar = (props: IProps): ReactNode => {
  const classes = useStyles(props);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  
  useEffect(() => {
    setIsSnackbarOpen(true);
  }, [props.hasErrors]);

  const handleCloseSnackbar = (_: SyntheticEvent<HTMLElement, Event>, reason: string) => {
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
        className={classes.root}
        message={props.hasErrors ? fetchErrorString : fetchSuccessString}
      />
    </Snackbar>
  );
};
 export type { IProps };
 