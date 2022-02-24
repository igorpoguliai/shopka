import styled from "styled-components";
import { DESKTOP_SM_BREAKPOINT } from "../../components/common/styled";
import { mainFont } from "../../utils/constants";
import { ButtonRemove } from "./Item/styled";

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
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

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
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

export const Button = styled(ButtonRemove)`
  width: max-content;
  padding: 10px 108px;
  margin-top: 73px;

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
    width: 100%;
    margin: 35px 0 10px;
  }
`;
