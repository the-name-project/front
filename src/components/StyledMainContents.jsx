import { getByPlaceholderText } from "@testing-library/react";
import styled, { css } from "styled-components";

//콘텐츠 배경 색
export const StyledMain = styled.div`
  background-color: white;
`;

//콘텐츠 플렉스 박스 레이아웃
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: cloumn;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  // background-color: pink; //범위 확인용 컬러
`;

export const ImgDetail = styled.div`
  background-color: white;
`;

//가게 이미지
export const StoreImg = styled.li`
  ${(props) => {
    const bgURL = `no-repeat center/80% url("${props.img}")`;
    return css`
      list-style: none;
      width: 400px;
      height: 400px;
      background: ${bgURL};
      background-size: cover;
      margin-right: 30px;
      margin-left: 30px;
    `;
  }}
`;

//가게 이름
export const Title = styled.h3`
  ${(props) => {
    const bgURL = `no-repeat center/80% url("${props.title}")`;
    return css`
      text-align: center;
      font-size: 1.3rem;
    `;
  }}
  margin-bottom: 30px;
`;

//가게 주소
export const address = styled.h3`
  font-size: 1rem;
`;

//가게 설명
export const StoreInfoBar = styled.h3`
  font-size: 1rem;
`;
