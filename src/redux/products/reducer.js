import { SET_CARDS } from "./types";

const initialState = {
  products: null,
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS: {
      const { cards } = action.payload;
      return {
        ...state,
        products: [...cards],
      };
    }

    default:
      return state;
  }
}
