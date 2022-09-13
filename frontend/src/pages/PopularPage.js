import React from "react";
import BookListContainer from "../container/common/BookListContainer";
import HeaderNavContainer from "../container/common/HeaderNavContainer";
import SearchMain from "../components/common/SearchMain";
function PopularPage() {
  return (
    <>
      <HeaderNavContainer></HeaderNavContainer>
      <SearchMain></SearchMain>
      <BookListContainer></BookListContainer>
    </>
  );
}

export default PopularPage;
