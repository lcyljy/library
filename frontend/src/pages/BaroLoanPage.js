import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import BaroLoan from "../components/etc/BaroLoan";
function BaroLoanPage() {
  const title = "희망도서신청";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <BaroLoan></BaroLoan>
    </>
  );
}

export default BaroLoanPage;
