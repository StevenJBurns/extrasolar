import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCategoricalSystemSizes } from '../../redux/selectors/selectCatergoricalSystemSizes';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  makeStyles,
} from '@material-ui/core';

export const CategoricalPlanetCountTable = props => {
  const data = useSelector(selectCategoricalSystemSizes());

  React.useEffect(() => console.log('data: ', data), []);

  return (
    <>
      <TableContainer component="section">
        <Table>
          <TableHead>
            <TableCell variant="head">Planets</TableCell>
            <TableCell variant="head"># of Systems</TableCell>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
