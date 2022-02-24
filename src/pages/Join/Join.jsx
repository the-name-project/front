import React, { useEffect, useState } from "react";
import axios from 'axios';
import logo from "./만원의행복3.png";
import {
    LogoImg, Title, JoinForm, Form, NAME, NameTitle, NameForm,
    NNAME, NNameTitle, NNameForm, Email, EmailTitle, EmailForm,
    PW, PwTitle, PwForm, PWMore, PwMoreTitle, PwMoreForm, SbForm
} from './StyledJoin';
 
const Join =()=>{
    const [userInfo, setInfo] = useState({
        full_name:'',
        nickname:'',
        gender:'',
        id:'',
        email:'',
        hash_password:'',
        more_password:''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postInfo = async()=>{
        try{
            setError(null);
            setLoading(true);
            const get = await axios.get('http://127.0.0.1:8000');
            const gets = get.find((gets)=> gets.id===userInfo.id);
            if(gets.email===userInfo.email){
                window.alert("이미 존재하는 메일 입니다.");
            }
            else{
                const res = await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/users', 
                    data: {
                        full_name: userInfo.full_name,
                        nickname: userInfo.nick_name,
                        gender: userInfo.gender,
                        id: userInfo.id,
                        email: userInfo.email,
                        hash_password:userInfo.hash_password
                        }
                });
                window.alert("회원가입이 완료되었습니다.");
                window.location.href= '../Login/Login.jsx';
            }
        }catch(e){
            setError(e);
        }
        setLoading(false);
    };
    const onChange =(event)=>{
        setInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    };
    const onSubmit = async(event)=>{
        event.preventDefault();
        if(userInfo){
            if(userInfo.hash_password === userInfo.more_password){
                await postInfo(userInfo);
            }
            else{
                await window.alert("비밀번호가 다릅니다.")
            }
        }
    };

    const gotoMain =()=>{
        window.location.href='메인';
    }
    return(
        <div>
            <LogoImg src={logo} onClick={gotoMain}></LogoImg>
            <Title>JOIN</Title>
            <JoinForm onSubmit={onSubmit} method="POST">
                <Form>
                    <NAME>
                        <NameTitle htmlFor="NameF">NAME</NameTitle>
                        <NameForm 
                            id="NameF" placeholder="NAME" type={"text"}
                            name="full_name"
                            onChange={onChange}
                        ></NameForm>
                    </NAME>
                    <NNAME>
                        <NNameTitle htmlFor="NNameF">NICKNAME</NNameTitle>
                        <NNameForm 
                            id="NNameF" placeholder="NICKNAME" type={"text"}
                            name="nick_name"
                            onChange={onChange}
                        ></NNameForm>
                    </NNAME>
                    <Email>
                        <EmailTitle htmlFor="EmailF">E-mail</EmailTitle>
                        <EmailForm 
                            id="EamilF" placeholder="E-mail" type={"Email"}
                            name="email"
                            onChange={onChange}
                        ></EmailForm>
                    </Email>
                    <PW>
                        <PwTitle htmlFor="PwF">PASSWORD</PwTitle>
                        <PwForm 
                            id="PwF" placeholder="PASSWORD" type={"password"}
                            name="hash_password"
                            onChange={onChange}
                        ></PwForm>
                    </PW>
                    <PWMore>
                        <PwMoreTitle htmlFor="PwMoreF">CHECKING PASSWORD</PwMoreTitle>
                        <PwMoreForm 
                            id="PwMoreF" placeholder="PASSWORD" type={"password"}
                            name="more_password"
                            onChange={onChange}
                        ></PwMoreForm>
                    </PWMore>
                    <SbForm type={"submit"} value="Join"></SbForm>
                </Form>
            </JoinForm>
        </div>
    );
}

export default Join;