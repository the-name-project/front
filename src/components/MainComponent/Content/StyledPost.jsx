import { getByPlaceholderText } from "@testing-library/react";
import styled, { css } from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  float: left;
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

//가게 주소
export const Storeaddress = styled.div`
  position: absolute;
  font-size: 1.5rem;
  width: 300px;
  top: 0;
`;
