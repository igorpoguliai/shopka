import Header from "../../components/Header";
import Card from "./Card";
import { Main, Container } from "./styled";
import { useEffect } from "react";
import { getProductInfo } from "../../api/api";
import Loading from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";

export default function MainPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getProductInfo());
  }, []);

  return (
    <>
      <Header />
      <Container>
        {products ? (
          <Main>
            {products.map((productInfo) => (
              <Card key={productInfo.id} productInfo={productInfo} />
            ))}
          </Main>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
}
