import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../common/MainContainer";
import Button from "../common/Button";

const AuthContainer = styled.div`
  width: 800px;
  min-height: 700px;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50px;
`;

const AuthPage = styled.form`
  width: 60%;
  margin: 60px auto;
  padding: 20px;
  background-color: aliceblue;
  legend {
    font-size: 2.5em;
    padding: 10px;
  }
  label {
    display: block;
    font-size: 2em;
    margin: 30px 0;
  }
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    border: none;
    border-bottom: 1px solid black;
  }
`;

const LoginButton = styled(Button)`
  margin-top: 40px;
  float: right;
  padding: 6px 12px;
  border-radius: 10px;
  color: #fff;
  background-color: teal;
  /* border: 1px solid teal; */
  font-weight: bold;
`;

const Auth = () => {
  // useState를 사용해 값을 관리합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 폼의 입력요소에 변화가 생기면 트리거 됩니다.
  const onChange = (event) => {
    console.log(event.target.type);
    const inputData = {
      type: event.target.type,
      value: event.target.value,
    };

    // 인풋 타입에 따라 state 값을 변경합니다.
    if (inputData.type === "email") {
      setEmail(inputData.value);
    } else if (inputData.type === "password") {
      setPassword(inputData.value);
    }
  };

  // 폼이 제출되면 트리거 됩니다.
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer>
      <AuthContainer>
        <AuthPage onSubmit={onSubmit}>
          <div>
            <legend>로그인</legend>
            <label>이메일 : </label>
            <input
              type='email'
              value={email}
              onChange={onChange}
              required
            ></input>
          </div>
          <div>
            <label>비밀번호 : </label>
            <input
              type='password'
              value={password}
              onChange={onChange}
              required
            ></input>
          </div>
          <LoginButton type='submit'>로그인</LoginButton>
        </AuthPage>
      </AuthContainer>
    </MainContainer>
  );
};

export default Auth;
