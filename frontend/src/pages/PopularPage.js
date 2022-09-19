import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import BookListContainer from "../container/common/BookListContainer";
function PopularPage() {
  const title = "인기도서";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <BookListContainer></BookListContainer>
    </>
  );
}

export default PopularPage;
