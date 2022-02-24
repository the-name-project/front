import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  // background-color: pink; //범위 확인용 컬러
`;

export const StyledPlus = styled.button`
  bottom: 5px;
  height: 40px;

  background: #f9fce1;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  display: block;
  margin: auto;
  width: 130px;

  &:hover {
    background: #fbd1b7;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
  }
`;