import { createSelector } from 'reselect';

export const selectTotalStarCount = createSelector(
  ['state.data.planets.count'],
  count => count,
);
