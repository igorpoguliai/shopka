import styled, { css } from "styled-components";
import {
  fontRoboto,
  mainColor,
  secondColor,
  skyColor,
} from "../../../utils/constants";

export const Product = styled.div`
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductPicture = styled.img`
  width: 130px;
  height: 150px;
  padding: 0 10px;
  object-fit: contain;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
`;

export const Description = styled.p`
  height: 50px;
  font-size: 14px;
  margin: 7px 0 30px;
  line-height: 20px;
  color: ${secondColor};
`;

export const Price = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const Wrapper = styled.div`
  max-width: 166px;
  height: 36px;
  width: 100%;
  margin: 0 30px;
  background: #f0f0f0;
  border-radius: 50px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px;
`;

export const Decrement = styled.button`
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

  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;

export const Increment = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    svg {
      transform: scale(1.1);
    }
  }
`;

export const Sum = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const Remove = styled.button`
  font-family: ${fontRoboto};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding: 10px 24px;
  background: ${mainColor};
  border-radius: 4px;
  color: ${skyColor};
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const Info = styled.div`
  width: 350px;
  padding-left: 27px;

  @media screen and (max-width: 767px) {
    text-align: center;
    padding: 10px 0 0;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
