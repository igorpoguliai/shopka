import { SortWrapper, StyledSelect, Wrapper } from "./styled";

export default function Select({
  Icon,
  options,
  value,
  onChange,
  onClick,
  isOpen,
}) {
  return (
    <SortWrapper>
      <StyledSelect value={value} onChange={onChange} onClick={onClick}>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <Wrapper isOpen={isOpen}>{Icon && <Icon />}</Wrapper>
    </SortWrapper>
  );
}
