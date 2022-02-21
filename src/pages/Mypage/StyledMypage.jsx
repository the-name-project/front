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

    background-color :#FBD1B7;
    color :white;
    font-size :2.5vw;
    margin-top :20px;
    margin-bottom :1vw;
`;

export const MypageMenuN = styled.div`
    flex :1;
    padding :1.6vw;

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

export const MypageJjimUnit = styled.img`
    flex :1;
    
    height :30vw;
    border :1px solid rgb(116, 116, 116);

    max-width :350px;
    max-height :350px;
`;




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
