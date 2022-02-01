import { StyledHeader, Wrapper, AddedProducts } from "./styled";
import { ReactComponent as LogoIcon } from "./icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { basket } = useSelector(({ basket }) => basket);
  const isBasket = useLocation().pathname === "/basket";

  return (
    <StyledHeader>
      <Link to="/">
        <LogoIcon />
      </Link>
      <Wrapper>
        {isBasket ? (
          <Link to="/">Back to products</Link>
        ) : (
          <>
            <Link to="/basket">My cart</Link>
            {!!basket.length && <AddedProducts>{basket.length}</AddedProducts>}
          </>
        )}
      </Wrapper>
    </StyledHeader>
  );
}
