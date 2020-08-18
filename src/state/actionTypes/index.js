import * as data from './data';
import * as ui from './ui';
  
export const actionTypes = {
  data,
  ui,
  filters: {
    FILTER_STARS_BY_MASS_CHANGE: "FILTER_STARS_MASS",
    FILTER_STARS_BY_RADIUS_CHANGE: "FILTER_SOLAR_RADIUS",
    FILTER_STARS_BY_TEMP_CHANGE: "FILTER_SOLAR_TEMP",  
  },
  sorting: {},
};
  