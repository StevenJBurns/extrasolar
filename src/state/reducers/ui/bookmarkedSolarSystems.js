import { actionTypes } from "../../actionTypes";

const initialState = JSON.parse(localStorage.getItem("bookmarks")) || [];

export const bookmarkedSolarSystems = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ui.BOOKMARKS_TOGGLE_SOLARSYSTEM:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      } else {
        return [...state.filter(item => item !== action.payload)];
      }
    case actionTypes.ui.BOOKMARKS_DELETE_ALL:
      return [];
    default:
      return state;
  }
}
