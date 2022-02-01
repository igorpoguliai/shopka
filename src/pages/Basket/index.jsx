import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import BasketItem from "./Item";
import { Container, Main, Wrapper, Total, Button } from "./styled";
import { setBasketCheckoutAction } from "../../redux/basket/action";
import EmpyScreen from "../../components/common/EmpyScreen";
import { useNavigate } from "react-router";

export default function BasketPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basket } = useSelector(({ basket }) => basket);

  const totalPriceProducts = basket
    .reduce((initial, current) => current.price * current.count + initial, 0)
    .toFixed(2);

  function handlePictureClick(id) {
    navigate(`/card/${id}`);
  }

  return (
    <>
      <Header />
      <Container>
        {basket.length ? (
          <>
            <Main>
              {basket.map((item) => (
                <BasketItem
                  key={item.id}
                  product={item}
                  handlePictureClick={handlePictureClick}
                />
              ))}
            </Main>
            <Wrapper>
              <Total>Total: ${totalPriceProducts}</Total>
              <Button onClick={() => dispatch(setBasketCheckoutAction())}>
                CHECKOUT
              </Button>
            </Wrapper>
          </>
        ) : (
          <EmpyScreen />
        )}
      </Container>
    </>
  );
}
