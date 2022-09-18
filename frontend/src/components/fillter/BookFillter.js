import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { LibraryList } from "../../lib/documents/LibraryList";
import { useState } from "react";

const FillterContainer = styled.div`
  width: 100%;
  height: 80px;
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

// 기본으로 가져온 도서관 리스트에서 '수원시립'삭제
const LocOptions = Object.keys(LibraryList).map((el) =>
  el.replace(/수원시립/g, "")
);
// console.log(LocOptions);

// 년도와 월은 개수가 적으므로 일단 하드코딩..
const YearOptions = [18, 19, 20, 21, 22];
const MonOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GenreOptions = ["일반도서", "어린이도서", "주제별도서"];

function BookFillter(props) {
  const toggleSwitchHandler = (e) => {
    // props.setSelectedGenre(e => e.target.value)
    // e.target.value에 따라 해당 값의 index를 연동시켜보고 싶었는데 실패.
    // 하드코딩한면이 없잖아 있어서 나중에 리팩토링 필요
    GenreOptions.map((v, i) =>
      e.target.value === v ? props.setSelectedGenreIndex(i) : null
    );

    props.setSelectedGenre(e.target.value);
  };
  return (
    <FillterContainer>
      <FillterAllWrap>
        <LocateFillter
          value={props.selectedLoc}
          onChange={(e) => props.setSelectedLoc(e.target.value)}
        >
          {LocOptions.map((v) => (
            <option key={`Location${v}`} value={v}>
              {v}
            </option>
          ))}
          <option>{props.selectedLoc}</option>
        </LocateFillter>
        <YearFillter
          value={`20${props.selectedYear}`}
          onChange={(e) => props.setSelectedYear(e.target.value)}
        >
          {YearOptions.map((v) => (
            <option key={`year20${v}`} value={v}>{`20${v}년`}</option>
          ))}
        </YearFillter>
        <MonthFillter
          value={`${props.selectedMon}월`}
          onChange={(e) => props.setSelectedMon(e.target.value)}
        >
          {MonOptions.map((v) => (
            <option key={`mon${v}`} value={v}>{`${v}월`}</option>
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
    </FillterContainer>
  );
}
// const [selectedGenre, setSelectedGenre] = useState("normalBook")
export default BookFillter;
