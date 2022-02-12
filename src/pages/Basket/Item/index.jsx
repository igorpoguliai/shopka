import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";
import {
  Product,
  ProductPicture,
  Title,
  Description,
  Price,
  Wrapper,
  Count,
  Sum,
  Remove,
  Info,
} from "./styled";
import { Flex } from "../../../components/common/styled";
import { cutStringIfNeeded } from "../../../utils/helpers";
import {
  removeProductAction,
  setBasketAction,
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
        <Count
          disabled={count <= 1}
          onClick={() => dispatch(setBasketAction(id, "decrement"))}
        >
          <MinusIcon />
        </Count>
        {count}
        <Count
          disabled={count === 10}
          onClick={() => dispatch(setBasketAction(id, "increment"))}
        >
          <PlusIcon />
        </Count>
      </Wrapper>
      <Flex column center between>
        <Sum>${(price * count).toFixed(2)}</Sum>
        <Remove onClick={() => dispatch(removeProductAction(id))}>
          Remove
        </Remove>
      </Flex>
    </Product>
  );
}
