import {
  ADD_PRODUCT,
  BASKET_CHECKOUT,
  DECREMENT,
  INCREMENT,
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
        basket: [
          ...state.basket,
          { ...product, count: 1, finalAmount: product.price },
        ],
      };
    }

    case REMOVE_PRODUCT: {
      const { id } = action.payload;
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== id),
      };
    }

    case INCREMENT: {
      const { id } = action.payload;
      return {
        ...state,
        basket: state.basket.map((item) => {
          return item.id === id
            ? {
                ...item,
                count: item.count + 1,
                finalAmount: item.price * item.count,
              }
            : item;
        }),
      };
    }

    case DECREMENT: {
      const { id } = action.payload;
      return {
        ...state,
        basket: state.basket.map((item) => {
          return item.id === id ? { ...item, count: item.count - 1 } : item;
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
