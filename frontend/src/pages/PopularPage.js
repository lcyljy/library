import React from "react";
import BookListContainer from "../container/common/BookListContainer";

import SiteRootNav from "../components/common/SiteRootNav";
function PopularPage() {
  return (
    <>
      <SiteRootNav></SiteRootNav>
      <BookListContainer></BookListContainer>
    </>
  );
}

export default PopularPage;
