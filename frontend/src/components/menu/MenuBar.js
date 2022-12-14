import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import MenuImg from "../../lib/img/nav_icon/bg_gnb_01.png";
import { Link } from "react-router-dom";
import ExternalPage from "../common/ExternalPage";

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
        ??????
      </MainMenuContainer>
      <Dropdown visibility={dropdownVisibility}>
        <MenuBarContainer>
          <Container>
            <MainMenuImg>??????</MainMenuImg>
            <WrapMenu>
              <GroupFirst>
                <GroupMenu to='/'>????????????</GroupMenu>
                <br />
                <GroupSideMenu to='/categorySearch'>
                  - ??????????????????
                </GroupSideMenu>
                <br />
                <GroupSideMenu to='/kdcSearch'>- ??????????????????</GroupSideMenu>
              </GroupFirst>
              <Group>
                <GroupMenu to='/discovery/popularBook'>????????????</GroupMenu>
                <br />
                <GroupMenu to='/discovery/accessionBook'>????????????</GroupMenu>
                <br />
                <GroupMenu to='/discovery/libBook'>????????????</GroupMenu>
                <br />
                <ExternalPage
                  href='https://ebook.suwonlib.go.kr/'
                  rel='noreferrer'
                  target='_blank'
                  value='???????????????'
                ></ExternalPage>
                <br />
              </Group>
              <Group>
                <GroupMenu to='/baroLoan'>??????????????????</GroupMenu>
                <br />
                <GroupMenu to='/localSearch'>??????????????? ????????????</GroupMenu>
                <br />
                <ExternalPage
                  href='http://www.suwonlib.go.kr:8080/download/AlpasQ_Manual.pdf'
                  rel='noreferrer'
                  target='_blank'
                  value='????????????'
                ></ExternalPage>
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
