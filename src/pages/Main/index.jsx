import Header from "../../components/Header";
import Card from "./Card";
import { Main, Container } from "./styled";
import { useEffect } from "react";
import Loading from "../../components/common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCardsAction } from "../../redux/products/action";

export default function MainPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(({ cards }) => cards);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCardsAction());
  }, []);

  function handleCardClick(id) {
    navigate(`/card/${id}`);
  }

  return (
    <>
      <Header />
      <Container>
        {products ? (
          <Main>
            {products.map((item) => (
              <Card
                key={item.id}
                product={item}
                handleCardClick={handleCardClick}
              />
            ))}
          </Main>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
}
