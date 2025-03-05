import { combineReducers } from 'redux';
import { stars } from './stars';
import { planets } from './planets';

export const data = combineReducers({
  stars,
  planets,
});
