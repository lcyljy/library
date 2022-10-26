import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Pagination from "../posts/Pagination";
import BookFillter from "../fillter/BookFillter";
import Loader from "../common/Loader";
import { LibraryList } from "../../lib/documents/LibraryList";
import { KDC } from "../../lib/documents/KDC";
import no_image from "../../lib/img/book_img/no-image-MO.jpg";
// import XMLParser from "react-xml-parser";
import DateFilter, {
  month,
  year,
  day,
  checkMonth,
  checkDay,
  startDt,
  endDt,
} from "../fillter/DateFilter";
import { Link, useLocation } from "react-router-dom";

const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;

const DisplayBooks = styled.ul`
  padding: 2rem 0;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background: ${palette.gray[2]};
  li {
    display: grid;
    list-style: none;
    text-decoration: none;
    padding: 4px;
    justify-content: center;
  }
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.3;
    -webkit-line-clamp: 1;
  }
`;

/* <ul key={DB.no}>
<li className='addition_symbol'>
  ISBN부가기호: {DB.addition_symbol}
</li>
<li className='authors'>저자명: {DB.authors}</li>
<li className='bookImageURL'>책표지 URL: {DB.bookImageURL}</li>
<li className='bookname'>도서명: {DB.bookname}</li>
<li className='class_nm'>주제분류명: {DB.class_nm}</li>
<li className='class_no'>주제분류: {DB.class_no}</li>
<li className='isbn13'>13자리 ISBN: {DB.isbn13}</li>
<li className='loan_count'>대출건수: {DB.loan_count}</li>
<li className='no'>순번: {DB.no}</li>
<li className='publication_year'>
  출판년도: {DB.publication_year}
</li>
<li className='publisher'>출판사: {DB.publisher}</li>
<li className='ranking'>순위: {DB.ranking}</li>
<li className='vol'>권: {DB.vol}</li>
</ul> 
</>*/

const BookImage = styled.div.attrs({ type: "Image" })`
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
`;

