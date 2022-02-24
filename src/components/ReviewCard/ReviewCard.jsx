import axios from "axios";
import { useCallback, useState } from "react";
import {
  ButtonWrapper,
  StoreReviewContent,
  StoreReviewDetailList,
  StoreReviewInfo,
  StoreReviewUser,
  Textarea,
  UserAvatar,
} from "../StoreReview/StyledStoreReview";

const ReviewCard = ({ review, me, token }) => {
  const [textareaValue, setValue] = useState(review.content);
  const [isEdit, setIsEdit] = useState(false);
  const onEditReview = () => {
    setIsEdit(prev => !prev);
    axios
      .patch(
        `http://127.0.0.1:8000/review/${review.id}`,
        {
          content: textareaValue,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        //storeRiew없데이트
      })
      .catch(error => console.log(error));
  };
  const onDeleteReview = () => {
    axios
      .delete(`http://127.0.0.1:8000/review/${review.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        //storeRiew없데이트
      })
      .catch(error => console.log(error));
  };
  const onChangeValue = useCallback(
    e => {
      setValue(e.currentTarget.value);
      console.log(textareaValue);
    },
    [textareaValue]
  );
  return (
    <StoreReviewDetailList>
      <div className="review_info">
        <StoreReviewUser>
          <UserAvatar>{review.user.nickname}</UserAvatar>
        </StoreReviewUser>
        <StoreReviewInfo>
          <StoreReviewContent>
            {isEdit ? (
              <Textarea
                value={textareaValue}
                onChange={onChangeValue}
                placeholder="리뷰를 남겨보세요!"
              ></Textarea>
            ) : (
              <span>{review.content}</span>
            )}
          </StoreReviewContent>
        </StoreReviewInfo>
      </div>
      <ButtonWrapper>
        <button onClick={onEditReview}>수정</button>
        <button onClick={onDeleteReview} className="review_delete">
          삭제
        </button>
      </ButtonWrapper>
    </StoreReviewDetailList>
  );
};

export default ReviewCard;
