import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import SingleBookContainer from "../container/common/SingleBookContainer";
import { useParams } from "react-router-dom";

function SingleBookPage() {
  let { id } = useParams();
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
  const title = "상세정보";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <p>현재 페이지의 파라미터는 {id}입니다</p>
      <SingleBookContainer id={id}></SingleBookContainer>
    </>
  );
}

export default SingleBookPage;
