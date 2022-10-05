import React from "react";
import styled from "styled-components";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";

const LoginClass = styled.a`
  span {
    cursor: pointer;
  }
`;

const Auth = ({ isLogin }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <LoginClass>
      {isLogin ? (
        <>
          <span>{user.displayName} 님</span>
          <span onClick={logout}>로그아웃</span>
        </>
      ) : (
        <span>로그인</span>
      )}
    </LoginClass>
  );
};

export default Auth;
