import styled from "styled-components";
import { mainFont } from "../../../utils/constants";

export const Wrapper = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Message = styled.span`
  font-family: ${mainFont};
  color: silver;
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 575px) {
    width: 300px;
    height: 300px;
  }
`;
