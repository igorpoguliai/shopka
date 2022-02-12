import styled from "styled-components";
import {
  mainFont,
  fontRoboto,
  mainColor,
  skyColor,
} from "../../utils/constants";

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1198px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  font-family: ${mainFont};
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  padding: 23px 0 0 25px;
  position: sticky;
  top: 65px;
  height: 0;

  @media screen and (max-width: 1198px) {
    text-align: center;
    padding-left: 0;
  }
`;

export const Total = styled.div`
  font-family: ${mainFont};
  font-weight: bold;
  font-size: 48px;
  line-height: 69px;
`;

export const Button = styled.button`
  width: 100%;
  background: none;
  font-family: ${fontRoboto};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${skyColor};
  padding: 10px 108px;
  background: ${mainColor};
  border-radius: 4px;
  cursor: pointer;
  margin-top: 73px;

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 1198px) {
    width: 100%;
    margin: 35px 0 10px;
  }
`;
