import { actionTypes } from "../../actionTypes";

const initialState = JSON.parse(localStorage.getItem("bookmarks")) || [];

export const bookmarks = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ui.BOOKMARKS_ADD_SOLARSYSTEM:
      return [...state, action.payload];
    case actionTypes.ui.BOOKMARKS_DELETE_SOLARSYSTEM:
      return state.filter(id => id !== action.payload);
    case actionTypes.ui.BOOKMARKS_DELETE_ALL:
      return [];
    default:
      return state;
  }
}
