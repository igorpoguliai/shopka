import Header from "../../components/Header";
import Stars from "../../components/Rating";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg";
import {
  Container,
  Main,
  ProductPicture,
  Title,
  Price,
  Wrapper,
  Block,
  Button,
  Desc,
} from "./styled";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSelectedCard } from "../../api/api";
import Loading from "../../components/Spinner";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBasketAction } from "../../redux/basketPage/action";

export default function CardDetailsPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  useEffect(() => {
    getSelectedCard(id).then((cardDetails) => setCard(cardDetails));
  }, [id]);
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  function handleAddCardClick() {
    return {
      id: id,
      image: card.image,
      title: card.title,
      price: card.price,
      description: card.description,
    };
  }

  return (
    <>
      <Header />
      <Container>
        {card ? (
          <Main>
            <ProductPicture src={card.image} alt="product" />
            <Wrapper>
              <Title>{card.title}</Title>
              <Price>${card.price}</Price>
              <Block>
                <Button
                  onClick={() =>
                    dispatch(setBasketAction(handleAddCardClick()))
                  }
                >
                  <HeartIcon />
                  Add to card
                </Button>
                <Stars rating={card.rating} />
              </Block>
              <Desc>{card.description}</Desc>
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
