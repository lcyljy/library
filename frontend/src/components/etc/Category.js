import React, { Fragment, useState } from "react";
import MainContainer from "../common/MainContainer";
import styled from "styled-components";
import { CategoryList } from "../../lib/documents/CategoryList";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const CategroyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px 2%;
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  width: 18%;
  font-size: 1.2em;
  min-height: 150px;
  max-height: 150px;
  display: inline-block;
  background-color: ${palette.gray[2]};
  &:hover {
    background-color: ${palette.orange[6]};
    color: white;
  }
`;

const MCategoryMenu = styled.ul`
  color: black;
  text-align: left;
  /* overflow: hidden; */
  /* display: flex; */
  position: relative;
  width: 183px;
  top: 0;
  left: calc(90%);
  display: block;
  min-width: 15%;
  border: 2px solid ${palette.orange[7]};
  padding: 15px 0 0 10px;
  line-height: 1.5;
  font-size: 1em;
  background-color: rgb(255, 255, 255);

  li {
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${palette.orange[7]};
    }
  }
`;

const SCategoryMenu = styled.ul`
  position: absolute;
  font-size: 0.8em;
  width: 180px;
  left: calc(90%);
  display: block;
  min-width: 15%;
  padding: 4px;
  border: 2px solid ${palette.orange[7]};
  background-color: rgb(255, 255, 255);

  li {
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${palette.orange[7]};
    }
  }
`;
// hover시 드롭다운 리스트 생성, 2중 리스트까지 나와야함.
// 해당 리스트를 출력할 수 있는 방법은?
//

const ToggleButton = styled(Button)``;

function Category() {
  const CL = CategoryList.contents.categoryList;
  // console.log(CL.map((v) => v.lCategoryDesc));
  // console.log(CL?.map((v) => v.mCategoryList));
  const CLmList = CL?.map((v) => v.mCategoryList);
  // console.log(CL[0].mCategoryList[7].sCategoryList.map((v) => v.sCategoryDesc));
  // console.log(
  //   CLmList[0].map((v) => v.sCategoryList.map((v) => v.sCategoryDesc))
  // );

  const [hover, setHover] = useState("");
  const [sHover, setsHover] = useState("");
  return (
    <MainContainer>
      <ToggleButton> test</ToggleButton>
      <CategroyContainer>
        {CL.map((v, i) => (
          <Fragment key={v.lCategoryCode}>
            <CategoryBox
              onMouseEnter={() => setHover(`${i}hover`)}
              onMouseLeave={() => setsHover("")}
            >
              <div>{v.lCategoryDesc}</div>
              {hover === `${i}hover` && (
                <MCategoryMenu>
                  {CLmList[i].map((v, i) => (
                    <Fragment key={i}>
                      <li onMouseEnter={() => setsHover(`${i}hover`)}>
                        {v.mCategoryDesc}
                      </li>
                      {sHover === `${i}hover` && v.sCategoryList.length > 0 && (
                        <SCategoryMenu>
                          {v.sCategoryList.map((v, i) => (
                            <li key={i}>{v.sCategoryDesc} </li>
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
