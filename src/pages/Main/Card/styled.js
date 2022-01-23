import styled from "styled-components";

export const StyledCard = styled.div`
  * {
    font-family: "Inter", sans-serif;
  }

  width: 260px;
  padding: 16px 16px 12px;
  margin: auto;
  margin-bottom: 24px;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2),
      0px 4px 8px rgba(92, 107, 192, 0.2);
    border-radius: 8px;
  }
`;

export const ProductPicture = styled.img`
  width: 225px;
  height: 225px;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
  height: 115px;
`;

export const Price = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  padding: 8px 0;
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 20px;
  height: 65px;
  color: #787885;
`;

export const Wrapper = styled.div`
  border: 1px solid #9dc2ff;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: auto;

  a {
    text-decoration: none;
    color: #2264d1;
    display: flex;
    gap: 6px;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
    background: #ebf2ff;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;
