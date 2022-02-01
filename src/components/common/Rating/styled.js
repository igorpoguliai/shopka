import styled, { css } from "styled-components";
import { fontRoboto } from "../../../utils/constants";

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
  font-family: ${fontRoboto};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5e6366;
  padding-left: 8px;
`;
