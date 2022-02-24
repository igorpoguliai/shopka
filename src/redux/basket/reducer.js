import {
  ADD_PRODUCT,
  BASKET_CHECKOUT,
  SET_BASKET_COUNT,
  REMOVE_PRODUCT,
} from "./types";

const initialState = {
  basket: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { product } = action.payload;

      return {
        ...state,
        basket: [...state.basket, { ...product, count: 1 }],
      };
    }

    case REMOVE_PRODUCT: {
      const { id } = action.payload;

      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== id),
      };
    }

    case SET_BASKET_COUNT: {
      const { direction, id } = action.payload;
      const isIncrement = direction === "increment";

      return {
        ...state,
        basket: state.basket.map((item) => {
          return item.id === id
            ? {
                ...item,
                count: isIncrement ? item.count + 1 : item.count - 1,
              }
            : item;
        }),
      };
    }

    case BASKET_CHECKOUT: {
      return {
        ...state,
        basket: [],
      };
    }

    default:
      return state;
  }
}
