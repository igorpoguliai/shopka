import { Message, Wrapper, Image } from "./styled";

export default function EmpyScreen({ picture, message }) {
  return (
    <Wrapper center justifyCenter column>
      <Image src={picture} alt="empty basket" />
      <Message>{message}</Message>
    </Wrapper>
  );
}
