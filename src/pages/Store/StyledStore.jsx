import styled, { css } from "styled-components";

export const StyledStore = styled.div`
  /* padding: 20px; */
  background-color: #e9ecef;
`;

export const StoreInfo = styled.div``;

export const StoreNavBar = styled.ul`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  height: 50px;
`;

export const StoreInfoList = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  background-color: #fbd1b7;
  border-bottom: 1px solid #fbd1b7;
  cursor: pointer;
  &.home {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
  &.menu {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
  &.review {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
`;

export const StoreDetail = styled.div`
  background-color: #ffffff;
`;
