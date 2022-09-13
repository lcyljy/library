import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import MenuImg from "../../lib/img/nav_icon/bg_gnb_01.png";
import { Link } from "react-router-dom";

const MainMenuContainer = styled(Button)`
  z-index: 10001;
  background: white;
  color: black;
  position: fixed;
  right: 30px;
  top: 70px;
  width: 80px;
  height: 50px;
`;

const MenuBarContainer = styled(Responsive)`
  z-index: 10001;
  position: fixed;
  width: 100%;
  height: 266px;
  background: ${palette.gray[4]};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 266px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${palette.violet[9]} 0,
    ${palette.violet[9]} 50%,
    ${palette.gray[4]},
    ${palette.gray[4]}
  );
`;

const MainMenuImg = styled.div`
  display: inline-block;
  width: 20%;
  height: 266px;
  background-color: ${palette.violet[9]};
  background-image: url(${MenuImg});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  color: white;
  font-size: 30px;
  line-height: 122px;
`;

const WrapMenu = styled.div`
  padding: 37px 40px;
  display: flex;
  position: inherit;
  width: 60%;
  height: 266px;
  background-color: ${palette.gray[4]};
`;

const Group = styled.div`
  align-items: center;
  justify-content: center;
  height: 180px;
  margin-left: 30px;
  padding-left: 30px;
  padding-bottom: 12px;
  border-left: 1px solid ${palette.gray[5]};
`;

const GroupFirst = styled(Group)`
  margin-left: 0;
  border-left: 1px solid ${palette.gray[4]};
`;

const GroupMenu = styled(Link)`
  display: block;
  margin-bottom: 7px;
  font-weight: 700;
  color: ${palette.gray[9]};
  font-size: 17px;
`;

const GroupSideMenu = styled(Link)`
  display: block;
  padding-left: 10px;
  margin-bottom: 7px;
  font-size: 15px;
  color: ${palette.gray[9]};
`;
function MenuBar() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <>
      <MainMenuContainer
        onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
      >
        메뉴
      </MainMenuContainer>
      <Dropdown visibility={dropdownVisibility}>
        <MenuBarContainer>
          <Container>
            <MainMenuImg>메뉴</MainMenuImg>
            <WrapMenu>
              <GroupFirst>
                <GroupMenu to='/'>자료탐색</GroupMenu>
                <br />
                <GroupSideMenu to='/'>- 카테고리분류</GroupSideMenu>
                <br />
                <GroupSideMenu to='/'>- 한국십진분류</GroupSideMenu>
              </GroupFirst>
              <Group>
                <GroupMenu to='/'>인기도서</GroupMenu>
                <br />
                <GroupMenu to='/'>신착도서</GroupMenu>
                <br />
                <GroupMenu to='/'>추천도서</GroupMenu>
                <br />
                <GroupMenu to='/'>전자도서관</GroupMenu>
                <br />
              </Group>
              <Group>
                <GroupMenu to='/'>희망도서신청</GroupMenu>
                <br />
                <GroupMenu to='/'>지역도서관 통합검색</GroupMenu>
                <br />
                <GroupMenu to='/'>이용안내</GroupMenu>
                <br />
              </Group>
            </WrapMenu>
          </Container>
        </MenuBarContainer>
      </Dropdown>
    </>
  );
}

export default MenuBar;
