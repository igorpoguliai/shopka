import Header from "../../components/Header";
import ShoppingBasket from "../../components/ShoppingBasket";
import Stars from "../../components/Rating";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg";
import {
  Container,
  Main,
  Product,
  Title,
  Price,
  Wrapper,
  Block,
  Button,
  Desc,
  BackToShopingList,
} from "./styled";

export default function CardDetailsPage() {
  return (
    <>
      <Header buttonBasket={<ShoppingBasket />} />
      <Container>
        <Main>
          <Product src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Wrapper>
            <Title>John Von Ebalkin SPRING</Title>
            <Price>$128.99</Price>
            <Block>
              <Button>
                <HeartIcon />
                Add to card
              </Button>
              <Stars />
            </Block>
            <Desc>
              Envelope, Stripes, Pencil and etc. Purchase this kit today and
              feel OKAY, Envelope, Stripes, Pencil and etc. Purchase this kit
              today and feel OKAY, Envelope, Stripes, Pencil and etc. Purchase
              this kit today and feel OKAY,Envelope, Stripes, Pencil and etc.
              Purchase this kit today and feel OKAY, Envelope, Stripes, Pencil
              and etc. Purchase this kit today and feel OKAY, Envelope, Stripes,
              Pencil and etc. Purchase this kit today and feel OKAY, Envelope,
              Stripes, Pencil and etc. Purchase this kit today and feel OKAY
            </Desc>
            <BackToShopingList>
              <BurgerIcon />
              Back to shoping list
            </BackToShopingList>
          </Wrapper>
        </Main>
      </Container>
    </>
  );
}
