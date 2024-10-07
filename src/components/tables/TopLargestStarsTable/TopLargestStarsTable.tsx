import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import { styles } from './TopLargestStarsTable.styles';

type TProps = {
  data: Array<unknown>;
};

export const TopLargestStarsTable = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <Typography css={styles} variant="h6">
        {'Top Largest Radius Stars'.toUpperCase()}
      </Typography>
      <Table size="small" css={styles}>
        <TableHead css={styles}>
          <TableRow>
            <TableCell>Star Name</TableCell>
            <TableCell>Planets</TableCell>
            <TableCell>
              Radius
              <sub>
                <strong>&#x2609;</strong>
              </sub>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {
            data.map((star, index) => (
              <TableRow key={index} className={classes.body}>
                <TableCell className={classes.body} variant='body'>{star.pl_hostname}</TableCell>
                <TableCell className={classes.body} variant="body">{star.pl_pnum}</TableCell>
                <TableCell className={classes.body} variant='body'>{star.st_rad.toFixed(2)}</TableCell>
              </TableRow>
            ))
          } */}
        </TableBody>
      </Table>
    </>
  );
};
