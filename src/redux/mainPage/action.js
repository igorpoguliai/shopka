import { SET_CARDS } from "./types";

export function setCardsAction(cards) {
  return {
    type: SET_CARDS,
    payload: cards,
  };
}
