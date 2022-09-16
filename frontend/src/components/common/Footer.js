import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
const MainFooter = styled.footer`
  width: 100%;
  height: 120px;
  background-color: ${palette.gray[3]};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 70%;
  height: 120px;
  position: relative;
  padding: 10px 20px;
`;

const FooterInfo = styled.div`
  padding: 0.8rem;
  span {
    padding: 10px;
  }
`;

const FooterAddress = styled.div`
  padding-top: 1rem;
`;
const FooterCopyRight = styled.div`
  padding-top: 0.5rem;
`;

function Footer() {
  return (
    <MainFooter>
      <FooterContainer>
        <FooterInfo>
          <span>개인정보처리방침</span> | <span>홈페이지 이용약관</span>
        </FooterInfo>
        <FooterAddress>
          [16258]경기도 수원시 팔달구 신풍로 23번길 68(신풍동)
        </FooterAddress>
        <FooterCopyRight>
          Copyright by 수원시 도서관사업소 ALL RIGHT RESERVED.
        </FooterCopyRight>
      </FooterContainer>
    </MainFooter>
  );
}

export default Footer;
