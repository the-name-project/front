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
    height = 100%;
    width = 100%;
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

// export const GoHome = styled.div`
//     position :absolute; 
//     padding-right :6vw;
//     padding-bottom :2vw;
//     font-size :5vw;
//     left :1vw;
//     background-color :blue;
//     z-index :-1;
    
// `;

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

    background-color :#FBD1B7;
    color :white;
    font-size :2.5vw;
    margin-top :20px;
    margin-bottom :3vw;
    text-decoration: none;
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

export const MenuDesign = styled.span`
    color :white;
    display :block;
    padding-top :1.7vw;
    padding-bottom :1.7vw;
    text-decoration-color: #FBD1B7;
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
// ?????????

// ?????? - #D3F6F3
// ?????? - #F9FCE1
// ?????? - #FEE9B2
// ?????? - #FBD1B7 
// */