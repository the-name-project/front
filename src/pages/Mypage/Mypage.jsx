import React from "react";
import {Test, MypageCon, MypageTop, LogoImg, 
    MypageUserInfo, MypagePro1, MypagePro2, 
    MypageProNickname, ChangeBtn, MypageProEtc, 
    ProfileImg, MypageMenu, MypageMenuN, 
    MypageJjimStore, MypageJjimLine, MypageJjimUnit
} from './StyledMypage';

const Mypage=()=>{
    return(
        <div>
            <MypageCon>
{/* ---------------1---------------------------- */}
                <MypageTop>
                    <LogoImg src = "../../LOGO/만원의행복3.png"/>
                </MypageTop>
{/* ---------------2---------------------------- */}
                <MypageUserInfo>
                    <MypagePro1>
                        <ProfileImg src = "../../img/default_profile.png"/>
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