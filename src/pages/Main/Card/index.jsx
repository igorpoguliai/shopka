import Stars from "../../../components/common/Rating";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { cutStringIfNeeded } from "../../../utils/helpers";
import {
  StyledCard,
  ProductPicture,
  Title,
  Price,
  Description,
  Button,
  Block,
} from "./styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addProductAction,
  removeProductAction,
} from "../../../redux/basket/action";

export default function Card({ product, handleCardClick }) {
  const dispatch = useDispatch();
  const { basket } = useSelector(({ basket }) => basket);
  const { id, image, title, price, description, rating } = product;

  const inBasketProduct = basket.some((item) => item.id === id);

  function handleBasketClick(event) {
    event.stopPropagation();

    return inBasketProduct
      ? dispatch(removeProductAction(id))
      : dispatch(addProductAction(product));
  }

  return (
    <StyledCard onClick={() => handleCardClick(id)}>
      <ProductPicture src={image} alt="product" />
      <Title>{cutStringIfNeeded(title, 20)}</Title>
      <Price>${price}</Price>
      <Description>{cutStringIfNeeded(description, 70)}</Description>
      <Block>
        <Stars rating={rating} />
        <Button active={inBasketProduct} onClick={handleBasketClick}>
          <HeartIcon />
          Basket
        </Button>
      </Block>
    </StyledCard>
  );
}
