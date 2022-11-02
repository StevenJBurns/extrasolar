import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  tableTitle: {
    margin: 'auto',
    padding: '0 12px',
    minWidth: '320px',
    marginBottom: '4px',
    backgroundColor: 'grey',
    fontFamily: 'Lato',
    color: 'gainsboro',
    lineHeight: 2,
  },
  tableRoot: {
    border: 'none',
    margin: '0 auto',
    maxWidth: '320px',
  },
  tableHead: {
    border: 'none',
  },
  body: {
    color: 'gainsboro',
    borderBottom: 'none',
  },
});

export const TopLargestStarsTable = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.tableTitle} variant="h6">
        {'Top Largest Radius Stars'.toUpperCase()}
      </Typography>
      <Table size="small" className={classes.tableRoot}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Star Name</TableCell>
            <TableCell>Planets</TableCell>
            <TableCell>Radius<sub><strong>&#x2609;</strong></sub></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
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
