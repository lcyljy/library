import React from "react";
import SearchMain from "../components/common/SearchMain";
import BookListContainer from "../container/common/BookListContainer";

function HomePage() {
  return (
    <>
      <SearchMain></SearchMain>
      <BookListContainer></BookListContainer>
    </>
  );
}
export default HomePage;
