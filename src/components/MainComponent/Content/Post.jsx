import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { FaStar } from "react-icons/fa";
import NoneImg from "./noimage.png";

import {
  ImgContainer,
  StoreImg,
  StoreContent,
  Storeaddress,
} from "./StyledPost";

const Post = ({ posts, loading }) => {
  const [flag, setFlag] = useState(false); //마우스 커서가 사진 위에 존재하는지 true,false로 확인
  const [id, setId] = useState(0);
  //마우스 커서가 올려진 사진만 타이틀을 출력하기 위해 id 따로 저장

  return (
    <>
      {loading && <div> 로딩중입니다:) </div>}

      {
        <>
          {posts.map((post) => (
            <ImgContainer key={post.id}>
              <StoreImg
                src={post.image == "None" ? NoneImg : post.image}
                referrerPolicy="no-referrer"
                alt="여기 금지사진넣어야 됨 ㅋ"
                onMouseEnter={() => {
                  //마우스 올렸을때

                  setFlag(true); // flag -> true
                  setId(post.id); //마우스가 올려진 사진의 고유 id 저장
                }}
                onMouseLeave={() => {
                  setFlag(false);
                }}
              ></StoreImg>
              {flag == true && post.id == id ? (
                <Storeaddress>
                  <div> {post.address}</div> <br />
                  <div>{post.tags}</div>
                </Storeaddress>
              ) : null}

              {/* <img src={post.image} referrerpolicy="/no-referrer" alt="" />{" "}
                //이거 한번 실행해주면 이미지 뜸(이유는 모르겠음) */}
              <StoreContent>
                {post.name} {post.daum_score} <FaStar color="yellow" />
              </StoreContent>
            </ImgContainer>
          ))}
        </>
      }
    </>
  );
};

export default Post;
