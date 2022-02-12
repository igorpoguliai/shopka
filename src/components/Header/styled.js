import styled from "styled-components";
import { mainColor, skyColor, secondFont } from "../../utils/constants";

export const StyledHeader = styled.header`
  font-family: ${secondFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 25px;
  border-bottom: 1px solid #b4bbe2;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
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
      transform: scale(1.15);
      transition: 0.2s;
    }
  }
`;

export const AddedProducts = styled.div`
  width: 17px;
  height: 17px;
  font-size: 14px;
  line-height: 16px;
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
