import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_BASKET_COUNT,
  BASKET_CHECKOUT,
} from "./types";

export function addProductAction(product) {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
}

export function removeProductAction(id) {
  return {
    type: REMOVE_PRODUCT,
    payload: { id },
  };
}

export function setBasketAction(direction, id) {
  return {
    type: SET_BASKET_COUNT,
    payload: { direction, id },
  };
}

export function setBasketCheckoutAction() {
  return {
    type: BASKET_CHECKOUT,
  };
}
