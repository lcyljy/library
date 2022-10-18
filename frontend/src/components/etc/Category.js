import React, { Fragment, useState } from "react";
import MainContainer from "../common/MainContainer";

import styled from "styled-components";
import { CategoryList } from "../../lib/documents/CategoryList";
import palette from "../../lib/styles/palette";

const CategroyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px 2%;
  width: 100%;
  height: auto;
  background-color: rgba(255, 222, 120, 0.6);
`;

const CategoryBox = styled.div`
  min-width: 15%;
  max-width: 15%;
  min-height: 150px;
  max-height: 150px;
  background-color: ${palette.gray[4]};
  border: 1px solid green;
`;

const MCategoryMenu = styled.div`
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;
  left: calc(100% + 10px);
  min-width: 15%;
  border: 1px solid red;
`;
// hover시 드롭다운 리스트 생성, 2중 리스트까지 나와야함.
// 해당 리스트를 출력할 수 있는 방법은?
//

function Category() {
  const CL = CategoryList.contents.categoryList;
  // console.log(CL.map((v) => v.lCategoryDesc));
  // console.log(CL?.map((v) => v.mCategoryList));
  const CLmList = CL?.map((v) => v.mCategoryList);
  let sCLmList = [];
  for (let i = 0; i < CLmList.length; i++) {
    // console.log(CLmList[i].map((v) => v.mCategoryDesc));
    sCLmList.push(CLmList[i].map((v) => v.sCategoryList));
    // for (let j = 0; j < sCLmList.length; j++) {
    //   console.log(sCLmList[j]?.map((v) => v.sCategoryDesc));
    // }
  }
  // console.log(sCLmList);
  for (let j = 0; j < sCLmList.length; j++) {
    console.log(sCLmList[j]?.map((v) => v.sCategoryDesc));
  }

  //sCategoryDesc
  // console.log(CLmList?.map((v) => v.mCategoryDesc));

  const [hover, setHover] = useState("");
  return (
    <MainContainer onMouseLeave={() => setHover("")}>
      <CategroyContainer>
        {CL.map((v, i) => (
          <Fragment key={v.lCategoryCode}>
            <CategoryBox onMouseEnter={() => setHover(`${i}hover`)}>
              {v.lCategoryDesc}
              {hover === `${i}hover` && (
                <MCategoryMenu>
                  <ul>
                    {CLmList[i].map((v, i) => (
                      <Fragment key={v.mCategoryCode}>
                        <li>{v.mCategoryDesc}</li>
                        <MCategoryMenu>
                          <ul>
                            {sCLmList[i]?.map((v) => (
                              <li>{v.sCategoryDesc}</li>
                            ))}
                          </ul>
                        </MCategoryMenu>
                      </Fragment>
                    ))}
                  </ul>
                </MCategoryMenu>
              )}
            </CategoryBox>
          </Fragment>
        ))}
      </CategroyContainer>
    </MainContainer>
  );
}

export default Category;
