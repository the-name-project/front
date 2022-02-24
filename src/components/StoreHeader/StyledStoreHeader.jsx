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
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

export const Sub = styled.div`
  display: flex;
  align-items: center;
  color: #9e9e9e;
  div {
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  background: rgba(32, 34, 36, 0.75);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .modal {
    width: 295px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 7px;
    .modal_close {
      width: 100%;
      text-align: right;
      cursor: pointer;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 23px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 40px;
    }
    p {
      color: #555555;
      margin-bottom: 40px;
    }
    button {
      cursor: pointer;
      padding: 10px 20px;
      border: none;
      background-color: #fad1b6;
      border-radius: 20px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  .like_num {
    color: #183052;
  }
  .favorit {
    color: #fad1b6;
  }
`;
