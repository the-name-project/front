import React, { useState, useEffect } from "react";
import axios from "axios";
import MainContents from "./MainContents";
import Pagination from "./Paginatio";

const CallMainContents = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:8000/store?skip=0&limit=100"
      );
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  //얼만큼 자르는지
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  //잘라주는 함수
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  console.log(posts);

  return (
    <div className="CallMainContents">
      <MainContents
        posts={currentPosts(posts)}
        loading={loading}
        currentPage={currentPage}
      ></MainContents>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default CallMainContents;
