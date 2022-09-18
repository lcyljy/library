import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { LibraryList } from "../../lib/documents/LibraryList";
import { KDC } from "../../lib/documents/KDC";
const FillterContainer = styled.div`
  width: 100%;
  background-color: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
`;

const FillterAllWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.8rem;
`;

const LocateFillter = styled.select`
  font-size: 1.2em;
  width: 140px;
  height: 2.2rem;
  padding: 8px 5px;
`;

const YearFillter = styled.select`
  font-size: 1.2em;
  width: 140px;
  height: 2.2rem;
  padding: 8px 5px;
`;

const MonthFillter = styled.select`
  font-size: 1.2em;
  width: 140px;
  height: 2.2rem;
  padding: 8px 5px;
`;

const BookAllWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BookAll = styled(Button)`
  width: 100%;
  font-size: 1.4rem;
  height: 3.5rem;
  margin: 0 1px;
  background-color: ${palette.gray[5]};
  &.active {
    background-color: ${palette.violet[8]};
  }
  &:hover {
    background-color: ${palette.gray[7]};
  }
`;

const SubjectBook = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 3.5rem;
  background-color: ${palette.gray[2]};
  padding: 0.8rem;
`;
const SubjectBookSelect = styled.select`
  font-size: 1.2em;
  width: 180px;
  height: 2.2rem;
  padding: 8px 5px;
`;
// 기본으로 가져온 도서관 리스트에서 '수원시립'삭제
const LocOptions = Object.keys(LibraryList).map((el) =>
  el.replace(/수원시립/g, "")
);
// console.log(LocOptions);

// 년도와 월은 개수가 적으므로 일단 하드코딩..
const YearOptions = [18, 19, 20, 21, 22];
const MonOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GenreOptions = ["일반도서", "어린이도서", "주제별도서"];

const KDCList = KDC.contents.categoryList;
console.log(KDCList);

function BookFillter(props) {
  const toggleSwitchHandler = (e) => {
    // props.setSelectedGenre(e => e.target.value)
    GenreOptions.map((v, i) =>
      e.target.value === v ? props.setSelectedGenreIndex(i) : null
    );

    props.setSelectedGenre(e.target.value);
  };
  return (
    <FillterContainer>
      <FillterAllWrap>
        <LocateFillter
          defaultValue={props.selectedLoc}
          onChange={(e) => props.setSelectedLoc(e.target.value)}
        >
          <option value='전체도서관' key='all'>
            전체도서관
          </option>
          {LocOptions.map((v) => (
            <option key={`Location${v}`} value={v}>
              {v}
            </option>
          ))}
        </LocateFillter>

        <YearFillter
          defaultValue={props.selectedYear}
          onChange={(e) => props.setSelectedYear(e.target.value)}
        >
          {props.selectedYear === "2022년" ? (
            <option key='2022년' value='2022년'>
              2022년
            </option>
          ) : null}
          {YearOptions.map((v) => (
            <option key={`year20${v}`} value={`20${v}년`}>
              20{v}년
            </option>
          ))}
          <option> 2022년</option>
        </YearFillter>
        <MonthFillter
          defaultValue={props.selectedMon}
          onChange={(e) => props.setSelectedMon(e.target.value)}
        >
          {props.selectedMon === "9월" ? (
            <option key={`mon9월`} value='9월'>
              9월
            </option>
          ) : null}
          {MonOptions?.map((v, i) => (
            <option key={`mon${i}`} value={`${v}월`}>
              {v}월
            </option>
          ))}
        </MonthFillter>
      </FillterAllWrap>
      <BookAllWrap>
        {GenreOptions.map((v, i) => (
          <BookAll
            onClick={toggleSwitchHandler}
            key={i}
            value={v}
            className={`${v} ${props.selectedGenreIndex === i ? "active" : ""}`}
          >
            {v}
          </BookAll>
        ))}
      </BookAllWrap>
      {props.selectedGenre === GenreOptions[2] ? (
        <SubjectBook>
          <SubjectBookSelect
            defaultValue={props.KDC !== "전체" ? props.KDC : "전체"}
            onChange={(e) => props.setKDC(e.target.value)}
          >
            <option value='전체' key='all'>
              전체
            </option>
            {KDCList?.map((v, i) => (
              <option key={i}>{v.keyword}</option>
            ))}
          </SubjectBookSelect>
        </SubjectBook>
      ) : null}
    </FillterContainer>
  );
}

export default BookFillter;
