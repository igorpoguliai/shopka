import styled, { css } from "styled-components";
import {
  fontRoboto,
  mainColor,
  mainFont,
  skyColor,
} from "../../utils/constants";

export const Container = styled.div`
  max-width: 1420px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Main = styled.main`
  font-family: ${mainFont};
  margin: 40px 0 60px;
  display: flex;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductPicture = styled.img`
  max-width: 600px;
  max-height: 605px;
  padding: 30px 50px;
  border: 1px solid rgba(34, 100, 209, 0.11);
  border-radius: 20px;
  object-fit: contain;

  @media screen and (max-width: 575px) {
    max-width: 420px;
    max-height: 425px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;

  @media screen and (max-width: 991px) {
    padding-top: 10px;
  }
`;

export const Price = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
`;

export const Wrapper = styled.div`
  padding-left: 24px;

  a {
    display: flex;
    gap: 12px;
    max-width: fit-content;
    text-decoration: none;
    align-items: center;
    padding: 11px 12px 11px 16px;
    margin-top: 16px;
    background: ${skyColor};
    border-radius: 4px;
    font-family: ${fontRoboto};
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: ${mainColor};
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      background: none;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 26px;
`;

export const Button = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  background: none;
  padding: 6px 22px 6px 11px;
  border: 1px solid #9dc2ff;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mainColor};
  cursor: pointer;
  margin-right: 27px;

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

  &:active {
    svg {
      opacity: 0;
      transform: scale(5);
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
  }
`;

export const Description = styled.p`
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
`;
