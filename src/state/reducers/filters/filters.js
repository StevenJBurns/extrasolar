import { actionTypes } from "../../actionTypes";

const initialState = {
  planetCount: {min: 3, max: 6},
  starMass: {min: 5, max: 17},
  starRadius: null,
  starTemperature: null,
  planetOrbitEcc: null,
  planetSmeiMajorAxis: null,
  planetOrbitPeriod: null
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.filters.CHANGE_FILTERS):
      state = {...state, ...state.filters, planetCount: action.payload};
      break;
    default:
      state = {...state};
  };
  return state;
};