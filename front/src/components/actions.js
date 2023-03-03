import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions_types";
import axios from "axios";

export function addFavorite(character){
  return function (dispatch) {
    axios
      .post("http://localhost:3001/favs/create", character)
      .then((response) => {
        return dispatch({ type: ADD_FAVORITE, payload: response.data });
      });
  };
};

export function deleteFavorite(id){
  return function (dispatch) {
    axios.delete(`http://localhost:3001/favs/delete/${id}`)
    .then((response) => {
      return dispatch({ type: DELETE_FAVORITE, payload: response.data });
    });
  };
};
