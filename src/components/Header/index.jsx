import { StyledHeader } from "./styled";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export default function Header({ buttonBasket, buttonBackToProduct }) {
  return (
    <StyledHeader>
      <LogoIcon />
      {buttonBasket}
      {buttonBackToProduct}
    </StyledHeader>
  );
}
