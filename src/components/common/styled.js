import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  ${({ button }) => button && `align-items: flex-end;`}
  ${({ center }) => center && `align-items: center;`}
  ${({ top }) => top && `align-items: flex-start;`}
  ${({ justifyEnd }) => justifyEnd && `justify-content: flex-end;`}
  ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}
  ${({ between }) => between && `justify-content: space-between;`}
  ${({ column }) => column && `flex-direction: column;`}
  ${({ full }) => full && `width: 100%;`}
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
`;
