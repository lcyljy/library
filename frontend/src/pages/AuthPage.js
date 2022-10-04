import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import Auth from "../components/auth/Auth";

function AuthPage() {
  const title = "회원가입";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <Auth></Auth>
    </>
  );
}

export default AuthPage;
