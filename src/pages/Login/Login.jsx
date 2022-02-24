import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "./만원의행복3.png";
import axios from "axios";

// import logo from "./만원의행복3.png";
import {
  LogoImg,
  Title,
  LoginForm,
  Form,
  EMAIL,
  PW,
  EmailTitle,
  EmailForm,
  PwTitle,
  PwForm,
  Surch,
  DoJoin,
  SbForm,
} from "./StyledLogin";

const Login = () => {
  const [user, setUser] = useState({ email: "", hashed_password: "" });
  const [fetchUser, setFetUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      setError(null);
      setFetUser(null);
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:8000/user");
      const ress = res.find(ress => ress.email === user.email);
      setFetUser(ress);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    fetchInfo();
    if (!fetchUser) return null;
    if (fetchUser.email === user.email) {
      if (fetchUser.hashed_password === user.hashed_password) {
        window.localStorage.setItem("user_id", fetchUser.data);
      } else {
        window.alert("비밀번호가 틀렸습니다.");
      }
    } else {
      window.alert("존재하지 않는 계정입니다.");
    }
  };
 

  return (
    <div>
      <Link to="/">
        <LogoImg src={logo}></LogoImg>
      </Link>
      <Title>LOGIN</Title>
      <LoginForm onSubmit={onSubmit} method="GET">
        <Form>
          <EMAIL>
            <EmailTitle htmlFor="EmailF">E-mail</EmailTitle>
            <EmailForm
              id="EmailF"
              placeholder="E-mail"
              type={"email"}
              name="email"
              value={user.email || ""}
              onChange={onChange}
              required
            ></EmailForm>
          </EMAIL>
          <PW>
            <PwTitle htmlFor="PwF">PASSWORD</PwTitle>
            <PwForm
              id="PwF"
              placeholder="PASSWORD"
              type={"password"}
              name="hash_password"
              value={user.hash_password || ""}
              onChange={onChange}
              required
            ></PwForm>
          </PW>
          <SbForm type={"submit"} value="Login"></SbForm>
          <Surch>
            <Link to="/join">
              <DoJoin>회원가입</DoJoin>
            </Link>
          </Surch>
        </Form>
      </LoginForm>
    </div>
  );
};

export default Login;
