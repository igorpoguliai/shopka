import styled from "styled-components";
import { mainColor, skyColor, secondFont } from "../../utils/constants";

export const StyledHeader = styled.header`
  font-family: ${secondFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 35px;
  border-bottom: 1px solid #b4bbe2;
`;

export const Wrapper = styled.div`
  position: relative;
  font-size: 20px;
  line-height: 30px;
  padding: 5px 12px;
  box-shadow: 0 2px 4px rgba(27, 78, 163, 0.2),
    0 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background: ${skyColor};
  }

  a {
    text-decoration: none;
    color: ${mainColor};
  }

  &:hover {
    div {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
`;

export const AddedProducts = styled.div`
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 17px;
  background: #f44336;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: absolute;
  top: 0;
  right: 20px;
`;
