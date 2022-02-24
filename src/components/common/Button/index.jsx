import { StyledButton } from "./styled";

export default function Button({ Icon, children, onClick, isActive, size }) {
  return (
    <StyledButton onClick={onClick} active={isActive} small={size === "small"}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
}
