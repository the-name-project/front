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

export const ImgDetail = styled.ul`
  background-color: white;
`;

//가게 이미지
export const StoreImg = styled.ul`
  ${(props) => {
    const bgURL = `no-repeat center/80% url("${props.url}")`;
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

  .img-cont{
    postion-absolute;
    width: 300px
    transform: (0.8);
    opacity: 0;
  }
`;

//가게 이름
export const Title = styled.li`
  ${(props) => {
    const bgURL = `no-repeat center/80% url("${props.title}")`;
    return css`
      list-style: none;
      text-align: center;
      white-space: wrap;
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

//마우스 애니메이션
export const Ul = styled.ul``;
