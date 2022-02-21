import styled, { css } from "styled-components";

export const StyledStoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  background-color: #ffffff;
  padding: 40px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StoreImg = styled.div`
  ${props => {
    const bgURL = `no-repeat center center /100% url("${props.url}")`;
    return css`
      width: 80vw;
      height: 460px;
      background: ${bgURL};
      background-size: cover;
    `;
  }}
`;

export const StoreBasic = styled.div`
  text-align: center;
  width: 200px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9e9e9e;
  div {
    cursor: pointer;
    margin-right: 20px;
  }
`;
