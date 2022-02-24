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
  ModalTitle,
  ModalFont,
} from "./StyledHeader";
import logo from "./만원의행복_100px_9b8b71_3.png";

const Header = ({ setCheckScoreOrder, setWhere }) => {
  const [filter, setFilter] = useState(false);
  const NaverOrder = () => {
    setCheckScoreOrder(1);
  };

  const KaKaoOrder = () => {
    setCheckScoreOrder(2);
  };

  const getFilter = (e) => {
    e.target.value === "서구"
      ? setWhere("&wheres=%EC%84%9C%EA%B5%AC")
      : e.target.value === "중구"
      ? setWhere("&wheres=%EC%A4%91%EA%B5%AC")
      : e.target.value === "동구"
      ? setWhere("&wheres=%EB%8F%99%EA%B5%AC")
      : e.target.value === "영도구"
      ? setWhere("&wheres=%EC%98%81%EB%8F%84%EA%B5%AC")
      : e.target.value === "진구"
      ? setWhere("&wheres=%EC%A7%84%EA%B5%AC")
      : e.target.value === "동래구"
      ? setWhere("&wheres=%EB%8F%99%EB%9E%98%EA%B5%AC")
      : e.target.value === "남구"
      ? setWhere("&wheres=%EB%82%A8%EA%B5%AC")
      : e.target.value === "북구"
      ? setWhere("&wheres=%EB%B6%81%EA%B5%AC")
      : e.target.value === "해운대구"
      ? setWhere("&wheres=%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC")
      : e.target.value === "사하구"
      ? setWhere("&wheres=%EC%82%AC%ED%95%98%EA%B5%AC")
      : e.target.value === "금정구"
      ? setWhere("&wheres=%EA%B8%88%EC%A0%95%EA%B5%AC")
      : e.target.value === "강서구"
      ? setWhere("&wheres=%EA%B0%95%EC%84%9C%EA%B5%AC")
      : e.target.value === "연제구"
      ? setWhere("&wheres=%EC%97%B0%EC%A0%9C%EA%B5%AC")
      : e.target.value === "수영구"
      ? setWhere("&wheres=%EC%88%98%EC%98%81%EA%B5%AC")
      : e.target.value === "사상구"
      ? setWhere("&wheres=%EC%82%AC%EC%83%81%EA%B5%AC")
      : e.target.value === "기장군"
      ? setWhere("&wheres=%EA%B8%B0%EC%9E%A5%EA%B5%B0")
      : e.target.value === "전체"
      ? setWhere("")
      : console.log(0);
  };
  const Modal = () => {
    const firstModalTextStyle = { marginLeft: "30px" };

    const lastModalTextStyle = { marginRight: "30px" };

    const bubunModalTextStyle1 = { position: "relative", right: "15px" };
    const bubunModalTextStyle2 = { position: "relative", right: "40px" };
    const bubunModalTextStyle3 = { position: "relative", right: "5px" };
    const bubunModalTextStyle4 = { position: "relative", right: "50px" };
    const bubunModalTextStyle5 = { position: "relative", right: "10px" };
    const noregionModalTextStyle = { position: "relative", left: "350px" };

    return (
      <ModalOverlay>
        <ModalContent>
          <br />
          <ModalTitle>지역 선택</ModalTitle>
          <br />
          <br />
          <ModalText>
            <div style={firstModalTextStyle}>
              <ModalFont htmlFor="1">서구</ModalFont>
              <input
                type="radio"
                id="1"
                name="region"
                value="서구"
                onChange={getFilter}
              />
            </div>
            <div>
              <ModalFont htmlFor="2">중구</ModalFont>
              <input
                type="radio"
                id="2"
                name="region"
                value="중구"
                onChange={getFilter}
              />
            </div>
            <div>
              <ModalFont htmlFor="3">동구</ModalFont>
              <input
                type="radio"
                id="3"
                name="region"
                value="동구"
                onChange={getFilter}
              />
            </div>
            <div style={lastModalTextStyle}>
              <ModalFont htmlFor="4">영도구</ModalFont>
              <input
                type="radio"
                id="4"
                name="region"
                value="영도구"
                onChange={getFilter}
              />
            </div>
          </ModalText>
          <br />
          <br />
          <ModalText>
            <div style={firstModalTextStyle}>
              <ModalFont htmlFor="5">진구</ModalFont>
              <input
                type="radio"
                id="5"
                name="region"
                value="진구"
                onChange={getFilter}
              />
            </div>
            <div style={bubunModalTextStyle5}>
              <ModalFont htmlFor="6">동래구</ModalFont>
              <input
                type="radio"
                id="6"
                name="region"
                value="동래구"
                onChange={getFilter}
              />
            </div>
            <div style={bubunModalTextStyle2}>
              <ModalFont htmlFor="7">남구</ModalFont>
              <input
                type="radio"
                id="7"
                name="region"
                value="남구"
                onChange={getFilter}
              />
            </div>
            <div style={bubunModalTextStyle4}>
              <ModalFont htmlFor="8">북구</ModalFont>
              <input
                type="radio"
                id="8"
                name="region"
                value="북구"
                onChange={getFilter}
              />
            </div>
          </ModalText>
          <br />
          <br />
          <ModalText>
            <div style={firstModalTextStyle}>
              <ModalFont htmlFor="9">해운대구</ModalFont>
              <input
                type="radio"
                id="9"
                name="region"
                value="해운대구"
                onChange={getFilter}
              />
            </div>
            <div style={bubunModalTextStyle1}>
              <ModalFont htmlFor="10">사하구</ModalFont>
              <input
                type="radio"
                id="10"
                name="region"
                value="사하구"
                onChange={getFilter}
              />
            </div>
            <div style={bubunModalTextStyle3}>
              <ModalFont htmlFor="11">금정구</ModalFont>
              <input
                type="radio"
                id="11"
                name="region"
                value="금정구"
                onChange={getFilter}
              />
            </div>
            <div style={lastModalTextStyle}>
              <ModalFont htmlFor="12">강서구</ModalFont>
              <input
                type="radio"
                id="12"
                name="region"
                value="강서구"
                onChange={getFilter}
              />
            </div>
          </ModalText>
          <br />
          <br />
          <ModalText>
            <div style={firstModalTextStyle}>
              <ModalFont htmlFor="13">연제구</ModalFont>
              <input
                type="radio"
                id="13"
                name="region"
                value="연제구"
                onChange={getFilter}
              />
            </div>
            <div>
              <ModalFont htmlFor="14">수영구</ModalFont>
              <input
                type="radio"
                id="14"
                name="region"
                value="수영구"
                onChange={getFilter}
              />
            </div>
            <div>
              <ModalFont htmlFor="15">사상구</ModalFont>
              <input
                type="radio"
                id="15"
                name="region"
                value="사상구"
                onChange={getFilter}
              />
            </div>
            <div style={lastModalTextStyle}>
              <ModalFont htmlFor="16">기장군</ModalFont>
              <input
                type="radio"
                id="16"
                name="region"
                value="기장군"
                onChange={getFilter}
              />
            </div>
          </ModalText>
          <br />
          <ModalText>
            <div style={noregionModalTextStyle}>
              <ModalFont htmlFor="17">지역 전체</ModalFont>
              <input
                type="radio"
                id="17"
                name="region"
                value="전체"
                onChange={getFilter}
              />
            </div>
          </ModalText>
          <br />
          <br />
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
