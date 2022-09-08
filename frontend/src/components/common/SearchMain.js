import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import background from "../../lib/img/main/img_main_visual.png";

const Inner = styled(Responsive)`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 160px;
  .box_link {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 160px;
  }
`;

const Links = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  .list {
    padding: 25px 0 0;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    color: white;
  }
`;

function SearchMain() {
  const menuList = [
    "인기도서",
    "신착도서",
    "추천도서",
    "전자도서관",
    "희망도서 신청",
    "지역도서관 통합검색",
  ];

  const imgSrc = [
    "ico_main_link_03",
    "ico_main_link_04",
    "ico_main_link_05",
    "ico_main_link_13",
    "ico_main_link_12",
    "ico_main_link_11",
  ];
  const menuListRender = menuList.map((name, i) => (
    <div className='list' key={i}>
      <img
        src={require(`../../lib/img/main_icon/${imgSrc[i]}.png`)}
        alt={`ico_main_link_4${imgSrc[i]}`}
        width='80px'
        height='80px'
      ></img>
      <br />
      <br />
      {name}
    </div>
  ));

  return (
    <>
      <Inner>
        <div className='box_link'>
          <Links>{menuListRender}</Links>
        </div>
      </Inner>
    </>
  );
}

export default SearchMain;
