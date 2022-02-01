import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";
import {
  Product,
  ProductPicture,
  Title,
  Description,
  Price,
  Wrapper,
  Decrement,
  Increment,
  Sum,
  Remove,
  Block,
  Info,
} from "./styled";
import { cutStringIfNeeded } from "../../../utils/helpers";
import {
  removeProductAction,
  setDecrementAction,
  setIncrementAction,
} from "../../../redux/basket/action";
import { useDispatch } from "react-redux";

export default function BasketItem({ product, handlePictureClick }) {
  const dispatch = useDispatch();
  const { id, image, title, description, price, count } = product;

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
      <Wrapper>
        <Decrement
          disabled={count <= 1}
          onClick={() => dispatch(setDecrementAction(id))}
        >
          <MinusIcon />
        </Decrement>
        {count}
        <Increment onClick={() => dispatch(setIncrementAction(id))}>
          <PlusIcon />
        </Increment>
      </Wrapper>
      <Block>
        <Sum>${(price * count).toFixed(2)}</Sum>
        <Remove onClick={() => dispatch(removeProductAction(id))}>
          Remove
        </Remove>
      </Block>
    </Product>
  );
}
