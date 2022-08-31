import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo_suwon from "../../lib/img/logo/logo_suwon.png";
import Dropdown from "./Dropdown";
import { useState } from "react";

const UtilMenu = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Nav = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2.6rem;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const WrapperUtil = styled(Responsive)`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
  .navBtn {
    font-size: 1em;
    display: flex;
    align-items: center;
    line-height: 1.3;
    padding-right: 1.1em;
    color: #666;
    font-weight: 700;
  }
`;

const WrapperNav = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;
const NavbarHeader = styled.div`
  display: inline-block;

  img {
    float: left;
  }

  .f_left {
    color: #3f3f3f;
    font-size: 21px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    padding-left: 3px;
    float: left;
    cursor: pointer;
    span {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.5;
    }
  }
`;
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 8.6rem;
`;

const Header = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <>
      <UtilMenu>
        <WrapperUtil>
          <div className='navBtn'>도서관사업소 바로가기</div>
          <div className='navBtn'>로그인</div>
          <div className='navBtn'>내서재</div>
        </WrapperUtil>
      </UtilMenu>
      <Nav>
        <WrapperNav>
          <Link to='/' className='logo'>
            <NavbarHeader>
              <img src={logo_suwon} alt='logo_suwon' />
              <strong className='f_left'>
                <span>수원시도서관</span>
                <br />
                {` 도서검색 `}
              </strong>
            </NavbarHeader>
          </Link>
          <div className='search'>
            <select className='select-all'></select>
            <input className='srch'></input>
            <Link to='/' className='srchBtn'>
              검색
            </Link>
          </div>
          <div className='right'>
            <Button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
              메뉴
            </Button>
            <Dropdown visibility={dropdownVisibility}>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </Dropdown>
          </div>
        </WrapperNav>
      </Nav>
      <Spacer />
    </>
  );
};

export default Header;
