import { Message, Wrapper } from "./styled";
import { ReactComponent as BasketIcon } from "./icons/basket.svg";

export default function EmpyScreen() {
  return (
    <Wrapper>
      <Message>Basket is empty :(</Message>
      <BasketIcon />
    </Wrapper>
  );
}
