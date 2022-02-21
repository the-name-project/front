import { useState } from "react";
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
} from "./StyledHeader";
import logo from "./만원의행복_100px_9b8b71_3.png";
const Header = () => {
  const [filter, setFilter] = useState(false);

  const Modal = () => {
    return (
      <ModalOverlay>
        <ModalContent>
          <h1>난모달</h1>
          <button onClick={() => setFilter(false)}>나가!</button>
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
        <OrderButton1>찜 많은 순</OrderButton1>
        <OrderButton2>리뷰 많은 순</OrderButton2>
      </FlexDiv>
    </StyledHeader>
  );
};

export default Header; //jsx에서 export하는건 단일한 컴포넌트여야함
