import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

import { ImgWrapper, StyledPlus } from "./StyledCallMainContents";

const CallMainContents = ({ CheckScoreOrder, setCheckScoreOrder }) => {
  const [PostArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [scoreOrder, setScoreOrder] = useState("");
  // &wheres=%EB%8F%99%EA%B5%AC
  const [where, setWhere] = useState("");

  const AddPost = () => {
    setSkip(skip + 20);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        // http://127.0.0.1:8000/store/daum_score?skip=0&limit=10
        // http://127.0.0.1:8000/store/naver_score?skip=0&limit=10&wheres=%EC%A4%91%EA%B5%AC
        `http://127.0.0.1:8000/store${scoreOrder}?skip=${skip}&limit=${limit}${where}`
      ); //서버가 있어야 함

      let poooost = response.data.slice(0, 20);
      skip === 0
        ? setPostArray((prev) => [poooost])
        : setPostArray((prev) => [...prev, poooost]);
    }
    fetchData();
  }, [skip, where, scoreOrder, where]);
  useEffect(() => {
    function fetchData() {
      if (CheckScoreOrder == 1) {
        setScoreOrder((prev) => "/naver_score");
        setSkip(0);
      } else if (CheckScoreOrder == 2) {
        setScoreOrder((prev) => "/daum_score");
        setSkip(0);
      }
    }
    fetchData();
  }, [CheckScoreOrder]);
  // 1.mouseEnter오류
  console.log(PostArray);
  // 3. 필터 적용시키기
  // 3.평점순은 각각 평점순에서 가져오기
  // 4. 지역별 필터 옵션으로 만들기
  return (
    <div>
      <ImgWrapper>
        {PostArray.map((plpost, index) => (
          <Post key={index} posts={plpost}></Post>
        ))}
      </ImgWrapper>

      <StyledPlus
        onClick={() => {
          AddPost();
        }}
      >
        더보기
      </StyledPlus>
    </div>
  );
};

export default CallMainContents;
