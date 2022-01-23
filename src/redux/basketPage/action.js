import { SET_BASKET } from "./types";

export function setBasketAction(product) {
  return {
    type: SET_BASKET,
    payload: product,
  };
}
