import {
  Product,
  ProductPicture,
  Title,
  Description,
  Price,
  Sum,
  ButtonRemove,
  Info,
  Wrapper,
} from "./styled";
import { cutStringIfNeeded } from "../../../utils/helpers";
import {
  removeProductAction,
  setBasketAction,
} from "../../../redux/basket/action";
import { useDispatch } from "react-redux";
import Counter from "../../../components/common/Counter";

export default function BasketItem({ product, handlePictureClick }) {
  const dispatch = useDispatch();
  const { id, image, title, description, price, count } = product;

  function handleCounterClick(direction, id) {
    dispatch(setBasketAction(direction, id));
  }

  return (
    <Product>
      <ProductPicture
        onClick={() => handlePictureClick(id)}
        src={image}
        alt="product"
      />
      <Info>
        <Title>{cutStringIfNeeded(title, 20)}</Title>
        <Description>{cutStringIfNeeded(description, 45)}</Description>
        <Price>${price}</Price>
      </Info>
      <Counter
        count={count}
        max={10}
        onClick={(direction) => handleCounterClick(direction, id)}
      />
      <Wrapper column center between>
        <Sum>${(price * count).toFixed(2)}</Sum>
        <ButtonRemove onClick={() => dispatch(removeProductAction(id))}>
          Remove
        </ButtonRemove>
      </Wrapper>
    </Product>
  );
}
