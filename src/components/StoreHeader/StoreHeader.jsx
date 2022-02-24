import {
  ImgWrapper,
  ModalWrapper,
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
import {
  faStar as faSolidStar,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faXbox } from "@fortawesome/free-brands-svg-icons";

const StoreHeader = ({ storeId, token, name, storeImage }) => {
  const [like, setLike] = useState(0);
  const [toggleStar, setToggleStar] = useState(false);
  const [showModal, setShowMdal] = useState(false);

  const onClickLike = useCallback(() => {
    if (token) {
      setLike(prev => prev + 1);
      axios
        .post(`http://127.0.0.1:8000/like/${storeId}/likes`)
        .then(response => setLike(response.data.num));
    } else {
      setShowMdal(prev => !prev);
    }
  }, [token, like]);

  const onClickStar = useCallback(() => {
    setToggleStar(prev => !prev);
  }, [toggleStar]);

  useEffect(() => {
    //좋아요 수 API
    axios
      .get(`http://127.0.0.1:8000/like/${storeId}/likes/num`)
      .then(response => {
        setLike(response.data.num);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onClose = e => {
    setShowMdal(prev => !prev);
  };

  return (
    <StyledStoreHeader>
      <ImgWrapper>
        <StoreImg url={storeImage} />
      </ImgWrapper>
      <StoreBasic>
        <Title>{name}</Title>
        <Sub>
          <div onClick={onClickLike}>
            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
            <span>{like}</span>
          </div>
          <div onClick={onClickStar}>
            {toggleStar ? (
              <>
                <div className="iconWrapper">
                  <FontAwesomeIcon icon={faSolidStar} color="#FAD1B6" />
                  <span>취소</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <FontAwesomeIcon icon={faStar} size="2x" />
                  <span>찜하기</span>
                </div>
              </>
            )}
          </div>
        </Sub>
      </StoreBasic>
      {showModal && (
        <ModalWrapper onClick={() => setShowMdal(prev => !prev)}>
          <div onClick={e => e.stopPropagation()} className="modal">
            <div className="modal_close">
              <FontAwesomeIcon
                onClick={onClose}
                icon={faWindowClose}
                size="lg"
              />
            </div>
            <h3>로그인</h3>
            <p>로그인 하면 리뷰를 작성할 수 있어요</p>
            <Link to="/login">
              <button>로그인 하러가기</button>
            </Link>
          </div>
        </ModalWrapper>
      )}
    </StyledStoreHeader>
  );
};

export default StoreHeader;
