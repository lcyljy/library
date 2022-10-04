import React from "react";

const Auth = ({ isLogin }) => {
  return <>{isLogin ? "000님 대출:0 예약:0 상태: 정상 로그아웃 " : "로그인"}</>;
};

export default Auth;
