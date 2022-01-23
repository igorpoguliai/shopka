import { setCardsAction } from "../redux/mainPage/action";

export function getProductInfo() {
  return function (dispatch) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((cards) => dispatch(setCardsAction(cards)));
  };
}

export async function getSelectedCard(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
}
