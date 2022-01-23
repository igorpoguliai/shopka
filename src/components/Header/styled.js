import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 35px;
  border-bottom: 1px solid #b4bbe2;
`;

export const Block = styled.div`
  * {
    font-family: "Quicksand", sans-serif;
  }

  position: relative;

  &:hover {
    div:last-child {
      transform: scale(1.1);
      transition: 200ms;

      &:first-child {
        transform: none;
      }
    }
  }
`;

export const Wrapper = styled.div`
  font-size: 20px;
  line-height: 30px;
  padding: 5px 12px;
  box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2),
    0px 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background: #ebf2ff;
  }

  a {
    text-decoration: none;
    color: #2264d1;
  }
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
