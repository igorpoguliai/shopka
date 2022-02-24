import styled, { css } from "styled-components";
import { mainColor, skyColor } from "../../../utils/constants";

export const StyledButton = styled.button`
  background: none;
  border: 1px solid #9dc2ff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mainColor};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 6px 22px 6px 11px;
  width: 150px;

  &:hover {
    background: ${skyColor};
  }

  &:active {
    svg {
      opacity: 0;
      transform: scale(2);
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
  }

  svg {
    stroke: #2979ff;
    stroke-width: 5px;
    width: 14px;
    height: 13px;
    fill: white;

    ${({ active }) =>
      active &&
      css`
        stroke-width: 2px;
        fill: #f44336;
        stroke: #f44336;
      `}
  }

  ${({ small }) =>
    small &&
    css`
  gap: 6px;
  padding: 4px 12px;
  width: auto;

  &:hover {
    transform: scale(1.05); 
    transition: 0.3s;
  `}
`;
