import React, { Fragment, useState } from "react";
import MainContainer from "../common/MainContainer";
import styled from "styled-components";
import { KDC } from "../../lib/documents/KDC";
import palette from "../../lib/styles/palette";
import { ToggleButton, ToggleContainer } from "./Category";

const KDCContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: rgb(255, 255, 255);
`;

const TopicWrap = styled.div`
  display: flex;
  width: 100%;
`;

const TopicBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  line-height: 1.5;
  width: calc((100% - 54px) / 10);
  height: 118px;
  margin: 0 6px 0 0;
  cursor: pointer;
  background-color: ${palette.gray[4]};
  &:hover {
    background-color: ${palette.gray[6]};
    color: white;
  }
  &.active {
    background-color: ${palette.orange[7]};
    color: white;
  }
`;

const TopicDetailWrap = styled.div`
  display: flex;
  width: 100%;
`;

const TopicDetailBox = styled.div`
  padding: 10px 0;
  line-height: 15px;
  font-size: 1em;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  li {
    display: block;
    font-size: 1em;
    padding: 10px 0;
    margin: 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
  li:first-child {
    font-size: 1.2em;
    border-top: 2px solid ${palette.gray[6]};
    border-bottom: 2px solid ${palette.gray[6]};
  }
`;

function KdcSearch() {
  const [topic, setTopic] = useState("000");
  const KDCList = KDC.contents.categoryList;
  console.log(KDCList);
  console.log(KDCList.map((v) => v.mCategoryList));
  console.log(topic);
  console.log();
  const topicKDC = KDCList.map((v) => v.mCategoryList)[Number(topic.charAt())];
  console.log(topicKDC);
  console.log(topicKDC.map((v) => v.sCategoryList)[0]);
  console.log(topicKDC.length);
  const sTopicKDC = topicKDC.map((v) => v.sCategoryList);
  console.log(sTopicKDC);
  return (
    <MainContainer>
      <ToggleContainer>
        <ToggleButton to='/categorySearch'>카테고리분류</ToggleButton>
        <ToggleButton to='kdcSearch' className='active'>
          한국십진분류
        </ToggleButton>
      </ToggleContainer>
      <KDCContainer>
        <TopicWrap>
          {KDCList.map((v, i) => (
            <TopicBox
              key={i}
              onClick={() => {
                setTopic(v.lCategoryCode);
              }}
              className={topic === v.lCategoryCode ? "active" : ""}
            >
              <ul>
                <li>{v.lCategoryCode}</li> <li>{v.lCategoryDesc}</li>
              </ul>
            </TopicBox>
          ))}
        </TopicWrap>
        <TopicDetailWrap>
          <TopicDetailBox>
            {topicKDC.map((v, i) => (
              <ul key={i}>
                <li>
                  {v.mCategoryCode} {v.mCategoryDesc}
                </li>
                {sTopicKDC[i].map((v) => (
                  <li key={v.sCategoryCode}>
                    {v.sCategoryCode} {v.sCategoryDesc}
                  </li>
                ))}
              </ul>
            ))}
          </TopicDetailBox>
        </TopicDetailWrap>
      </KDCContainer>
    </MainContainer>
  );
}

export default KdcSearch;
