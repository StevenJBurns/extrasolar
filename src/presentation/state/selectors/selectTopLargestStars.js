import { createSelector } from 'reselect';

export const selectTopLargestStars = (limit = 7) =>
  createSelector([state => state.data.stars.list], list => {
    if (!list || !list.length) return [];

    if (limit <= 0 || typeof limit !== 'number') return [];

    return list
      .filter(star => star.st_rad)
      .sort((x, y) => y.st_rad - x.st_rad)
      .slice(0, limit + 1);
  });
