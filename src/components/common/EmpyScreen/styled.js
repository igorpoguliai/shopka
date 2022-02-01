import styled from "styled-components";
import { mainColor, mainFont } from "../../../utils/constants";

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
  color: ${mainColor};
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 20px;
`;
