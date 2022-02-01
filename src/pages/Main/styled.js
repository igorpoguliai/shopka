import styled from "styled-components";

export const Container = styled.div`
  max-width: 1145px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Main = styled.main`
  box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24),
    0px 2px 4px rgba(90, 91, 106, 0.24);
  border-radius: 8px;
  margin: 45px 0 25px;
  padding: 7px 16px 16px;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
