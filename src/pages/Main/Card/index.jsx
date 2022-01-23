import Stars from "../../../components/Rating";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { Link } from "react-router-dom";

import {
  StyledCard,
  ProductPicture,
  Title,
  Price,
  Desc,
  Wrapper,
  Block,
} from "./styled";

export default function Card({ productInfo }) {
  const { id, image, title, price, description, rating } = productInfo;
  return (
    <div>
      <StyledCard>
        <ProductPicture src={image} alt="product" />
        <Title>{title}</Title>
        <Price>${price}</Price>
        <Desc>{description.slice(0, 75) + "..."}</Desc>
        <Block>
          <Stars rating={rating} />
          <Wrapper>
            <Link to={`/card/${id}`}>
              <HeartIcon />
              Watch
            </Link>
          </Wrapper>
        </Block>
      </StyledCard>
    </div>
  );
}
