import styled, { css } from "styled-components";

export const Rating = styled.span`
  svg {
    stroke: #fb8200;

    ${({ active }) =>
      active &&
      css`
        fill: #fb8200;
      `}
  }
`;

export const Rate = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5e6366;
  padding-left: 8px;
`;
