import { createSelector } from 'reselect';

export const selectTotalStarCount = () =>
  createSelector([state => state.data.stars.list], starsList => starsList?.length ?? 0);
