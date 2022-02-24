import styled, { css } from "styled-components";


export const Test = styled.div`
    color: red;
`;

export const MypageCon = styled.div`
    display: flex;
    flex-direction :column;
    max-width :1200px;
    
    justify-items :center;

    margin:0 auto;
`;

export const LogoImg = styled.img`
    height = "100%";
    width = "100%";
    margin-left :1vw;
    cursor :pointer;
`;

export const ProfileImg = styled.img`
    height = "auto";
    width = "auto";
    max-width = 100px;
    background-size :contain;
    border-radius : 12vw;
`;

export const MypageTop = styled.div`
    display :flex;
    flex :9vw;
    height :5vw;
    max-height :7rem;
`;

export const MypageUserInfo = styled.div`
    display :flex;
    height:20vw;
    max-height :200px;
    flex-direction :row;
    margin-top :20px;
    margin-left :3vw;
`;

export const MypagePro1 = styled.div`
    width :20vw;
    height :20vw;
    max-width :200px;
    max-height :200px;
    border :2px solid black;
    border-radius : 10vw;
`;

export const MypagePro2 = styled.div`
    flex :1;
    display :flex;
    flex-direction :column;

    padding-left : 1em;
    font-size :3vw;
`;

export const MypageProNickname = styled.div`
    flex :1;
    font-weight :bolder;
`;

// .mypage_pro_nickname>p{
//     margin :0px;
// }

export const MypageProEtc = styled.div`
    flex :1;
    font-size :2.5vw;
`;

export const ChangeBtn = styled.button`
    font-weight :600;
    font-size :2vw;
    margin-left :1.5rem;
    padding :1.2vw;
    padding-left :1.5vw;
    padding-right :1.5vw;
    border-radius :3vw;
    background-color :#D3F6F3;
    border-color :#3f928d;
    cursor :pointer;

    &:active{
        background-color :#ABD4D0;
    }
`;

export const MypageMenu = styled.div`
    display :flex;
    height :7vw;
    max-height :80px;
    flex-direction :row;
    text-align :center;
    align-items:center;
    text-decoration: none;

    background-color :#FBD1B7;
    color :white;
    font-size :2.5vw;
    margin-top :20px;
    margin-bottom :1vw;
`;

export const MypageMenuN = styled.a`
    flex :1;
    padding :1.6vw;
    cursor :pointer;
    text-decoration: none;

    &:active{
        border-bottom : 0.8vw solid white;
    }
    
`;

export const MypageJjimStore = styled.div`
    display :flex;
    flex :1;
    flex-direction :column;
    
    margin-left :5vw;
    margin-right :5vw;
`;

export const MypageJjimLine = styled.div`
    display :flex;
    flex :1;
    flex-direction :row;

    background-color :#dddddd;
`;

export const MypageJjimUnit = styled.div`
    flex :1;
    
    height :30vw;
    border :1px solid rgb(116, 116, 116);
    &:hover{
        cursor :pointer;
    }

    max-width :350px;
    max-height :350px;
`;
export const MypageJjimUnitImg = styled.img`
    flex :1;
    transition :0.1s;
    float :left;
    
    height :30vw;
    max-width :350px;
    max-height :350px;
`;

export const MypageJjimInfo = styled.p`
    position :absolute;
    padding :0;
    height :30vw;
    width :30vw;
    margin :0;
    color :transparent;
    font-size :2vw;
    font-weight :bolder;
    text-align :center;
    &:hover{
        color :white;
        background-color :black;
        opacity :0.6;
        cursor :pointer;
        z-index :0;
    }
`;


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
export const MenuDesign = styled.span`
    color :white;
    text-decoration: none;
    &:hover{
        font-weight :bolder;
    }
`;

// export const BlackUp = styled.span`
//     flex :1;
    
//     height :30vw;
//     border :1px solid rgb(116, 116, 116);

//     max-width :350px;
//     max-height :350px;
//     &:hover{
//         background-color :black;
//     }
//     z-index :2;

// `;




// .mypage_pro_etc>p{
//     margin :0px;
// }

// @font-face {
//     font-family: 'NanumSquareRound';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
// }

// *{
//     font-family: 'NanumSquareRound';
// }

// /*
// 테마색

// 하늘 - #D3F6F3
// 레몬 - #F9FCE1
// 치즈 - #FEE9B2
// 살구 - #FBD1B7 
// */