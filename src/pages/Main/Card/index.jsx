import Stars from "../../../components/common/Rating";
import Button from "../../../components/common/Button";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { cutStringIfNeeded } from "../../../utils/helpers";
import {
  StyledCard,
  ProductPicture,
  Title,
  Price,
  Description,
} from "./styled";
import { Flex } from "../../../components/common/styled";
import useBasketClick from "../../../hooks/useBasketClick";

export default function Card({ product, onClick }) {
  const { id, image, title, price, description, rating } = product;

  const [onBasketClick, inBasketProduct] = useBasketClick(id, product, {
    withStopPropagation: true,
  });

  function handleClick() {
    if (onClick) onClick(id);
  }

  return (
    <StyledCard isHovered={onClick} onClick={handleClick}>
      <ProductPicture src={image} alt="product" />
      <Title>{cutStringIfNeeded(title, 20)}</Title>
      <Price>${price}</Price>
      <Description>{cutStringIfNeeded(description, 70)}</Description>
      <Flex center between>
        <Stars rating={rating} />
        <Button
          onClick={onBasketClick}
          Icon={HeartIcon}
          isActive={inBasketProduct}
          size="small"
        >
          Basket
        </Button>
      </Flex>
    </StyledCard>
  );
}
