import { actionTypes } from "../../actionTypes";

export const selectedSolarSystem = (state = {}, action) => {  
  switch (action.type) {
    case actionTypes.ui.SELECTED_SOLARSYSTEM_GET:

    break;
    case actionTypes.ui.SELECTED_SOLARSYSTEM_SET:

    break;
    default:
      state = {...state};
  }
  return state;
}