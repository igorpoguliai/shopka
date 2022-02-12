import styled, { css } from "styled-components";
import { fontRoboto, mainColor, mainFont } from "../../utils/constants";

export const Container = styled.div`
  max-width: 1145px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Main = styled.main`
  box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24),
    0px 2px 4px rgba(90, 91, 106, 0.24);
  border-radius: 8px;
  margin: 100px 0 25px;
  padding: 7px 16px 16px;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Aside = styled.aside`
  font-family: ${mainFont};
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-top: 100px;
  padding: 0 55px 0 15px;
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

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }

  ${({ active }) =>
    active &&
    css`
      font-size: 16px;
      line-height: 24px;
      color: #2264d1;

      &:hover {
        transform: scale(1);
      }
    `}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Block = styled.div`
  position: absolute;
  top: -2px;
  right: 12px;
  pointer-events: none;
`;

export const Sort = styled.div`
  font-family: ${fontRoboto};
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: #787885;
  padding: 23px 0 0 13px;
`;

export const Select = styled.select`
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  max-width: 185px;
  width: 100%;
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
`;
