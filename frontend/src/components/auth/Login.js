import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import palette from "../../lib/styles/palette";
import { useLogin } from "../../components/auth/hooks/useLogin";

const PopHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;

  flex-direction: column;
`;
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthPage = styled.form`
  width: 60%;
  max-width: 350px;
  display: block;
  input {
    height: 3em;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    border: 2px solid rgba(0, 0, 0, 0.4);
  }
  .row {
    display: flex;
    margin: 0.5em;
  }
  .icon {
    font-size: 2em;
    padding: 5px 20px 0 10px;
  }
`;

const LoginButton = styled(Button)`
  position: relative;
  float: right;
  margin: 5px 0;
  margin-left: 0.5em;
  padding: 6px 12px;
  border-radius: 10px;
  color: #fff;
  background-color: ${palette.orange[5]};
  /* border: 1px solid teal; */
  font-weight: bold;
`;

const JoinBtn = styled(Button)`
  text-align: center;

  width: 100px;
  padding: 3px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${palette.orange[5]};
`;
const FindBtn = styled(Button)`
  text-align: center;
  width: 100px;
  margin-left: 0.5em;
  padding: 3px;
  border-radius: 10px;
  color: #fff;
  background-color: ${palette.orange[5]};
`;

function Login() {
  // useState를 사용해 값을 관리합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  // 폼의 입력요소에 변화가 생기면 트리거 됩니다.
  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  // 폼이 제출되면 트리거 됩니다.
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <PopHeader>
      <AuthContainer>
        <AuthPage onSubmit={handleSubmit}>
          <div className='row'>
            <FontAwesomeIcon icon={faUser} className='icon' />
            <input
              type='email'
              value={email}
              onChange={handleData}
              placeholder='도서관 회원 아이디'
              required
            ></input>
          </div>
          <div className='row'>
            <FontAwesomeIcon icon={faLock} className='icon' />
            <input
              type='password'
              id='myPassWord'
              required
              onChange={handleData}
              placeholder='도서관 회원 비밀번호'
              value={password}
            />
          </div>
          {!isPending && <LoginButton type='submit'>로그인</LoginButton>}
          {isPending && <strong>로그인 진행중입니다...</strong>}
          {error && <strong>{error}</strong>}
        </AuthPage>
      </AuthContainer>
      <AuthContainer>
        <JoinBtn to='/auth'>회원가입</JoinBtn> <FindBtn> ID/PW 찾기 </FindBtn>
      </AuthContainer>
    </PopHeader>
  );
}

export default Login;
