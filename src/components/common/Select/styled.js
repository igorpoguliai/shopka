import styled, { css } from "styled-components";
import { mainColor, mainFont, secondColor } from "../../../utils/constants";
import { TABLET_BREAKPOINT } from "../styled";

export const SortWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  pointer-events: none;

  svg {
    fill: ${secondColor};
    transition: transform 0.2s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
        fill: ${mainColor};
      }
    `}
`;

export const StyledSelect = styled.select`
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  width: 170px;
  height: 36px;
  background: none;
  border-radius: 4px;
  padding: 6px 30px 6px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: 0;
    border: 2px solid ${mainColor};
  }

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 200px;
  }
`;
