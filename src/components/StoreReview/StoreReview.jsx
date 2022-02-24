import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useState } from "react/cjs/react.development";
import ReviewCard from "../ReviewCard/ReviewCard";
import {
  ButtonWrapper,
  CommentFormWrapper,
  StoreReviewContent,
  StoreReviewDetail,
  StoreReviewDetailList,
  StoreReviewEatMenu,
  StoreReviewImg,
  StoreReviewImgWrapper,
  StoreReviewInfo,
  StoreReviewTime,
  StoreReviewTitle,
  StoreReviewUser,
  StyledStoreReview,
  Textarea,
  UserAvatar,
} from "./StyledStoreReview";

const StoreReview = ({ reviews, token, storeId, me }) => {
  const [value, setValue] = useState("");
  const onPostReview = () => {
    axios
      .post(
        `http://127.0.0.1:8000/review/create/store/${storeId}`,
        {
          content: value,
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
  const onChangeValue = useCallback(
    e => {
      setValue(e.currentTarget.value);
    },
    [value]
  );

  return (
    <StyledStoreReview>
      <StoreReviewTitle>리뷰 ({reviews.length})</StoreReviewTitle>
      {!me && (
        <CommentFormWrapper>
          <div className="comment">
            <UserAvatar>{me?.nickname}</UserAvatar>
            <textarea
              value={value}
              onChange={onChangeValue}
              placeholder="리뷰를 남겨보세요!"
            ></textarea>
          </div>
          <div className="comment_button">
            <button onClick={onPostReview}>작성</button>
          </div>
        </CommentFormWrapper>
      )}
      <StoreReviewDetail>
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} me={me} token={token} />
        ))}
      </StoreReviewDetail>
    </StyledStoreReview>
  );
};

export default StoreReview;
