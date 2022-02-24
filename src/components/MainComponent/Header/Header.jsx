import { useState, useEffect } from "react";
import axios from "axios";
import CallMainContents from "../Content/CallMainContents";
import {
  StyledHeader,
  FlexDiv,
  Search,
  Img,
  SearchText,
  SearchButton,
  OrderButton1,
  OrderButton2,
  TopButton,
  ModalOverlay,
  ModalContent,
  ModalText,
} from "./StyledHeader";
import logo from "./만원의행복_100px_9b8b71_3.png";
const Header = ({ CheckScoreOrder, setCheckScoreOrder }) => {
  const [filter, setFilter] = useState(false);
  const NaverOrder = () => {
    setCheckScoreOrder(1);
  };

  const KaKaoOrder = () => {
    setCheckScoreOrder(2);
  };
  const Modal = () => {
    return (
      <ModalOverlay>
        <ModalContent>
          <h1>구 선택</h1>
          <br />
          <br />
          <div>
            <ModalText>서구</ModalText>
            <ModalText>중구</ModalText>
            <ModalText>동구</ModalText>
            <ModalText>영도구</ModalText>
          </div>
          <div>
            <span>진구</span>
            <span>동래구</span>
            <span>남구</span>
            <span>북구</span>
          </div>
          <div>
            <span>해운대구</span>
            <span>사하구</span>
            <span>금정구</span>
            <span>강서구</span>
          </div>
          <div>
            <span>연제구</span>
            <span>수영구</span>
            <span>사상구</span>
            <span>기장군</span>
          </div>

          <button onClick={() => setFilter(false)}>확인</button>
        </ModalContent>
      </ModalOverlay>
    );
  };
  return (
    <StyledHeader>
      {filter === true ? <Modal /> : null}
      <FlexDiv>
        <TopButton>마이페이지</TopButton>
        <TopButton>로그인</TopButton>
      </FlexDiv>
      <Img src={logo} alt="없엉" />
      <br />
      <Search>
        <SearchText type="text" placeholder=" 맛집을 검색하세여!" />
        <SearchButton>검색</SearchButton>
        <SearchButton onClick={() => setFilter(true)}>필터</SearchButton>
      </Search>
      <br />
      <FlexDiv>
        <OrderButton1 onClick={() => NaverOrder()}>네이버 별점 순</OrderButton1>
        <OrderButton2 onClick={() => KaKaoOrder()}>카카오 별점 순</OrderButton2>
      </FlexDiv>
    </StyledHeader>
  );
};

export default Header; //jsx에서 export하는건 단일한 컴포넌트여야함
