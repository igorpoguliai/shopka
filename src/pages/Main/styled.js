import styled from "styled-components";
import { fontRoboto, secondColor } from "../../utils/constants";
import {
  DESKTOP_SM_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  MOBILE_LG_BREAKPOINT,
  MOBILE_MD_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../components/common/styled";

export const CardsContainer = styled.div`
  max-width: 1145px;
  width: 100%;
  padding-left: 30px;

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
    padding-left: 20px;
  }

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    padding-left: 0;
  }
`;

export const MainContainer = styled.div`
  max-width: 1445px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${LAPTOP_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 70px;
  }

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${MOBILE_MD_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Aside = styled.aside`
  margin-top: 100px;
  position: sticky;
  top: 65px;
  height: 0;

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: static;
    height: auto;
  }
`;

export const Title = styled.h3`
  font-family: ${fontRoboto};
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: ${secondColor};
  padding: 23px 0 0 13px;
`;
