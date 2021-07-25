import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';

export const CategoricalPlanetCountTable = () => {
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
