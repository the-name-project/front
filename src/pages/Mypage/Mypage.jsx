import React from "react";
import {Test, MypageCon, MypageTop, LogoImg, 
    MypageUserInfo, MypagePro1, MypagePro2, 
    MypageProNickname, ChangeBtn, MypageProEtc, 
    ProfileImg, MypageMenu, MypageMenuN, 
    MypageJjimStore, MypageJjimLine, MypageJjimUnit
} from './StyledMypage';
<<<<<<< HEAD
import logo from "./만원의행복3.png";
import defaultProfile from "./defaultProfile.png";
=======
>>>>>>> 89947117bc2f6de293f9c09c6a14b9d6d9adb869

const Mypage=()=>{
    return(
        <div>
<<<<<<< HEAD
            <MypageCon>s
{/* ---------------1---------------------------- */}
                <MypageTop>
                    <LogoImg src = {logo} alt = "로고_사진"/>
=======
            <MypageCon>
{/* ---------------1---------------------------- */}
                <MypageTop>
                    <LogoImg src = "../../LOGO/만원의행복3.png"/>
>>>>>>> 89947117bc2f6de293f9c09c6a14b9d6d9adb869
                </MypageTop>
{/* ---------------2---------------------------- */}
                <MypageUserInfo>
                    <MypagePro1>
<<<<<<< HEAD
                        <ProfileImg src = {defaultProfile}
                        alt = "기본프로필사진"
                        width = "100%" height = "98%"/>
=======
                        <ProfileImg src = "../../img/default_profile.png"/>
>>>>>>> 89947117bc2f6de293f9c09c6a14b9d6d9adb869
                    </MypagePro1>
                    <MypagePro2>
                        <MypageProNickname>
                            상큼한 양말
                            <ChangeBtn>정보수정</ChangeBtn>
                        </MypageProNickname>
                        <MypageProEtc>
                            임미송 / 여 / 0000@naver.com
                        </MypageProEtc>
                    </MypagePro2>
                </MypageUserInfo>
{/* ---------------3---------------------------- */}
                <MypageMenu>
                    <MypageMenuN>찜</MypageMenuN>
                    <MypageMenuN>리뷰</MypageMenuN>
                    <MypageMenuN>투표</MypageMenuN>
                </MypageMenu>
{/* ---------------4---------------------------- */}
                <MypageJjimStore>
                    <MypageJjimLine>
                        <MypageJjimUnit src = "..\img\옥반1.jpg"/>
                        <MypageJjimUnit src = "../img/음식2.jpg"/>
                        <MypageJjimUnit src = "img/음식3.jpg"/>
                    </MypageJjimLine>
                    <MypageJjimLine>
                        <MypageJjimUnit src = "img/음식4.jpg"/>
                        <MypageJjimUnit src = "img/음식5.jpg"/>
                        <MypageJjimUnit src = "img/음식6.jpg"/>
                    </MypageJjimLine>
                </MypageJjimStore>


            </MypageCon>



        </div>
    );
};

export default Mypage;