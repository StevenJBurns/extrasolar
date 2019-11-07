import { createSelector } from 'reselect';

export const selectTotalStarCount = createSelector(
  ['state.data.stars.count'],
  count => count,
);
