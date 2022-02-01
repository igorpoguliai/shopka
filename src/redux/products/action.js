import { SET_CARDS } from "./types";
import { getProducts } from "../../api/api";

export function setCardsAction() {
  return async function (dispatch) {
    const cards = await getProducts();
    dispatch({
      type: SET_CARDS,
      payload: { cards },
    });
  };
}
