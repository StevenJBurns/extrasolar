import { actionTypes } from "../../actionTypes";

const initialState = {
  selectedSolarSystem: null,
};

export const selectedSolarSystem = (state = initialState, action) => {  
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