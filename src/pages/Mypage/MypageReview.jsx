import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {Test, MypageCon, MypageTop, LogoImg, 
    MypageUserInfo, MypagePro1, MypagePro2, 
    MypageProNickname, ChangeBtn, MypageProEtc, 
    ProfileImg, MypageMenu, MypageMenuN,
    MenuDesign
} from './StyledMypage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
} from "./StyledMypageReview";

import logo from "./만원의행복3.png";
import defaultProfile from "./defaultProfile.png";
// import MypageReview from './MypageReview';
import axios from "axios";

import StoreImg from "./만원의행복3.png";


const MypageReview=()=>{
    const [posts, setPosts] = useState([]);
    const [posts_2, setPosts_2] = useState([]);
    
      
    useEffect(() =>{
        async function fetchData(){
          axios
                //users 또는 user/1또는 2
                //Bearer 뒤에 Test Token불러오면 될 듯 
                .get(`http://127.0.0.1:8000/user/1`, {headers:{Authorization :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU2MDE3NDAsInN1YiI6IjEifQ.aFNFsKwrBImu2LURGemMZgxPWHPcDPy3RTR74vSup2U`}})
                .then((response)=>{console.log(response.data)});
            
            const response = await axios.get(
                "http://127.0.0.1:8000/user/1"
            );
            setPosts(response.data);

        }
        fetchData();
    },[]);
    

    console.log("---------------------------------------------------");
    console.log("사용자 : "+posts.full_name);
    // console.log(posts_2[0]);

    return(
        <div>
            <MypageCon>
{/* ---------------1---------------------------- */}
                            {/*메인으로 고쳐야함*/}
                <MypageTop><Link to = "/mypageJjim">
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
                    <MypageMenuN><Link to = "/MypageJjim"><MenuDesign>
                      찜</MenuDesign></Link></MypageMenuN>
                    <MypageMenuN>리뷰</MypageMenuN>
                </MypageMenu>
{/* ---------------4---------------------------- */}
<StyledStoreReview>
      <StoreReviewTitle>리뷰({posts_2.length})</StoreReviewTitle>
      <StoreReviewDetail>
          <StoreReviewDetailList>
            <StoreReviewUser>
              <UserAvatar>닉네임</UserAvatar>
            </StoreReviewUser>
            <StoreReviewInfo>
              <StoreReviewTime>시간</StoreReviewTime>
              <StoreReviewContent>
                <span>쓴글</span>
                <span>
                  {posts.recommend ? (
                    <FontAwesomeIcon icon={faThumbsUp} />
                  ) : (
                    <FontAwesomeIcon icon={faThumbsDown} />
                  )}
                </span>
              </StoreReviewContent>
              <StoreReviewImgWrapper>
                <StoreReviewImg url={logo} />
                <StoreReviewEatMenu>먹은 메뉴</StoreReviewEatMenu>
              </StoreReviewImgWrapper>
            </StoreReviewInfo>
          </StoreReviewDetailList>
        
      </StoreReviewDetail>
    </StyledStoreReview>
            </MypageCon>
        </div>
    );
};

export default MypageReview;
