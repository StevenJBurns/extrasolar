import { combineReducers } from "redux";

import { reducerUI } from "./reducerUI";
import { reducerData } from "./reducerData";
import { reducerFilter } from "./reducerFilter";
import { reducerSort } from "./reducerSort";
import { reducerStars} from "./reducerStars";


export const rootReducer = combineReducers(
  {
    reducerUI,
    reducerData, 
    filters: reducerFilter,
    sorting: reducerSort,
    reducerStars
  }
);

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.FETCH_STAR_DATA:
//       fetch(action.payload)
//         .then(res => res.json())
//         .then(dataStars => ({...state, dataStars}))
//         .then(dataStars => console.log(dataStars));
//     case actions.FETCH_PLANET_DATA:
//       return {...state};
//     case actions.TOGGLE_AUDIO_MUTE:
//       console.log("Is Audio Muted:", action.payload);
//       return { ...state, isAudioMuted: !action.payload };
//     case actions.CHANGE_AUDIO_SOURCE:
//       console.log("Audio Source:", action.payload);
//       return { ...state, currentAudioSource: action.payload };
//     case actions.SELECT_SOLAR_SYSTEM:
//       return state;
//     case actions.FILTER_SOLAR_SYSTEMS:
//       return state;
//     default:
//       return state;
//   }
// }; 
