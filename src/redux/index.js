import { combineReducers } from "redux";
import cardsReducer from "./products/reducer";
import basketReducer from "./basket/reducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  basket: basketReducer,
});
