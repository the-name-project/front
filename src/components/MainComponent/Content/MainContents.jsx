import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import {
  StyledMain,
  ImgWrapper,
  ImgDetail,
  StoreImg,
  Title,
  StoreInfoTop,
  Storeaddress,
  StoreImgDetail,
} from "./StyledMainContents";

const MainContents = ({ posts, loading }) => {
  const [click, setClick] = useState(0); //클릭 했을 때

  const [mouseover, setMouseOver] = useState(""); //마우스 커서를 올렸을때 타이틀 저장
  const [flag, setFlag] = useState(false); //마우스 커서가 사진 위에 존재하는지 true,false로 확인
  const [id, setId] = useState(0); //마우스 커서가 올려진 사진만 타이틀을 출력하기 위해 id 따로 저장

  return (
    <>

      {loading && <div> 로딩중입니다:) </div>}


      {
        <StyledMain>
          <ImgWrapper>
            {posts.map((post) => (
              <ImgDetail key={post.id}>
                <StoreImg>
                  <StoreImgDetail
                    src={post.image}
                    referrerPolicy="no-referrer"
                    alt=""
                    onMouseOver={() => {
                      //마우스 올렸을때
                      setMouseOver(post.address); //post.title 값을 mouseover에 저장
                      setFlag(true); // flag -> true
                      setId(post.id); //마우스가 올려진 사진의 고유 id 저장
                    }}
                    onMouseOut={() => {
                      setFlag(false);
                    }}
                  ></StoreImgDetail>
                  {flag == true && post.id == id ? (
                    <Storeaddress>
                      <StoreInfoTop className="top">{mouseover}</StoreInfoTop>
                    </Storeaddress>
                  ) : null}
                </StoreImg>
                {/* <img src={post.image} referrerpolicy="/no-referrer" alt="" />{" "}
                //이거 한번 실행해주면 이미지 뜸(이유는 모르겠음) */}
                <Title key={post.name}>{post.name}</Title>
              </ImgDetail>
            ))}
          </ImgWrapper>
        </StyledMain>
      }
    </>
  );
};

export default MainContents;
