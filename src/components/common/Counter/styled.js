import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 166px;
  height: 36px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 50px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px;
`;

export const Count = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background: rgba(255, 255, 255, 0.28);
      cursor: default;

      svg path {
        stroke: rgba(0, 0, 0, 0.22);
      }
    `}

  &:first-child {
    &:active {
      svg {
        transform: scale(0.9);
      }
    }
  }

  &:last-child {
    &:active {
      svg {
        transform: scale(1.1);
      }
    }
  }
`;
