import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions_types";

const initialState = {
  myFavorites: [],
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, payload] };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: payload
      };

    default:
      return { ...state };
  }
};
