import { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

// import XMLParser from "react-xml-parser";

const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;

const DisplayBooks = styled.ul`
  border: 1px solid green;
  display: flex;
  width: 200px;
  height: 400px;
  background: ${palette.gray[2]};
  li {
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
<li className='bookname'>ehtjaud: {DB.bookname}</li>
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

const BookImage = styled.div`
  display: flex;
  width: 180px;
  height: 240px;
  background-image: url(${(props) => props.bookImageURL});
  background-size: contain;
  background-repeat: no-repeat;
`;

function BookRender() {
  const App = () => {
    const [data, setData] = useState({ response: {} });

    useEffect(() => {
      (async () => {
        const res = await fetch(
          `http://data4library.kr/api/loanItemSrch?authKey=${API_KEY}&startDt=2022-01-01&endDt=2022-09-07&region=31&dtl_region=31012;31014;31011;31013&format=json`
        );
        res
          .json()
          .then((data) => setData(data))
          .catch((error) => console.log("error", error));
      })();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <DisplayBooks>
          {data.response.docs?.map((v) => {
            const DB = v.doc;
            return (
              <>
                <li key={DB.no}>
                  <h2>{DB.no}</h2>
                  <BookImage bookImageURL={DB.bookImageURL}></BookImage>

                  <div>
                    <p>
                      도서명: {DB.bookname} = {DB.vol}
                    </p>
                    {DB.authors}
                  </div>
                </li>
              </>
            );
          })}
        </DisplayBooks>
      </>
    );
  };

  return <App></App>;
}

export default BookRender;
