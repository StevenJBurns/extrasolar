import { combineReducers } from 'redux';
import { solarSystems } from './solarSystems';
import { stars } from './stars';
import { planets } from './planets';

export const data = combineReducers({
  stars,
  planets,
  solarSystems,
});
