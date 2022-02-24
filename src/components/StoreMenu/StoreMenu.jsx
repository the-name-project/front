import axios from "axios";
import { useEffect, useState } from "react";
import {
  StoreMenuDetailList,
  StoreMenuImg,
  StoreMenuName,
  StoreMenuNameAndPrice,
  StoreMenuPrice,
  StyledStoreMenu,
} from "./StyledStoreMenu";

const StoreMenu = ({ storeId }) => {
  const [storeMenu, setStoreMenu] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/store/${storeId}/menu`)
      .then(response => {
        console.log(response.data);
        setStoreMenu(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [storeId]);
  return (
    <StyledStoreMenu>
      {storeMenu.map(storeMenuList => (
        <StoreMenuDetailList key={storeMenuList.id}>
          <StoreMenuImg url={storeMenuList.menu_image}>
            {storeMenuList.menu_image === "None" && (
              <span style={{ color: "#afadad" }}>이미지 준비중...</span>
            )}
          </StoreMenuImg>
          <StoreMenuNameAndPrice>
            <StoreMenuName>{storeMenuList.name}</StoreMenuName>
            <StoreMenuPrice>{storeMenuList.price}원</StoreMenuPrice>
          </StoreMenuNameAndPrice>
        </StoreMenuDetailList>
      ))}
    </StyledStoreMenu>
  );
};

export default StoreMenu;
