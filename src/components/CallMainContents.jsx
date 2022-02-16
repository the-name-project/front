import React, { useState, useEffect } from "react";
import axios from "axios";
import { StoreInfo } from "../pages/Store/StyledStore";
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
        "https://jsonplaceholder.typicode.com/photos"
      ); //서버가 있어야 함
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  console.log(posts);

  return (
    <div className="CallMainContents">
      <MainContents posts={posts} loading={loading}></MainContents>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default CallMainContents;
