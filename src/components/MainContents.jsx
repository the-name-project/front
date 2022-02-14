import { useState } from "react";
//import { StoreInfo } from "./StroeInfo";
import {
  StyledMain,
  ImgWrapper,
  StoreImg,
  StoreInfoBar,
} from "./StyledMainContents";

export default function MainContents() {
  return (
    <StyledMain>
      <div>Test</div>
      <ImgWrapper>
        {itemData.map((store) => (
          <StoreImg key={store.id}>
            <img
              src={`${store.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${store.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={store.title}
              loading="lazy"
            />
            <StoreInfoBar
              title={store.title}
              subtitle={<span>by: {store.address}</span>}
              position="below"
            />
          </StoreImg>
        ))}
      </ImgWrapper>
    </StyledMain>
  );
}

const Contents = () => {
  const [mouseon, setMonuseon] = useState(0); //이미지 위에 마우스를 올렸을 때
  const [click, setClick] = useState(0); //클릭 했을 때
};

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    address: "@bkristastucchio",
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
