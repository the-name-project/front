// import { Link, BrowserRouter } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import {MypageCon, MypageTop, LogoImg, 
    MypageUserInfo, MypagePro1, MypagePro2, 
    MypageProNickname, ChangeBtn, MypageProEtc, 
    ProfileImg, MypageMenu, MypageMenuN,MypageJjimUnitImg, 
    MypageJjimInfo,MenuDesign,
    MypageJjimStore, MypageJjimLine, MypageJjimUnit, 
} from './StyledMypage';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./만원의행복3.png";
import defaultProfile from "./defaultProfile.png";
// import storeData from '../../data/store.json';
import MypageReview from './MypageReview';
import axios from "axios";

import StoreImg from "./만원의행복3.png";


const Mypage=()=>{
    const [posts, setPosts] = useState([]);
    const [posts_2, setPosts_2] = useState([]);

      
    useEffect(() =>{
        async function fetchData(){
            axios
                //users 또는 user/1또는 2
                //Bearer 뒤에 Test Token불러오면 될 듯 
                .get(`http://127.0.0.1:8000/user/1`, {headers:{Authorization :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU2MDE3NDAsInN1YiI6IjEifQ.aFNFsKwrBImu2LURGemMZgxPWHPcDPy3RTR74vSup2U`}})
                .then((response)=>{console.log(response.data)});
            // setLoading(true);
            const response = await axios.get(
                "http://127.0.0.1:8000/user/1"
            );
            setPosts(response.data);

            const response_2 = await axios.get(
                "http://127.0.0.1:8000/store?skip=0&limit=10"
            );
            setPosts_2(response_2.data);

        }
        fetchData();
    },[]);


    console.log("---------------------------------------------------");
    console.log("사용자 : "+posts.full_name);
    // console.log(posts_2[0].image);

// export 
// const getLoginUser =()=>{
//     return 
//     // console.log(response.data);
    
// };


    
    // console.log(response);

    // console.log(storeData[0]['name']+"  "+storeData[0]['tags']);
    return(
        <div>
            <MypageCon>
{/* ---------------1---------------------------- */}
                              {/*메인으로 고쳐야함*/}
                <MypageTop><Link to = "/">
                    <LogoImg src = {logo} alt = "로고_사진"
                    height = "100%" width = "100%"/></Link>
                </MypageTop>
{/* ---------------2---------------------------- */}
                <MypageUserInfo>
                    <MypagePro1>
                        <ProfileImg src = {defaultProfile}
                        alt = "기본프로필사진"
                        width = "100%" height = "98%"/>
                    </MypagePro1>
                    <MypagePro2>
                        <MypageProNickname>
                            {posts.nickname}
                            <ChangeBtn>정보수정</ChangeBtn>
                        </MypageProNickname>
                        <MypageProEtc>
                            {posts.full_name} / {posts.email}
                        </MypageProEtc>
                    </MypagePro2>
                </MypageUserInfo>
{/* ---------------3---------------------------- */}
                <MypageMenu>
                    <MypageMenuN>찜</MypageMenuN>
                    <MypageMenuN><Link to = "/mypageReview"><MenuDesign>
                      리뷰</MenuDesign></Link></MypageMenuN>
                </MypageMenu>
{/* ---------------4---------------------------- */}
                <MypageJjimStore>
                    <MypageJjimLine>
                        {/* <BlackUp> */}
                            <MypageJjimUnit>
                                <MypageJjimInfo>
                                    어쩌고 저쩌고
                                    {/* {posts_2[0].name}<br/>
                                    {posts_2[0].tags} */}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src = {StoreImg}/>
                            </MypageJjimUnit>
                        {/* </BlackUp> */}
                        <MypageJjimUnit>
                            <MypageJjimUnitImg src ="https://img1.kakaocdn.net/relay/local/R640x320/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F55F0530108A742489967993C9265D6AB"/>
                        </MypageJjimUnit>
                        <MypageJjimUnit>
                        <MypageJjimUnitImg src = "https://img1.kakaocdn.net/relay/local/R640x320/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F55F0530108A742489967993C9265D6AB"/>
                        </MypageJjimUnit>
                    </MypageJjimLine>
                    <MypageJjimLine>
                        <MypageJjimUnit src = "https://img1.kakaocdn.net/relay/local/R640x320/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F55F0530108A742489967993C9265D6AB"/>
                        <MypageJjimUnit src = "img/음식5.jpg"/>
                        <MypageJjimUnit src = "img/음식6.jpg"/>
                    </MypageJjimLine>
                </MypageJjimStore>
            </MypageCon>
        </div>
    );
};

export default Mypage;


// ==================================================
//
// import {Link} from 'react-router-dom';
// import MypageHeader from "../../components/MypageComponent/MypageHeader";
// // import {StyledMypage} from "./StyledMypage";

// const Mypage = () =>{
//     return(
//         // <StyledMypage>
//         <div>
//             <MypageHeader/>
//         </div>
//         // </StyledMypage>
//     );
// }

// export default Mypage;
