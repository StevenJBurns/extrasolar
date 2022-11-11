import { makeStyles } from '@mui/styles';
import type { IProps } from './AppSnackbar';

export const useStyles = makeStyles({
  root: {
    background: (props: IProps) => props.hasErrors ? '#770000' : '#007700',
    color: '#DDDDDD',
  }
});
