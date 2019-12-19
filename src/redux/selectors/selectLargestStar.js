import { createSelector } from 'reselect';

export const selectLargestStar = () => createSelector(
  [state => state.data.stars.list],
  list => {
    return list.filter(star => star.st_rad)
      .reduce((largest, star) => star.st_rad > largest.st_rad ? star : largest, list[0])
  }
);
