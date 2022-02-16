import styled from "styled-components";

export const StyledStoreHome = styled.div``;

export const StoreMap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #9e9e9e;
  padding: 20px;
  div {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
  }
`;

export const StoreHomeDetail = styled.ul`
  padding: 20px 80px;
`;

export const StoreHomeDetailList = styled.li`
  border-bottom: 1px solid #9e9e9e;
  padding: 30px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  svg {
    margin-right: 20px;
  }
`;
