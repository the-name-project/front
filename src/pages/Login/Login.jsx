import React from "react";
import {
    LogoImg, MypageLink, Title, LoginForm, Form, ID, PW, IdTitle, IdForm, PwTitle, PwForm,
    Surch, SurchId, SurchPw, DoJoin, SbForm
} from './StyledLogin';

const Login =()=>{
    return(
        <div>
            <LogoImg src="./Logo/만원의행복1.png"></LogoImg>
            <MypageLink>My Page</MypageLink>
            <Title>LOGIN</Title>
            <LoginForm>
                <Form>
                    <ID>
                        <IdTitle htmlFor="IdF">ID</IdTitle>
                        <IdForm id="IdF" placeholder="ID" type={"text"}></IdForm>
                    </ID>
                    <PW>
                        <PwTitle htmlFor="PwF">PASSWORD</PwTitle>
                        <PwForm id="PwF" placeholder="PASSWORD" type={"password"}></PwForm>
                    </PW>
                    <SbForm type={"submit"} value="Login"></SbForm>
                    <Surch>
                        <SurchId>아이디 찾기</SurchId>
                        <SurchPw>비밀번호 찾기</SurchPw>
                        <DoJoin>회원가입</DoJoin>
                    </Surch>
                </Form>
            </LoginForm>
        </div>
    );
};

export default Login;