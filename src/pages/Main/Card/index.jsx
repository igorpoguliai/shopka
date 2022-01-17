import Stars from "../../../components/Rating";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";

import {
  StyledCard,
  ProductPicture,
  Title,
  Price,
  Desc,
  Button,
  Block,
} from "./styled";

export default function Card() {
  return (
    <div>
      <StyledCard>
        <ProductPicture
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
        />
        <Title>
          Creativity stimulating lotion. Drink every morning to generate better
          ideas!
        </Title>
        <Price>$12.48</Price>
        <Desc>Showcasing onHovered state</Desc>
        <Block>
          <Stars />
          <Button>
            <HeartIcon />
            Watch
          </Button>
        </Block>
      </StyledCard>
    </div>
  );
}
