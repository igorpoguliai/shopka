import { GET_CARDS, SET_ACTIVE_CATEGORY } from "./types";

const initialState = {
  products: null,
  categories: null,
  activeCategory: null,
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS: {
      const { cards } = action.payload;

      return {
        ...state,
        products: [...cards],
        categories: [...new Set(cards.map((item) => item.category))],
      };
    }

    case SET_ACTIVE_CATEGORY: {
      const { category } = action.payload;

      return {
        ...state,
        activeCategory: category,
      };
    }

    default:
      return state;
  }
}
