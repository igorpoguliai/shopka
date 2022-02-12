import { StyledButton } from "./styled";
import { ReactComponent as HeartIcon } from "./icons/heart.svg";

export default function Button({ children, isActive, onClick, size }) {
  return (
    <StyledButton onClick={onClick} active={isActive} small={size === "small"}>
      <HeartIcon />
      {children}
    </StyledButton>
  );
}
