import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { LibraryList } from "../../lib/documents/LibraryList";

const FillterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${palette.gray[3]};
  display: flex;
  flex-direction: column;
`;

const FillterAllWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LocateFillter = styled.select`
  width: 120px;
  height: 2rem;
`;

const YearFillter = styled.select`
  width: 120px;
  height: 2rem;
`;

const MonthFillter = styled.select`
  width: 120px;
  height: 2rem;
`;

const BookAllWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BookAll = styled(Button)`
  width: 100%;
  height: 2rem;
  margin: 0 1px;
  background-color: ${palette.violet[9]};
`;

// 기본으로 가져온 도서관 리스트에서 '수원시립'삭제
const LocOptions = Object.keys(LibraryList).map((el) =>
  el.replace(/수원시립/g, "")
);
// console.log(LocOptions);

// 년도와 월은 개수가 적으므로 일단 하드코딩..
const YearOptions = [18, 19, 20, 21, 22];
const MonOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 도서관명이 정해지면

function BookFillter(props) {
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
        <BookAll>일반도서</BookAll>
        <BookAll>어린이도서</BookAll>
        <BookAll>주제별도서</BookAll>
      </BookAllWrap>
    </FillterContainer>
  );
}

export default BookFillter;
