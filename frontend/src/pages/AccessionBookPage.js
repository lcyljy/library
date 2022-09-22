import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import BookListContainer from "../container/common/BookListContainer";

function AccessionBookPage() {
  const title = "신착도서";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <BookListContainer title={title}></BookListContainer>
    </>
  );
}

export default AccessionBookPage;
