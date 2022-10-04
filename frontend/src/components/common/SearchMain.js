import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import background from "../../lib/img/main/img_main_visual.png";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

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
    font-size: 1.2em;
    padding: 25px 0 0;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    color: white;
    &:hover {
      color: ${palette.orange[7]};
    }
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

  const linkList = [
    "/discovery/popularBook",
    "/discovery/accessionBook",
    "/discovery/libBook",
    "/redirectA",
    "/baroLoan",
    "/localSearch",
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
    <Link
      to={linkList[i]}
      className='list'
      target={i === 3 ? "_blank" : null}
      key={i}
      value={name}
    >
      <img
        src={require(`../../lib/img/main_icon/${imgSrc[i]}.png`)}
        alt={`ico_main_link_4${imgSrc[i]}`}
        width='80px'
        height='80px'
      ></img>
      <br />
      <br />
      {name}
    </Link>
  ));

  return (
    <>
      <Inner>
        <Links className='box_link'>{menuListRender}</Links>
      </Inner>
    </>
  );
}

export default SearchMain;
