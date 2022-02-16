import {
  StoreMenuDetailList,
  StoreMenuImg,
  StoreMenuName,
  StoreMenuNameAndPrice,
  StoreMenuPrice,
  StyledStoreMenu,
} from "./StyledStoreMenu";

const StoreMenu = ({ storeMenu }) => {
  return (
    <StyledStoreMenu>
      {storeMenu.map(storeMenuList => (
        <StoreMenuDetailList key={storeMenuList.id}>
          <StoreMenuImg url={storeMenuList.url} />
          <StoreMenuNameAndPrice>
            <StoreMenuName>{storeMenuList.title}</StoreMenuName>
            <StoreMenuPrice>{storeMenuList.price}원</StoreMenuPrice>
          </StoreMenuNameAndPrice>
        </StoreMenuDetailList>
      ))}
    </StyledStoreMenu>
  );
};

export default StoreMenu;
