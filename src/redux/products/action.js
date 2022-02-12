import { GET_CARDS, SET_ACTIVE_CATEGORY } from "./types";
import { getProducts } from "../../api/products";

export function getCardsAction() {
  return async function (dispatch) {
    const cards = await getProducts();
    dispatch({
      type: GET_CARDS,
      payload: { cards },
    });
  };
}

export function setActiveCategoryAction(category) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: { category },
  };
}
