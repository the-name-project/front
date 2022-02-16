//For infinite Scrolling
import { useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import { StoreInfo } from "./StroeInfo";

const Contents = () => {
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView; //(무한스크롤)ref가 화면에 나타나면 inView는 true, 아니면 false를 반환한다.

  // 서버에서 가게를 가지고 오는 함수
  const getStores = useCallback(async () => {
    setLoading(true);
    await axios.get(`?w=248&fit=crop&auto=format/pages=${page}`).then((res) => {
      setStores((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);

  //`getStores`가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getStores();
  }, [getStores]);

  useEffect(() => {
    //사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevStage) => prevStage + 1);
    }
  }, [inView, loading]);
  return <StoreInfo />;
};
