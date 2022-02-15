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
  display: flex;
  padding: 20px 0;
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
  display: flex;
  flex-direction: column;
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
