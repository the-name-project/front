import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  UserAvatar,
} from "./StyledStoreReview";

const StoreReview = ({ reviews }) => {
  return (
    <StyledStoreReview>
      <StoreReviewTitle>리뷰 ({reviews.length})</StoreReviewTitle>
      <StoreReviewDetail>
        {reviews.map(review => (
          <StoreReviewDetailList key={review.id}>
            <StoreReviewUser>
              <UserAvatar>{review.user.nickname}</UserAvatar>
            </StoreReviewUser>
            <StoreReviewInfo>
              <StoreReviewTime>{review.time}</StoreReviewTime>
              <StoreReviewContent>
                <span>{review.content}</span>
                <span>
                  {review.recommend ? (
                    <FontAwesomeIcon icon={faThumbsUp} />
                  ) : (
                    <FontAwesomeIcon icon={faThumbsDown} />
                  )}
                </span>
              </StoreReviewContent>
              <StoreReviewImgWrapper>
                <StoreReviewImg url={review.eatMenuImg} />
                <StoreReviewEatMenu>{review.eatMenu}</StoreReviewEatMenu>
              </StoreReviewImgWrapper>
            </StoreReviewInfo>
          </StoreReviewDetailList>
        ))}
      </StoreReviewDetail>
    </StyledStoreReview>
  );
};

export default StoreReview;
