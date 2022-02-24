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

export const MOBILE_SM_BREAKPOINT = 374;
export const MOBILE_MD_BREAKPOINT = 575;
export const MOBILE_LG_BREAKPOINT = 767;
export const TABLET_BREAKPOINT = 991;
export const LAPTOP_BREAKPOINT = 1023;
export const DESKTOP_SM_BREAKPOINT = 1198;
export const DESKTOP_MD_BREAKPOINT = 1279;
