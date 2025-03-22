import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

export const CategoricalPlanetCountTable = () => {
  return (
    <>
      <TableContainer component="section">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant="head">Planets</TableCell>
              <TableCell variant="head"># of Systems</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
