import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import BookListContainer from "../container/common/BookListContainer";
function LibrarianBookPage() {
  const title = "추천도서";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <BookListContainer></BookListContainer>
    </>
  );
}

export default LibrarianBookPage;
