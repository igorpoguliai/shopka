import {
  GET_CARDS,
  SET_ACTIVE_CATEGORY,
  SET_LOADING,
  SET_SORT_CARDS,
} from "./types";
import { getProducts } from "../../api/products";

export function getCardsAction() {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING, payload: { loading: true } });

    const cards = await getProducts();
    dispatch({
      type: GET_CARDS,
      payload: { cards },
    });

    dispatch({ type: SET_LOADING, payload: { loading: false } });
  };
}

export function setActiveCategoryAction(category) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: { category },
  };
}

export function setSortCardsAction(value) {
  return {
    type: SET_SORT_CARDS,
    payload: { value },
  };
}
