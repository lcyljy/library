import React, { useState, useEffect } from "react";
import MainContainer from "../common/MainContainer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import no_image from "../../lib/img/book_img/no-image-MO.jpg";
import BookSlider from "../common/BookSlider";

const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;

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

const BookContainer = styled.div`
  width: 100%;
`;

const BookName = styled.div`
  font-size: 2em;
  padding-top: 1em;
`;

const BookDetail = styled.div`
  font-size: 1.5em;
`;

const KDCList = styled.div``;

// const InfoLibrary = styled.div``;

const BookDescription = styled.div`
  font-size: 1.5em;
`;

function SingleBook(props) {
  const location = useLocation();
  const book = location.state;

  // 도서관 코드 출력
  const [data, setData] = useState({ response: {} });
  // 도서 상세정보 출력
  const [bookInfo, setBookInfo] = useState({ response: {} });
  // 함께 대출한 도서 정보 출력
  const [browsingLoan, setBrowsingLoan] = useState({ response: {} });
  const [coLoanBooks, setCoLoanBooks] = useState([]);

  // 도서관 코드 출력 START
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(
          `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/libSrchByBook?authKey=${API_KEY}&isbn=${book.isbn13}&region=31&dtl_region=31011&format=json`
        );
        res.json().then((data) => setData(data));
      } catch (e) {
        console.log(`${e} error가 발생했습니다.`);
      }
    })();
  }, [book]);

  const libArr = data.response.libs?.map((v) => v.lib.libCode);
  console.log(libArr);
  // // 도서관코드 출력 END

  // console.log(libArr[0]);

  // console.log(libData.response.result);

  // 6. 도서 상세 조회
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(
          `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/srchDtlList?authKey=${API_KEY}&isbn13=${book.isbn13}&format=json`
        );
        res.json().then((data) => setBookInfo(data));
      } catch (e) {
        console.log(`${e} error가 발생했습니다.`);
      }
    })();
  }, [book]);
  const bookInfoDetail = bookInfo.response.detail?.map(
    (v) => v.book.description
  );

  // 7. 도서 키워드 목록
  // 8. 도서별 이용분석
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(
          `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/usageAnalysisList?authKey=${API_KEY}&isbn13=${book.isbn13}&format=json`
        );
        res.json().then((data) => setBrowsingLoan(data));
      } catch (e) {
        console.log(`${e} error가 발생했습니다.`);
      }
    })();
  }, [book]);

  useEffect(() => {
    setCoLoanBooks(browsingLoan.response.coLoanBooks);
  }, [browsingLoan]);
  // 11. 도서관별 도서 소장여부 및 대출 가능여부 조회
  // 13. 도서 소장 도서관 조회
  // 인기도서/추천도서 등 페이지에서 들어오는 경우 해당 책의 정보를 가져오면되지만...
  // 검색해서 들어오는 경우 해당 책의 정보를 가져오려면...
  // 인기도서/추천도서 페이지에서 상세정보 페이지로 이동하는 링크달기
  // 인기도서/추천도서 페이지에서 해당 정보를 전달해서 출력
  // 이후 검색해서 상세정보페이지 가져오는 정보를 확인 해당 정보와 인기도서/추천도서 페이지 교차검증하여 출력
  // 전체도서관 소장 정보
  // - 13. 도서 소장 도서관 조회 (isbn으로 검색)- 지역별 -> 도서관 코드 출력
  // - 위에서 가져온 도서관코드를 바탕으로 11. 도서관별 도서 소장여부 및 대추가능여부 조회(도서관코드, isbn13자리 필요) -> 도서 소장여부, 대출 가능여부
  // 책소개 6. 도서 상세조회 isbn13자리로 검색 -> 책소개(description) 출력
  // 이 자료와 함께 대출한 자료 - 8. 도서별 이용분석 isbn13자리로 검색 -> colLoanBook
  // 태그 클라우드 7.도서 키워드목록 또는 8. 도서별이용분석 - isbn13자리로 검색 -  weight(가중치)

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
      {/* <InfoLibrary>{book.isbn13}</InfoLibrary> */}
      <BookDescription>책소개 : {bookInfoDetail}</BookDescription>
      <BookSlider data={coLoanBooks}></BookSlider>
    </MainContainer>
  );
}

export default SingleBook;
