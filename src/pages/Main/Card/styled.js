import styled, { css } from "styled-components";
import {
  mainColor,
  mainFont,
  secondColor,
  skyColor,
} from "../../../utils/constants";

export const StyledCard = styled.div`
  font-family: ${mainFont};
  width: 260px;
  padding: 16px 16px 12px;
  margin: auto;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2),
      0px 4px 8px rgba(92, 107, 192, 0.2);
    border-radius: 8px;
  }
`;

export const ProductPicture = styled.img`
  width: 225px;
  height: 225px;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
  padding-top: 12px;
`;

export const Price = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  padding: 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  height: 65px;
  color: ${secondColor};
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #9dc2ff;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: auto;
  color: ${mainColor};
  display: flex;
  gap: 6px;
  align-items: center;

  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
    background: ${skyColor};
  }

  &:active {
    svg {
      opacity: 0;
      transform: scale(5);
      transition: transform 0.3s ease, opacity 0.3s ease;
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
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;
