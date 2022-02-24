import Header from "../../components/Header";
import Stars from "../../components/common/Rating";
import Button from "../../components/common/Button";
import { Flex } from "../../components/common/styled";
import Loading from "../../components/common/Spinner";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as BurgerIcon } from "./icons/burger.svg";
import {
  Container,
  Main,
  ProductPicture,
  Title,
  Price,
  Wrapper,
  Description,
} from "./styled";
import { getProduct } from "../../api/products";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useBasketClick from "../../hooks/useBasketClick";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((card) => setProduct(card));
  }, [id]);

  const [onBasketClick, inBasketProduct] = useBasketClick(Number(id), product);

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
              <Flex center>
                <Button
                  onClick={onBasketClick}
                  Icon={HeartIcon}
                  isActive={inBasketProduct}
                >
                  {inBasketProduct ? "Delete card" : "Add to card"}
                </Button>
                <Stars rating={product.rating} />
              </Flex>
              <Description>{product.description}</Description>
              <Link to="/">
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
