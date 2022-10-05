import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../common/MainContainer";
import { useSignup } from "./hooks/useSignUp";

const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 450px;
  min-height: 80vh;
  background-color: aliceblue;
`;

const ContainerBox = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const SignUpPage = styled.form`
  width: 80%;
  max-width: 350px;
  label {
    float: left;
    height: 2em;
    font-size: 1em;
    font-weight: 700;
    padding: 8px 6px;
  }
  input {
    float: right;
    height: 2em;
    width: 70%;
    box-sizing: border-box;
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    border: 2px solid rgba(0, 0, 0, 0.4);
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayName(event.target.value);
    }
  };
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <MainContainer>
      <SignUpContainer>
        <ContainerBox>
          <SignUpPage onSubmit={handleSubmit}>
            <div>
              <label htmlFor='myEmail'>email : </label>
              <input
                type='email'
                id='myEmail'
                required
                onChange={handleData}
                value={email}
              />
            </div>
            <div>
              <label htmlFor='myPassWord'>password : </label>
              <input
                type='password'
                id='myPassWord'
                required
                onChange={handleData}
                value={password}
              />
            </div>
            <div>
              <label htmlFor='myNickName'>닉네임 : </label>
              <input
                type='text'
                id='myNickName'
                required
                onChange={handleData}
                value={displayName}
              />
            </div>

            <button type='submit'>회원가입하기</button>
          </SignUpPage>
        </ContainerBox>
      </SignUpContainer>
    </MainContainer>
  );
};

export default SignUp;
