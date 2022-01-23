import { StyledHeader, Block, Wrapper, Circle } from "./styled";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoIcon />
      </Link>
      <Block>
        {useLocation().pathname === "/basket" ? (
          <Wrapper>
            <Link to="/">Back to products</Link>
          </Wrapper>
        ) : (
          <>
            <Wrapper>
              <Link to="/basket">My cart</Link>
            </Wrapper>
            <Circle>5</Circle>
          </>
        )}
      </Block>
    </StyledHeader>
  );
}
