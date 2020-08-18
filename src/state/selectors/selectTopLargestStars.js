import { createSelector } from 'reselect';

export const selectTopLargestStars = (limit = 7) => createSelector(
  [state => state.data.stars.list],
  list => {
    if (limit <= 0 || typeof limit !== 'number') return [];

    return list.filter(star => star.st_rad)
      .sort((x, y) => y.st_rad - x.st_rad)
      .slice(0, limit + 1);
    // .reduce((largest, star) => star.st_rad > largest.st_rad ? star : largest, list[0])
  }
);
