// import Header from "../../components/Header/Header";
import {
  StyledStore,
  StoreInfo,
  StoreNavBar,
  StoreInfoList,
  StoreDetail,
} from "./StyledStore";
import { useCallback, useState } from "react";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import StoreHome from "../../components/StoreHome/StoreHome";
import StoreMenu from "../../components/StoreMenu/StoreMenu";
import StoreReview from "../../components/StoreReview/StoreReview";

const storeMenu = [
  {
    id: 1,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1129699_1620482534399327.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "민물장어덮밥",
    price: "6700",
  },
  {
    id: 2,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204185842842.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "해산물덮밥",
    price: "7200",
  },
  {
    id: 3,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186557414.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "카이센동",
    price: "8900",
  },
  {
    id: 4,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186249261.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "생연어덮밥",
    price: "7200",
  },
];

const reviews = [
  {
    user: {
      id: 1,
      avatar: "",
      nickname: "test",
    },
    eatMenu: "해산물덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204185842842.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "친절하고 맛있어요",
    time: "2022-02-01",
    id: 1,
  },
  {
    user: {
      id: 2,
      avatar: "",
      nickname: "test2",
    },
    eatMenu: "카이센동",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186557414.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "맛잇어요",
    time: "2022-01-21",
    id: 2,
  },
  {
    user: {
      id: 3,
      avatar: "",
      nickname: "test3",
    },
    eatMenu: "생연어덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186249261.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: false,
    content: "별로",
    time: "2022-01-15",
    id: 3,
  },
  {
    user: {
      id: 4,
      avatar: "",
      nickname: "test4",
    },
    eatMenu: "민물장어덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1129699_1620482534399327.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "생각보다 매운데 맛있음",
    time: "2021-12-02",
    id: 4,
  },
];

const Store = () => {
  const [storeInfo, setStoreInfo] = useState("home");

  const onClickStoreInfo = useCallback(
    e => {
      switch (e.target.innerText) {
        case "홈":
          return setStoreInfo("home");
        case "메뉴":
          return setStoreInfo("menu");
        case "리뷰":
          return setStoreInfo("review");
      }
    },
    [storeInfo]
  );
  console.log(storeInfo);
  return (
    <>
      <StyledStore>
        <StoreHeader storeMenu={storeMenu} />
        <StoreInfo>
          <StoreNavBar>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "home" ? storeInfo : ""}
            >
              홈
            </StoreInfoList>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "menu" ? storeInfo : ""}
            >
              메뉴
            </StoreInfoList>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "review" ? storeInfo : ""}
            >
              리뷰
            </StoreInfoList>
          </StoreNavBar>
          <StoreDetail>
            {storeInfo === "home" && <StoreHome />}
            {storeInfo === "menu" && <StoreMenu storeMenu={storeMenu} />}
            {storeInfo === "review" && <StoreReview reviews={reviews} />}
          </StoreDetail>
        </StoreInfo>
      </StyledStore>
    </>
  );
};
//good
export default Store;
