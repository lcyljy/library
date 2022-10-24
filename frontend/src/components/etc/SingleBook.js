import React, { useEffect } from "react";
import MainContainer from "../common/MainContainer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import no_image from "../../lib/img/book_img/no-image-MO.jpg";

const DetailContainer = styled.div`
  padding: 20px;
  display: flex;
`;

const BookImage = styled.div.attrs({ type: "Image" })`
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30%;
  height: 180px;
`;

const BookContainer = styled.div``;

const BookName = styled.div`
  font-size: 2em;
  padding-top: 1em;
`;

const BookDetail = styled.div`
  font-size: 1.5em;
`;

const KDCList = styled.div``;

function SingleBook(props) {
  const location = useLocation();
  console.log(location);
  console.log(location.state.author);
  console.log(props.id);
  const book = location.state;
  // 6. 도서 상세 조회
  // 7. 도서 키워드 목록
  // 8. 도서별 이용분석
  // 11. 도서관별 도서 소장여부 및 대출 가능여부 조회
  // 13. 도서 소장 도서관 조회
  // 인기도서/추천도서 등 페이지에서 들어오는 경우 해당 책의 정보를 가져오면되지만...
  // 검색해서 들어오는 경우 해당 책의 정보를 가져오려면...
  // 인기도서/추천도서 페이지에서 상세정보 페이지로 이동하는 링크달기
  // 인기도서/추천도서 페이지에서 해당 정보를 전달해서 출력
  // 이후 검색해서 상세정보페이지 가져오는 정보를 확인 해당 정보와 인기도서/추천도서 페이지 교차검증하여 출력

  return (
    <MainContainer>
      <DetailContainer>
        <BookImage
          style={{
            backgroundImage: `url(${
              book.bookImageURL ? book.bookImageURL : no_image
            })`,
          }}
        ></BookImage>
        <BookContainer>
          <BookName>{book.bookname}</BookName>
          <BookDetail>
            {`${book.author} | ${book.publisher} | ${book.publication_year}`}
          </BookDetail>
          <KDCList>한국십진분류 : {book.class_nm}</KDCList>
        </BookContainer>
      </DetailContainer>
    </MainContainer>
  );
}

export default SingleBook;
