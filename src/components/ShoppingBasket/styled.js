import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: "Quicksand", sans-serif;
  }

  position: relative;
`;

export const Button = styled.button`
  font-size: 20px;
  line-height: 30px;
  padding: 5px 12px;
  color: #2264d1;
  background: none;
  box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2),
    0px 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;
`;

export const Circle = styled.div`
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
