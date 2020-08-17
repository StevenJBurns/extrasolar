import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoricalSystemSizes } from '../../redux/selectors/selectCatergoricalSystemSizes';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';

export const CategoricalPlanetCountTable = () => {
  const data = useSelector(selectCategoricalSystemSizes());

  React.useEffect(() => console.log('data: ', data), [data]);

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
