import { SORT_TYPE } from "../../utils/constants";
import {
  GET_CARDS,
  SET_ACTIVE_CATEGORY,
  SET_LOADING,
  SET_SORT_CARDS,
} from "./types";

const initialState = {
  products: null,
  categories: null,
  activeCategory: null,
  loading: false,
  activeSort: SORT_TYPE.RATING,
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

    case SET_LOADING: {
      const { loading } = action.payload;

      return {
        ...state,
        loading,
      };
    }

    case SET_SORT_CARDS: {
      const { value } = action.payload;

      return {
        ...state,
        activeSort: value,
      };
    }

    default:
      return state;
  }
}
