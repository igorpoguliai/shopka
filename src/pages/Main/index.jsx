import Header from "../../components/Header";
import Card from "./Card";
import ShoppingBasket from "../../components/ShoppingBasket";
import { Main, Container } from "./styled";

export default function MainPage() {
  return (
    <>
      <Header buttonBasket={<ShoppingBasket />} />
      <Container>
        <Main>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Main>
      </Container>
    </>
  );
}
