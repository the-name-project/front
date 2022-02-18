import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import {
  StyledMain,
  ImgWrapper,
  ImgDetail,
  StoreImg,
  Title,
  StoreInfoTop,
} from "./StyledMainContents";

const MainContents = ({ posts, loading }) => {
  const [click, setClick] = useState(0); //클릭 했을 때

  const [mouseover, setMouseOver] = useState(""); //마우스 커서를 올렸을때 타이틀 저장
  const [flag, setFlag] = useState(false); //마우스 커서가 사진 위에 존재하는지 true,false로 확인
  const [id, setId] = useState(0); //마우스 커서가 올려진 사진만 타이틀을 출력하기 위해 id 따로 저장

  useEffect(() => {
    console.log("제목" + mouseover);
  }, [mouseover]);
  return (
    <>
      {loading && <div> loading... </div>}

      {
        <StyledMain>
          <ImgWrapper>
            {posts.map((post) => (
              <ImgDetail>
                <StoreImg
                  key={post.id}
                  url={post.url}
                  onMouseOver={() => {
                    setMouseOver(post.title);
                    setFlag(true);
                    setId(post.id);
                  }}
                  onMouseOut={() => {
                    setFlag(false);
                  }}
                >
                  {flag == true && post.id == id ? (
                    <StoreInfoTop className="top">{mouseover}</StoreInfoTop>
                  ) : (
                    <StoreInfoTop className="top"></StoreInfoTop>
                  )}
                </StoreImg>
                <Title>{post.id}</Title>
              </ImgDetail>
            ))}
          </ImgWrapper>
        </StyledMain>
      }
    </>
  );
};

//더미데이터
const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "맛있는 아침",
    address: "@부산광역시 남구 대연동 어쩌구저쩌구",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    address: "@rollelflex_graphy726",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    address: "@helloimnik",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    address: "@nolanissac",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    address: "@hjrc33",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    address: "@arwinneil",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    address: "@tjdragotta",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    address: "@katie_wasserman",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    address: "@silverdalex",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    address: "@shelleypauls",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    address: "@peterlaster",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    address: "@southside_customs",
  },
];

export default MainContents;
