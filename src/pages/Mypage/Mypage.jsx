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
import MypageData from './MypageData/MypageData.json';
import logo from "./만원의행복3.png";
import defaultProfile from "./defaultProfile.png";
// import storeData from '../../data/store.json';
import MypageReview from './MypageReview';
import axios from "axios";

import StoreImg from "./만원의행복3.png";


const Mypage=()=>{
    const [posts, setPosts] = useState([]);
    // const [posts_2, setPosts_2] = useState([]);

      
    useEffect(() =>{
        async function fetchData(){
            console.log("1");
            axios
                //users 또는 user/1또는 2
                //Bearer 뒤에 Test Token불러오면 될 듯 
                .get(`http://127.0.0.1:8000/user/1`, {headers:{Authorization :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU3MzY1MjIsInN1YiI6IjEifQ.J5Hx60MoV3BWLI2d7bO5lNHt8-VWwKNIjzOtNgB0M7Y`}})
                .then((response)=>{setPosts(response.data)});
            // setLoading(true);
            // const response = await axios.get(
            //     "http://127.0.0.1:8000/store?skip=0&limit=6"
            // );
            // setPosts_2(response.data);

        }
        fetchData();
    },[]);


    console.log("---------------------------------------------------");
    console.log("사용자 : "+posts.full_name);

    // setPosts_2(posts_2,MypageData['data']);
    console.log(MypageData['data'][1]);


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
                    <MypageMenuN><Link to = "/mypagereview"><MenuDesign>
                      리뷰</MenuDesign></Link></MypageMenuN>
                </MypageMenu>
{/* ---------------4---------------------------- */}
                <MypageJjimStore>
                    <MypageJjimLine>
                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][0].name}
                                <br/><br/>
                                {MypageData['data'][0].tags}
                            </MypageJjimInfo>
                            <MypageJjimUnitImg src ={MypageData['data'][0].image}
                                height ="100%" width = "100%"/>
                        </MypageJjimUnit>


                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][1].name}
                                    <br/><br/>
                                    {MypageData['data'][1].tags}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src ={MypageData['data'][1].image}
                                    height ="100%" width = "100%"/>
                        </MypageJjimUnit>


                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][2].name}
                                    <br/><br/>
                                    {MypageData['data'][2].tags}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src ={MypageData['data'][2].image}
                                    height ="100%" width = "100%"/>
                        </MypageJjimUnit>


                    </MypageJjimLine>


                    <MypageJjimLine>
                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][3].name}
                                    <br/><br/>
                                    {MypageData['data'][3].tags}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src ={MypageData['data'][3].image}
                                    height ="100%" width = "100%"/>
                        </MypageJjimUnit>

                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][4].name}
                                    <br/><br/>
                                    {MypageData['data'][4].tags}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src ={MypageData['data'][4].image}
                                    height ="100%" width = "100%"/>
                        </MypageJjimUnit>

                        <MypageJjimUnit>
                            <MypageJjimInfo>
                                {MypageData['data'][5].name}
                                    <br/><br/>
                                    {MypageData['data'][5].tags}
                                </MypageJjimInfo>
                                <MypageJjimUnitImg src ={MypageData['data'][5].image}
                                    height ="100%" width = "100%"/>
                        </MypageJjimUnit>
                    </MypageJjimLine>
                </MypageJjimStore>
            </MypageCon>
        </div>
    );
};

export default Mypage;

