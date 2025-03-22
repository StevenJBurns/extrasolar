import { actionTypes } from '../../actionTypes';

export const changeSelectedSolarSystem = newSystem => ({
  type: actionTypes.ui.SELECTED_SOLARSYSTEM_CHANGE,
  payload: newSystem,
});
