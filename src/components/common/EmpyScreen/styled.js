import styled from "styled-components";
import { Flex, MOBILE_LG_BREAKPOINT, MOBILE_MD_BREAKPOINT } from "../styled";
import { mainFont } from "../../../utils/constants";

export const Wrapper = styled(Flex)`
  height: 100vh;
  margin: auto;
`;

export const Message = styled.span`
  font-family: ${mainFont};
  color: silver;
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
    font-size: 20px;
  }

  @media screen and (max-width: ${MOBILE_MD_BREAKPOINT}px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: ${MOBILE_LG_BREAKPOINT}px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: ${MOBILE_MD_BREAKPOINT}px) {
    width: 250px;
    height: 250px;
  }
`;
