import { Message, Wrapper, Image } from "./styled";
import emptyBasket from "./images/empty-basket.png";

export default function EmpyScreen() {
  return (
    <Wrapper>
      <Image src={emptyBasket} alt="empty basket" />
      <Message>Your basket is empty... Back to products!</Message>
    </Wrapper>
  );
}
