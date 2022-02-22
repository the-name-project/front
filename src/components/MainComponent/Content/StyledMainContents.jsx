import { getByPlaceholderText } from "@testing-library/react";
import styled, { css } from "styled-components";

//콘텐츠 배경 색
export const StyledMain = styled.div`
  background-color: white;
`;

//콘텐츠 플렉스 박스 레이아웃
export const ImgWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  // background-color: pink; //범위 확인용 컬러
`;

export const ImgContainer = styled.div`

  position :relative;
  float: left;
  border: 5px solid blue;
  .top{
    position: absolute;
    top: 150:
    left:30px;
    z-index:2;
    color: white;
    font-size:1rem;
  }
`;

//가게 이미지
export const StoreImg = styled.img`
  vertical-align: top;
  width: 300px;
  height: 300px;
  margin-right: 30px;
  transition: 0.1s;
  background-size: cover;
  &:hover {
    opacity: 0.5;

    cursor: pointer;
  }
`;

//가게 이름
export const StoreContent = styled.div`
  font-size: 1.3rem;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;

  width: 300px;
`;

//가게 별점
export const Star = styled.li`
  font-size: 1.3rem;
  margin-left: 30px;
  margin-top: 2px;
  margin-bottom: 30px;
`;

//가게 주소
export const Storeaddress = styled.div`
  position: absolute;
  font-size: 1.5rem;
  width: 300px;
  top: 0;
`;

//가게 설명
export const StoreInfoTop = styled.h3`
  color: black;
  font-size: 1rem;
`;
