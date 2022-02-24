import styled from "styled-components";
import {
  fontRoboto,
  mainColor,
  secondColor,
  skyColor,
} from "../../../utils/constants";
import {
  Flex,
  DESKTOP_SM_BREAKPOINT,
  MOBILE_LG_BREAKPOINT,
} from "../../../components/common/styled";

export const Product = styled.div`
  max-width: 780px;
  width: 100%;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: ${DESKTOP_SM_BREAKPOINT}px) {
    max-width: 100%;
  }

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
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

export const Sum = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const ButtonRemove = styled.button`
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
  margin: 0 30px;

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
    text-align: center;
    padding: 10px 0 0;
  }
`;

export const Wrapper = styled(Flex)`
  margin-left: 30px;

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
    margin: 0;
  }
`;
