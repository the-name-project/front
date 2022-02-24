import styled, { css } from "styled-components";

export const StyledStoreReview = styled.div`
  padding: 20px 80px;
`;

export const StoreReviewTitle = styled.h5`
  font-size: 1.3rem;
  margin-bottom: 30px;
`;
export const StoreReviewDetail = styled.ul``;
export const StoreReviewDetailList = styled.li`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  .review_info {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid #9e9e9e;
`;
export const StoreReviewUser = styled.div`
  margin-right: 20px;
`;
export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3f6f3;
  font-size: 0.7rem;
`;
export const StoreReviewInfo = styled.div`
  flex: 1;
`;
export const StoreReviewTime = styled.span`
  color: #9e9e9e;
  margin-bottom: 10px;
`;
export const StoreReviewContent = styled.div`
  margin-bottom: 10px;
  span {
    margin-right: 10px;
  }
`;
export const StoreReviewImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
`;
export const StoreReviewImg = styled.div`
  ${props => {
    const bgURL = `no-repeat center/80% url("${props.url}")`;
    return css`
      width: ${bgURL ? "120px" : "0px"};
      height: ${bgURL ? "120px" : "0px"};
      background: ${bgURL};
      background-size: contain;
      border-radius: 15px;
    `;
  }}
`;

export const StoreReviewEatMenu = styled.div`
  background-color: #fee9b2;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .comment {
    flex: 1;
    display: flex;
    gap: 10px;
    textarea {
      font-family: inherit;
      width: 100%;
      padding: 1rem 1rem 1.5rem;
      border: none;
      resize: none;
      border: 1px solid #fee9b2;
      &::placeholder {
        color: #9ca3ab;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .comment_button {
    width: 100%;
    text-align: right;
    button {
      cursor: pointer;
      border: none;
      background: #fee9b2;
      width: 70px;
      padding: 10px 20px;
      border-radius: 7px;
    }
  }
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  width: 100%;
  padding: 1rem 1rem 1.5rem;
  border: none;
  resize: none;
  border: 1px solid #fee9b2;
  &::placeholder {
    color: #9ca3ab;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
  button {
    cursor: pointer;
    border: none;
    background: #60da79;
    color: #fff;
    width: 70px;
    padding: 10px 20px;
    border-radius: 7px;
  }
  .review_delete {
    background: #ec7171;
  }
`;
