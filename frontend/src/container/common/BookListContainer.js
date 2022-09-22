import React from "react";
import BookRender from "../../components/api/BookRender";
import MainContainer from "../../components/common/MainContainer";

function BookListContainer(props) {
  return (
    <MainContainer>
      <BookRender title={props.title}></BookRender>
    </MainContainer>
  );
}

export default BookListContainer;
