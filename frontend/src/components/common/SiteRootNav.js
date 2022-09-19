import React from "react";
import styled from "styled-components";
import bg_sub_title from "../../lib/img/main/bg_sub_title.jpg";

const TitleSub = styled.div`
  width: 100%;
  background: url(${bg_sub_title});
  background-size: 100%;
  margin-bottom: 20px;
  height: 85px;
  line-height: 85px;
  margin: 0 auto;
  h2 {
    width: 80%;
    color: white;
    font-size: 28px;
    line-height: 85px;
    margin: 0 auto;
  }
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: inline-block;
`;
function SiteRootNav(props) {
  return (
    <TitleSub>
      <Inner>
        <h2> {props.navTitle} </h2>
        <ul>
          <li></li>
        </ul>
      </Inner>
    </TitleSub>
  );
}

export default SiteRootNav;
