import Header from "../../components/Header";
import ProductPurchase from "./Product";
import { Button, Container, Main, Total, SumGoods, Checkout } from "./styled";

export default function BasketPage() {
  return (
    <>
      <Header buttonBackToProduct={<Button>Back to products</Button>} />
      <Container>
        <Main>
          <ProductPurchase />
          <ProductPurchase />
          <ProductPurchase />
          <ProductPurchase />
          <ProductPurchase />
          <ProductPurchase />
          <ProductPurchase />
        </Main>
        <Total>
          <SumGoods>Total: $69.75</SumGoods>
          <Checkout>CHECKOUT</Checkout>
        </Total>
      </Container>
    </>
  );
}
