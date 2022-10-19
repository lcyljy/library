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
  width: 15%;

  min-height: 150px;
  max-height: 150px;
  display: inline-block;
  background-color: ${palette.gray[4]};
  border: 1px solid green;
`;

const MCategoryMenu = styled.ul`
  left: ${CategoryBox.width};
  /* overflow: hidden; */
  /* display: flex; */
  position: absolute;
  display: block;
  width: ${CategoryBox.width};
  min-width: 15%;
  border: 1px solid red;
`;

const SCategoryMenu = styled.ul`
  position: absolute;
  display: block;
  width: ${CategoryBox.width};
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
  console.log(CL[0].mCategoryList[7].sCategoryList.map((v) => v.sCategoryDesc));
  console.log(
    CLmList[0].map((v) => v.sCategoryList.map((v) => v.sCategoryDesc))
  );
  // let sCLmList = [];
  // for (let i = 0; i < CLmList.length; i++) {
  //   // console.log(CLmList[i].map((v) => v.mCategoryDesc));
  //   sCLmList.push(CLmList[i].map((v) => v.sCategoryList));
  //   // for (let j = 0; j < sCLmList.length; j++) {
  //   //   console.log(sCLmList[j]?.map((v) => v.sCategoryDesc));
  //   // }
  // }
  // // console.log(sCLmList);
  // for (let j = 0; j < sCLmList.length; j++) {
  //   console.log(sCLmList[j]?.map((v) => v.sCategoryDesc));
  // }

  //sCategoryDesc
  // console.log(CLmList?.map((v) => v.mCategoryDesc));

  const [hover, setHover] = useState("");
  const [sHover, setsHover] = useState("");
  return (
    <MainContainer onMouseLeave={() => setHover("")}>
      <CategroyContainer>
        {CL.map((v, i) => (
          <Fragment key={v.lCategoryCode}>
            <CategoryBox onMouseEnter={() => setHover(`${i}hover`)}>
              {v.lCategoryDesc}
              {hover === `${i}hover` && (
                <MCategoryMenu>
                  {CLmList[i].map((v, i) => (
                    <Fragment key={i}>
                      <li onMouseEnter={() => setsHover(`${i}hover`)}>
                        {v.mCategoryDesc}
                      </li>
                      {sHover === `${i}hover` && (
                        <SCategoryMenu>
                          {v.sCategoryList.map((v) => (
                            <li>{v.sCategoryDesc} </li>
                          ))}
                        </SCategoryMenu>
                      )}
                    </Fragment>
                  ))}
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
