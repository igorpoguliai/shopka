import styled, { css } from "styled-components";
import { fontRoboto, mainColor, mainFont } from "../../../utils/constants";
import { TABLET_BREAKPOINT } from "../../../components/common/styled";

export const StyledCategories = styled.div`
  font-family: ${mainFont};
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-family: ${fontRoboto};
  font-size: 14px;
  line-height: 20px;
  background: none;
  cursor: pointer;
  color: #5a5b6a;
  display: block;
  padding: 17px 0;
  transition: all 0.3s;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({ active }) =>
    active &&
    css`
      font-size: 16px;
      color: ${mainColor};

      &:hover {
        transform: scale(1);
      }
    `}
`;
