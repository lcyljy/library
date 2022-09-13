import React from "react";
import HeaderNavContainer from "../container/common/HeaderNavContainer";
import SearchMain from "../components/common/SearchMain";
import BookListContainer from "../container/common/BookListContainer";
function HomePage() {
  return (
    <>
      <HeaderNavContainer></HeaderNavContainer>
      <SearchMain></SearchMain>
      <BookListContainer></BookListContainer>
    </>
  );
}
export default HomePage;
