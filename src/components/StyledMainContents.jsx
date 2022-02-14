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
  gap: 30%;
  width: 100%;
  // margin-top: 20px;
  // margin-bottom: 20px;
`;

//가게 이미지
export const StoreImg = styled.div`
  ${(props) => {
    const bgURL = `${props.img}?w=164&h=164&fit=crop&auto=format")`;
    return css`
      width: 170px;
      height: 170px;
      background: ${bgURL};
      background-size: contain;
    `;
  }}
`;

//가게 이름
export const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

//가게 주소
export const address = styled.div`
  font-size: 1rem;
`;

//가게 설명
export const StoreInfoBar = styled.div`
  font-size: 1rem;
`;
