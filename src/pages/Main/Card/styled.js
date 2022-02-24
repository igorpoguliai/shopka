import styled, { css } from "styled-components";
import { mainFont, secondColor } from "../../../utils/constants";

export const StyledCard = styled.div`
  font-family: ${mainFont};
  width: 260px;
  padding: 16px 16px 12px;
  margin: auto;
  transition: all 0.3s;

  ${({ isHovered }) =>
    isHovered &&
    css`
      &:hover {
        box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2),
          0px 4px 8px rgba(92, 107, 192, 0.2);
        border-radius: 8px;
        cursor: pointer;
      }
    `}
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
