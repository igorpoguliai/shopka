import { combineReducers } from "redux";
import cardsReducer from "./mainPage/reducer";
import basketReducer from "./basketPage/reducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  basket: basketReducer,
});
