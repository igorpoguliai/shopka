import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg";
import {
  Product,
  ProductPicture,
  Title,
  Desc,
  Price,
  Wrapper,
  Decrement,
  Increment,
  Sum,
  Remove,
  Block,
  Info,
} from "./styled";

export default function ProductPurchase() {
  return (
    <Product>
      <ProductPicture
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="product"
      />
      <Info>
        <Title>John Von Ebalkin SPRING 1</Title>
        <Desc>Wordwide shifting available Buyers protection possible!</Desc>
        <Price>$13.95</Price>
      </Info>
      <Wrapper>
        <Decrement>
          <MinusIcon />
        </Decrement>
        2
        <Increment>
          <PlusIcon />
        </Increment>
      </Wrapper>
      <Block>
        <Sum>$27.9</Sum>
        <Remove>Remove</Remove>
      </Block>
    </Product>
  );
}
