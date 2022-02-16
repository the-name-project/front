import {
  ImgWrapper,
  StoreBasic,
  StoreImg,
  StyledStoreHeader,
  Sub,
  Title,
} from "./StyledStoreHeader";
import {
  faThumbsDown,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";

const StoreHeader = ({ storeMenu }) => {
  const [like, setLike] = useState(0);
  const [unlike, setUnLike] = useState(0);
  const [toggleStar, setToggleStar] = useState(false);

  const onClickLike = useCallback(() => {
    setLike(prev => prev + 1);
  }, [like]);

  const onClickUnLike = useCallback(() => {
    setUnLike(prev => prev + 1);
  }, [unlike]);

  const onClickStar = useCallback(() => {
    setToggleStar(prev => !prev);
  }, [toggleStar]);
  return (
    <StyledStoreHeader>
      <ImgWrapper>
        {storeMenu.map(storeMenuList => (
          <StoreImg key={storeMenuList.url} url={storeMenuList.url} />
        ))}
      </ImgWrapper>
      <StoreBasic>
        <Title>식당이름</Title>
        <Sub>
          <div onClick={onClickLike}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{like}</span>
          </div>
          <div onClick={onClickUnLike}>
            <FontAwesomeIcon icon={faThumbsDown} />
            <span>{unlike}</span>
          </div>
          <div onClick={onClickStar}>
            {toggleStar ? (
              <>
                <FontAwesomeIcon icon={faSolidStar} color="green" />
                <span>취소</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faStar} />
                <span>찜하기</span>
              </>
            )}
          </div>
        </Sub>
      </StoreBasic>
    </StyledStoreHeader>
  );
};

export default StoreHeader;
