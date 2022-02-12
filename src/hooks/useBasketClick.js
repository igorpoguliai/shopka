import { useDispatch, useSelector } from "react-redux";
import { addProductAction, removeProductAction } from "../redux/basket/action";

export default function useBasketClick(id, product, options) {
  const dispatch = useDispatch();
  const { basket } = useSelector(({ basket }) => basket);
  const inBasketProduct = basket.some((item) => item.id === id);

  function handleBasketClick(event) {
    options?.withStopPropagation && event.stopPropagation();

    return inBasketProduct
      ? id && dispatch(removeProductAction(id))
      : product && dispatch(addProductAction(product));
  }

  return [handleBasketClick, inBasketProduct];
}
