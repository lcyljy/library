import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";

function LocalSearchPage() {
  const title = "지역도서관 통합검색";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
    </>
  );
}

export default LocalSearchPage;
