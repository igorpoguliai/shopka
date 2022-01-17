import styled from "styled-components";

export const Button = styled.button`
  background: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #2264d1;
  padding: 5px 12px;
  box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2),
    0px 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  * {
    font-family: "Inter", sans-serif;
  }

  margin-top: 35px;
`;

export const Total = styled.div`
  padding: 30px 0 0 25px;
  position: sticky;
  top: -20px;
  height: 0;

  @media screen and (max-width: 1023px) {
    text-align: center;
    padding-left: 0px;
  }
`;

export const SumGoods = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 69px;
`;

export const Checkout = styled.button`
  background: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ebf2ff;
  padding: 10px 108px;
  background: #2264d1;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 73px;

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin: 35px 0 10px;
  }
`;
