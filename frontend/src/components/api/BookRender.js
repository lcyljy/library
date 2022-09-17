import { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Pagination from "../posts/Pagination";
import BookFillter from "../fillter/BookFillter";
import Loader from "../common/Loader";
import { LibraryList } from "../../lib/documents/LibraryList";
// import XMLParser from "react-xml-parser";

const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;

const DisplayBooks = styled.ul`
  border: 1px solid green;
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

function BookRender() {
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
    //library code
    const [libCode, setLibcode] = useState(0);
    // Library FullName
    const [forFindLoc, setForFindLoc] = useState("수원시립영통도서관");
    // Library Name
    const [selectedLoc, setSelectedLoc] = useState("전체도서관");
    // 찾고자하는 년도
    const [selectedYear, setSelectedYear] = useState(22);
    // 찾고자하는 월
    const [selectedMon, setSelectedMon] = useState(9);
    // 나중에 date함수이용해서 현재월로 변경하기
    // filter 코드 end

    // 연동
    // selectedLoc이 바뀌었을 때 forFindLoc에 해당 값 변경하기
    useEffect(() => {
      const check = () => {
        if (selectedLoc !== "전체도서관") {
          Object.keys(LibraryList).includes(selectedLoc)
            ? setForFindLoc(selectedLoc)
            : setForFindLoc(`수원시립${selectedLoc}`);
          // 전체도서관이 아닐때 실행되는데, selectedLoc의 값이 LibraryList에 없으면 수원시립을 앞에 붙여서 forFindLoc에 저장.
        }
      };
      check();
    }, [selectedLoc]);

    // forFindLoc이 변경되엇을 때 해당 도서관이름에 맞는 도서관 코드 변경
    useEffect(() => {
      setLibcode(LibraryList[forFindLoc]);
    }, [forFindLoc]);

    // 전체도서관을 제외하고. selectedLoc에 들어간 값들이 LibraryList에 있다면 해당 값의 value를 찾아서 입력하면?

    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            selectedLoc === "전체도서관"
              ? `http://data4library.kr/api/loanItemSrchByLib?authKey=${API_KEY}&region=31&dtl_region =31010&startDt=20${selectedYear}-0${
                  selectedMon - 2
                }-01&endDt=20${selectedYear}-0${selectedMon}-30&format=json
          `
              : `http://data4library.kr/api/loanItemSrchByLib?authKey=${API_KEY}&libCode=${libCode}&startDt=20${selectedYear}-0${
                  selectedMon - 2
                }-01&endDt=20${selectedYear}-0${selectedMon}-30&format=json
            `
          );
          // region:

          res
            .json()
            .then((data) => setData(data))
            .then(setLoading(false));
        } catch (e) {
          console.log(`${e} error가 발생했습니다.`);
          setLoading(false);
        }
      };
      getData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLoc, selectedYear, selectedMon]);

    if (loading) {
      // console.log("isLoading");
      return <Loader></Loader>;
    }

    return (
      <>
        <BookFillter
          selectedLoc={selectedLoc}
          setSelectedLoc={setSelectedLoc}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMon={selectedMon}
          setSelectedMon={setSelectedMon}
        />
        <DisplayBooks>
          {data.response.docs?.slice(offSet, offSet + limit).map((v) => {
            const DB = v.doc;
            return (
              <li key={`${DB.no}`}>
                <h2>{DB.no}</h2>
                <BookImage
                  style={{ backgroundImage: `url(${DB.bookImageURL})` }}
                ></BookImage>
                <div>
                  <p>
                    {DB.bookname} {DB.vol ? `= ${DB.vol}` : null}
                  </p>
                  {DB.authors}
                </div>
              </li>
            );
          })}
        </DisplayBooks>

        <Pagination
          total={data.response.docs?.length}
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