function BookRender(props) {
  const KDCList = KDC.contents.categoryList;
  const KDCListArr = KDCList?.map((v) => v.keyword);
  DateFilter();
  const App = () => {
    // 데이터 가져오기
    const [data, setData] = useState({ response: {} });
    const [loading, setLoading] = useState(false);

    // pagination 코드 start
    // const [limit, setLimit] = useState(20);
    const limit = 20;
    const [page, setPage] = useState(1);
    const offSet = (page - 1) * limit;
    // pagination 코드 end

    // filter 코드 start
    /**library code*/
    const [libCode, setLibcode] = useState(0);
    // Library FullName
    const [forFindLoc, setForFindLoc] = useState("수원시립영통도서관");
    // Library Name
    const [selectedLoc, setSelectedLoc] = useState("전체도서관");
    // 찾고자하는 년도
    const [selectedYear, setSelectedYear] = useState("2022년");
    const [selectedYearIndex, setSelectedYearIndex] = useState(22);
    // 찾고자하는 월
    const [selectedMon, setSelectedMon] = useState("9월");
    const [selectedMonIndex, setSelectedMonIndex] = useState(9);
    // 나중에 date함수이용해서 현재월로 변경하기

    // 분류별 도서
    const [selectedGenre, setSelectedGenre] = useState("일반도서");
    // 분류별 도서 index
    const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
    // KDC 분류별 도서
    const [KDC, setKDC] = useState("전체");
    // filter 코드 end

    // page 유무
    const [pageTitle, setPageTitle] = useState("인기도서");

    // 연동
    useEffect(() => {
      let tempYear = selectedYear;
      setSelectedYearIndex(tempYear.slice(2, 4));
    }, [selectedYear]);

    useEffect(() => {
      setSelectedMonIndex(selectedMon.charAt(0));
    }, [selectedMon]);

    // selectedLoc이 바뀌었을 때 forFindLoc에 해당 값 변경하기
    useEffect(() => {
      if (selectedLoc !== "전체도서관") {
        Object.keys(LibraryList).includes(selectedLoc)
          ? setForFindLoc(selectedLoc)
          : setForFindLoc(`수원시립${selectedLoc}`);
        // 전체도서관이 아닐때 실행되는데, selectedLoc의 값이 LibraryList에 없으면 수원시립을 앞에 붙여서 forFindLoc에 저장.
      } else setForFindLoc("전체도서관");
    }, [selectedLoc]);

    // forFindLoc이 변경되엇을 때 해당 도서관이름에 맞는 도서관 코드 변경
    useEffect(() => {
      forFindLoc === "전체도서관"
        ? setLibcode(0)
        : setLibcode(LibraryList[forFindLoc]);
    }, [forFindLoc]);

    // 성인코드
    const adultCode = `&addCode=0;1;2;4;9`;
    // 어린이코드
    const childCode = `&addCode=4;5;6;7`;

    // BookFilter로부터가져온 kdclist의 배열값이 -1이 아닐때만 동작.
    const KDCIndexCheck =
      KDCListArr.indexOf(KDC) !== -1
        ? `${adultCode}&kdc=${KDCListArr.indexOf(KDC)}`
        : "";

    const GenreCheck =
      selectedGenreIndex !== 2
        ? selectedGenreIndex === 0
          ? `${adultCode}`
          : `${childCode}`
        : `${KDCIndexCheck}`;

    // KDCIndex에 따라 API 호출 코드 변경

    // 결과건수가 100이하이면, 마이너스 변수 증가.
    // const [count, setCount] = useState(1);
    // if (data.response.resultNum < 100) setCount(count + 1);
    // 데이터를 불러와서 그 값을 확인한 다음 해당 값이 늘면 다시 가져와야되므로 re-rendering이 너무 많이 일어나서 불가능.
    // 마찬가지로... class_no를 이용한다거나. additional_symbol에 따라 필터링하는 것도 불가능...

    let location = useLocation();
    useEffect(() => {
      setPageTitle(props.title);
    }, [location.pathname]);

    const popularAPI = useMemo(() => {
      return libCode === 0
        ? `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/loanItemSrchByLib?authKey=${API_KEY}&region=31&startDt=20${selectedYearIndex}-0${
            selectedMonIndex - 2
          }-01&endDt=20${selectedYearIndex}-0${selectedMonIndex}-30${GenreCheck}&format=json
`
        : `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/loanItemSrchByLib?authKey=${API_KEY}&libCode=${libCode}&startDt=20${selectedYearIndex}-0${
            selectedMonIndex - 2
          }-01&endDt=20${selectedYearIndex}-0${selectedMonIndex}-30${GenreCheck}&format=json
  `;
    }, [selectedYearIndex, selectedMonIndex, GenreCheck, libCode]);
    // 전체도서관을 찾을방법이 없어 임시로 영통도서관의 장서데이터를 불러옴.
    const accessionAPI = useMemo(() => {
      return libCode === 0
        ? `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/itemSrch?authKey=${API_KEY}&libCode=141061&type=ALL&startDt=${year}-0${
            month - 1
          }-${checkDay}&endDt=${year}-0${month}-${checkDay}&format=json&pageNo=1&pageSize=500`
        : `https://library-simple-proxy.herokuapp.com/http://data4library.kr/api/itemSrch?authKey=${API_KEY}&libCode=${libCode}&type=ALL&startDt=${year}-0${
            month - 1
          }-${checkDay}&endDt=${year}-0${month}-${checkDay}&format=json&pageNo=1&pageSize=500`;
    }, [libCode]);
    // const libAPI = "";

    // console.log(data.response.resultNum); // 페이지 크기가 없을 경우 페이지당 100개
    // console.log(data.response.docs?.map((v) => v.doc.addition_symbol));
    // console.log(data.response.docs?.map((v) => v.doc.class_no.charAt(0)));

    useEffect(() => {
      (async () => {
        setLoading(true);
        try {
          let res =
            pageTitle === "신착도서"
              ? await fetch(accessionAPI)
              : await fetch(popularAPI);
          res
            .json()
            .then((data) => setData(data))
            .then(setLoading(false));
        } catch (e) {
          console.log(`${e} error가 발생했습니다.`);
          setLoading(false);
        }
      })();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popularAPI, accessionAPI]);

    if (loading) {
      // console.log("isLoading");
      return <Loader></Loader>;
    }
    return (
      <>
        <BookFillter
          pageTitle={pageTitle}
          KDC={KDC}
          setKDC={setKDC}
          selectedGenreIndex={selectedGenreIndex}
          setSelectedGenreIndex={setSelectedGenreIndex}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedLoc={selectedLoc}
          setSelectedLoc={setSelectedLoc}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMon={selectedMon}
          setSelectedMon={setSelectedMon}
        />
        <DisplayBooks>
          {data.response.docs
            ?.map((v) => v.doc)
            .filter((v) => {
              if (pageTitle !== "인기도서") {
                if (selectedGenreIndex === 0) {
                  return (
                    Number(v.addition_symbol.charAt(0)) ===
                    (0 || 1 || 2 || 4 || 9)
                  );
                } else if (selectedGenreIndex === 1) {
                  return (
                    Number(v.addition_symbol.charAt(0)) === (4 || 5 || 6 || 7)
                  );
                } else {
                  if (KDC !== "전체") {
                    return (
                      KDCListArr.indexOf(KDC) === Number(v.class_no.charAt(0))
                    );
                  } else return v;
                }
              } else return v;
            })
            .map((DB, i) => {
              return (
                <Link
                  to={`/singleBook/${DB.isbn13}`}
                  state={{
                    author: DB.authors,
                    bookImageURL: DB.bookImageURL,
                    bookname: DB.bookname,
                    class_nm: DB.class_nm,
                    class_no: DB.class_no,
                    isbn13: DB.isbn13,
                    publisher: DB.publisher,
                    vol: DB.vol,
                    publication_year: DB.publication_year,
                  }}
                  key={`${DB.isbn13} ${DB.vol} ${i + 1}`}
                >
                  <li>
                    <h2>{i + 1}</h2>
                    <BookImage
                      style={{
                        backgroundImage: `url(${
                          DB.bookImageURL ? DB.bookImageURL : no_image
                        })`,
                      }}
                    ></BookImage>

                    <p>
                      {DB.bookname} {DB.vol ? `= ${DB.vol}` : null}
                    </p>
                    <p>{DB.authors}</p>
                  </li>
                </Link>
              );
            })
            .slice(offSet, offSet + limit)}
        </DisplayBooks>

        <Pagination
          total={
            data.response.docs
              ?.map((v) => v.doc)
              .filter((v) => {
                if (pageTitle !== "인기도서") {
                  if (selectedGenreIndex === 0) {
                    return (
                      Number(v.addition_symbol.charAt(0)) ===
                      (0 || 1 || 2 || 4 || 9)
                    );
                  } else if (selectedGenreIndex === 1) {
                    return (
                      Number(v.addition_symbol.charAt(0)) === (4 || 5 || 6 || 7)
                    );
                  } else {
                    if (KDC !== "전체") {
                      return (
                        KDCListArr.indexOf(KDC) === Number(v.class_no.charAt(0))
                      );
                    } else return v;
                  }
                } else return v;
              }).length
          }
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </>
    );
  };
  return <App></App>;
}

export default BookRender;
