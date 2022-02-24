import styled, { css } from "styled-components";

export const StyledStoreMenu = styled.ul``;

export const StoreMenuImg = styled.div`
  ${props => {
    const bgURL =
      !props.url === "None"
        ? `no-repeat center/80% url("${props.url}")`
        : "#FEE9B2";
    return css`
      width: 120px;
      height: 120px;
      background: ${bgURL};
      background-size: contain;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export const StoreMenuDetailList = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 1px solid #9e9e9e;
`;

export const StoreMenuNameAndPrice = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
`;

export const StoreMenuName = styled.h4``;

export const StoreMenuPrice = styled.div`
  color: red;
`;
