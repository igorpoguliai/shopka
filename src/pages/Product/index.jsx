import Header from "../../components/Header";
import Stars from "../../components/common/Rating";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as BurgerIcon } from "./icons/burger.svg";
import {
  Container,
  Main,
  ProductPicture,
  Title,
  Price,
  Wrapper,
  Block,
  Button,
  Description,
} from "./styled";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/api";
import Loading from "../../components/common/Spinner";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addProductAction,
  removeProductAction,
} from "../../redux/basket/action";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { basket } = useSelector(({ basket }) => basket);

  useEffect(() => {
    getProduct(id).then((card) => setProduct(card));
  }, [id]);

  const inBasketProduct = basket.some((item) => item.id === Number(id));

  function handleBasketClick() {
    return inBasketProduct
      ? dispatch(removeProductAction(Number(id)))
      : dispatch(addProductAction(product));
  }

  return (
    <>
      <Header />
      <Container>
        {product ? (
          <Main>
            <ProductPicture src={product.image} alt="product" />
            <Wrapper>
              <Title>{product.title}</Title>
              <Price>${product.price}</Price>
              <Block>
                <Button active={inBasketProduct} onClick={handleBasketClick}>
                  <HeartIcon />
                  Add to card
                </Button>
                <Stars rating={product.rating} />
              </Block>
              <Description>{product.description}</Description>
              <Link to={"/"}>
                <BurgerIcon />
                Back to shopping list
              </Link>
            </Wrapper>
          </Main>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
}
