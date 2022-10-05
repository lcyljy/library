import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
// import Auth from "../components/auth/Auth";
// import Login from "../components/auth/Login";
// import Modal from "../components/common/Modal";
import SignUp from "../components/auth/SignUp";

function AuthPage() {
  const title = "회원가입";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      {/* <Login></Login> */}
      {/* <Modal></Modal> */}
      <SignUp></SignUp>
    </>
  );
}

export default AuthPage;
