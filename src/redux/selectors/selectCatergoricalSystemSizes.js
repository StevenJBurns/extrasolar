import { createSelector } from 'reselect';

export const selectCategoricalSystemSizes = () => createSelector(
  [state => state.data.stars.list, state => state.data.planets.list],
  (stars, planets) => {
    /* Use an ES6 Set to store unique size categories */
    const set = new Set();
    stars.forEach(star => set.add(star.pl_pnum));

    /* Sort the Set and .map() it to give each category a label and initialize each to 0 */
    const arr = [...set].sort().map(count => ({"planetCount" : count, "count" : 0}));

    /* iterate over the categorical sizes ++ incrememnt on each occirance */
    for (let size of arr) {
      for (let star of stars) {
        if (star.pl_pnum === size["planetCount"]) size["count"]++;
      };
    };
  
    return arr;
  }
  
  // if (stars) {
  //   stars.forEach((star) => setPlanetCount.add(star.pl_pnum));
  //   arrPlanetCount = [...setPlanetCount].sort().map((count, index) => ({"planetCount" : count, "count" : 0}))

  //   for (let size of arrPlanetCount) {
  //     for (let star of stars) {
  //       if (star.pl_pnum === size["planetCount"]) size["count"]++;
  //     }
  //   }
  // }

);
