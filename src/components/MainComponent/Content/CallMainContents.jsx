import React, { useState, useEffect } from "react";
import axios from "axios";
import FirstPost from "./FirstPost";
import PlusPost from "./PlusPost";
import { ImgWrapper, StyledPlus } from "./StyledCallMainContents";

const CallMainContents = () => {
  const [plusPost, setPlusPost] = useState([]);
  const [plusPostArray, setPlusPostArray] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(30);
  // &wheres=%EB%8F%99%EA%B5%AC
  const [where, setWhere] = useState("");
  const Test = () => {
    setSkip(skip + 30);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `http://127.0.0.1:8000/store?skip=${skip}&limit=${limit}${where}`
      ); //서버가 있어야 함
      console.log(response.data);
      let poooost = response.data.slice(0, 30);
      skip === 0 ? setPosts(poooost) : setPlusPost(poooost); //첨에만 post값 바꿔주고 그담부턴딴거
      setLoading(false);
    }
    fetchData();
  }, [skip, where]);

  return (
    <div>
      <ImgWrapper>
        <FirstPost posts={posts} loading={loading}></FirstPost>
        {/* 1. map을 이용해서 pluspost를 만들때마다 처음부터 렌더링 해도되지만, 
        // 그렇게하기싫고
        반복이 아니라 추가를 하고싶다... 어떻게 해야할까?
        2. 그러니까 onclick이 될때마다
        //  <PlusPost posts={plusPost} loading={loading}></PlusPost>
        3.이게 추가가 되면된다는말이다. 아주 단순한 방법이 있을텐데.... */}
        <PlusPost posts={plusPost} loading={loading}></PlusPost>
        
      </ImgWrapper>
      <StyledPlus
        onClick={() => {
          Test();
        }}
      >
        버어엌
      </StyledPlus>
    </div>
  );
};

export default CallMainContents;
