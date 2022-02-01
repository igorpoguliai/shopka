import {
  ADD_PRODUCT,
  DECREMENT,
  INCREMENT,
  REMOVE_PRODUCT,
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

export function setIncrementAction(id) {
  return {
    type: INCREMENT,
    payload: { id },
  };
}

export function setDecrementAction(id) {
  return {
    type: DECREMENT,
    payload: { id },
  };
}

export function setBasketCheckoutAction() {
  return {
    type: BASKET_CHECKOUT,
  };
}
