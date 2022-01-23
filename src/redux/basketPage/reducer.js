import { SET_BASKET } from "./types";

const initialState = {
  basket: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BASKET: {
      const product = action.payload;
      return {
        ...state,
        basket: [...state.basket, product],
      };
    }

    default:
      return state;
  }
}
