import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  body: {
    color: 'gainsboro',
    borderBottom: 'none',
  },
})

export const TopLargestStarsTable = ({data}) => {
  const classes = useStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map((star, index) => (
            <TableRow key={index}>
              <TableCell className={classes.body} variant='body'>{star.pl_hostname}</TableCell>
              <TableCell className={classes.body} variant='body'>{star.st_rad}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};
