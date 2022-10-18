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

  min-height: 150px;
  background-color: ${palette.gray[4]};
  border: 1px solid green;
`;

const MCategoryMenu = styled.div`
  display: none;
  position: relative;
  top: 0;
  width: 100%;
  left: 110%;
  min-width: 15%;
  border: 1px solid red;
  .listhover {
    display: flex;
  }
`;
// hover시 드롭다운 리스트 생성, 2중 리스트까지 나와야함.
// 해당 리스트를 출력할 수 있는 방법은?
//

function Category() {
  const CL = CategoryList.contents.categoryList;
  // console.log(CL.map((v) => v.lCategoryDesc));
  // console.log(CL?.map((v) => v.mCategoryList));
  const test = CL?.map((v) => v.mCategoryList);
  // for (let i = 0; i < test.length; i++) {
  //   console.log(test[i].map((v) => v.mCategoryDesc));
  // }
  console.log(test?.map((v) => v.mCategoryDesc));

  const [hover, setHover] = useState(false);
  return (
    <MainContainer>
      <CategroyContainer>
        {CL.map((v, i) => (
          <Fragment key={v.lCategoryCode}>
            <CategoryBox
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {v.lCategoryDesc}
              <MCategoryMenu className={`list${i} ${hover ? "hover" : ""}`}>
                <ul>
                  {test[i].map((v) => (
                    <li key={v.mCategoryCode}>{v.mCategoryDesc}</li>
                  ))}
                </ul>
              </MCategoryMenu>
            </CategoryBox>
          </Fragment>
        ))}
      </CategroyContainer>
    </MainContainer>
  );
}

export default Category;
