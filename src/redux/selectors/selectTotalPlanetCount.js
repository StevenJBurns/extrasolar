import { createSelector } from 'reselect';

export const selectTotalPlanetCount = () => createSelector(
  [state => state.data.planets.list],
  planetsList => planetsList.length,
);
