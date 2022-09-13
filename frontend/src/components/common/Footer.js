import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const MainFooter = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${palette.gray[4]};
`;

function Footer() {
  return <MainFooter></MainFooter>;
}

export default Footer;
