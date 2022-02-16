import React from "react";
import {
    LogoImg, MypageLink, Title, JoinForm, Form, NAME, NameTitle, NameForm,
    GO, GoTitle, GoForm, ID, IdTitle, IdForm, PW, PwTitle, PwForm,
    PWMore, PwMoreTitle, PwMoreForm, Question, QuesTitle, QuesForm, Q, 
    Answer, AnsTitle, AnsForm, SbForm
} from './StyledJoin';

const Join =()=>{
    return(
        <div>
            <LogoImg src="./Logo/만원의행복1.png"></LogoImg>
            <MypageLink>My Page</MypageLink>
            <Title>JOIN</Title>
            <JoinForm>
                <Form>
                    <NAME>
                        <NameTitle htmlFor="NameF">NAME</NameTitle>
                        <NameForm id="NameF" placeholder="NAME" type={"text"}></NameForm>
                    </NAME>
                    <GO>
                        <GoTitle htmlFor="GoF">Gender, Older</GoTitle>
                        <GoForm id="GoF" placeholder="Gender, Older" type={"text"}></GoForm>
                    </GO>
                    <ID>
                        <IdTitle htmlFor="IdF">ID</IdTitle>
                        <IdForm id="IdF" placeholder="ID" type={"text"}></IdForm>
                    </ID>
                    <PW>
                        <PwTitle htmlFor="PwF">PASSWORD</PwTitle>
                        <PwForm id="PwF" placeholder="PASSWORD" type={"password"}></PwForm>
                    </PW>
                    <PWMore>
                        <PwMoreTitle htmlFor="PwMoreF">CHECKING PASSWORD</PwMoreTitle>
                        <PwMoreForm id="PwMoreF" placeholder="PASSWORD" type={"password"}></PwMoreForm>
                    </PWMore>
                    <Question>
                        <QuesTitle>A question that I ask often</QuesTitle>
                        <QuesForm >
                            <Q>ㄱ</Q>
                            <Q>ㄴ</Q>
                            <Q>ㄷ</Q>
                            <Q>ㄹ</Q>
                            <Q>ㅁ</Q>
                            <Q>ㅂ</Q>
                        </QuesForm>
                    </Question>
                    <Answer>
                        <AnsTitle htmlFor="AnF">ANSWER</AnsTitle>
                        <AnsForm id="AnF" placeholder="ANSWER" type={"text"}></AnsForm>
                    </Answer>
                    <SbForm type={"submit"} value="Join"></SbForm>
                </Form>
            </JoinForm>
        </div>
    );
}

export default Join;