import styled from "styled-components";

export const Product = styled.div`
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductPicture = styled.img`
  width: 150px;
  height: 150px;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
`;

export const Desc = styled.p`
  max-width: 350px;
  padding-top: 7px;
  font-size: 14px;
  line-height: 20px;
  color: #787885;
  margin-bottom: 50px;
`;

export const Price = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const Wrapper = styled.div`
  width: 166px;
  height: 36px;
  background: #f0f0f0;
  border-radius: 50px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px;
`;

export const Decrement = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Increment = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Sum = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const Remove = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding: 10px 24px;
  background: #2264d1;
  border-radius: 4px;
  color: #ebf2ff;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const Info = styled.div`
  padding-left: 27px;

  @media screen and (max-width: 767px) {
    text-align: center;
    padding: 10px 0 0;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
