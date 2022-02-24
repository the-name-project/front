import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

import { ImgWrapper, StyledPlus } from "./StyledCallMainContents";

const CallMainContents = ({ CheckScoreOrder, where }) => {
  const [PostArray, setPostArray] = useState([]);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [scoreOrder, setScoreOrder] = useState("");
  const [end, setEnd] = useState(0);
  // &wheres=%EB%8F%99%EA%B5%AC

  const AddPost = () => {
    setSkip(end);
  };

  useEffect(() => {
    async function fetchData() {
      
      const response = await axios.get(
        // http://127.0.0.1:8000/store/daum_score?skip=0&limit=10
        // http://127.0.0.1:8000/store/naver_score?skip=0&limit=10&wheres=%EC%A4%91%EA%B5%AC
        `http://127.0.0.1:8000/store${scoreOrder}?skip=${skip}&limit=${limit}${where}`
      ); //서버가 있어야 함

      let poooost = response.data.slice(0, 20);
      setEnd(response.data[20].end[0]);

      skip === 0
        ? setPostArray((prev) => [poooost])
        : setPostArray((prev) => [...prev, poooost]);
    }
    fetchData();
  }, [skip, where, scoreOrder]);
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

  useEffect(() => {
    function fetchData() {
      setSkip(0);
    }
    fetchData();
  }, [where]);

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
