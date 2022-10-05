import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
import logo_suwon from "../../lib/img/logo/logo_suwon.png";
import palette from "../../lib/styles/palette";
import Auth from "../auth/Auth";
import { appAuth } from "../../firebase/fBase";
import Modal from "./Modal";
import Login from "../auth/Login";
import { useAuthContext } from "../auth/hooks/useAuthContext";

const UtilMenu = styled.div`
  z-index: 10000;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
`;

const Nav = styled.div`
  z-index: 10000;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2.6rem;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  .select-all {
    margin-right: 5px;
    font-size: 15px;
    width: 140px;
    height: 2.5rem;
    border: 2px solid ${palette.cyan[8]};
  }
  .srch {
    font-size: 15px;
    border: 2px solid ${palette.cyan[8]};
    width: 300px;
    height: 2.5rem;
  }
  .srchBtn {
    font-size: 15px;
    width: 45px;
    height: 40px;
    border: 2px solid ${palette.cyan[8]};
  }
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
  const [isLogin, setLogin] = useState(appAuth.currentUser);
  const [modalOpen, setModalOpen] = useState(false);
  const [init, setInit] = useState(false);
  const { user } = useAuthContext();
  // useEffect : 특정 컴포넌트가 렌더링 이후에 어떤 일을 해야하는지 설정할 수 있습니다.
  useEffect(() => {
    appAuth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setInit(true);
    });
  });

  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <UtilMenu>
        <WrapperUtil>
          <Link
            to='/redirectB'
            rel='noreferrer'
            target='_blank'
            className='navBtn'
          >
            도서관사업소 바로가기
          </Link>
          <div className='navBtn' onClick={!user ? openModal : null}>
            {init ? <Auth isLogin={isLogin} /> : "로딩중..."}
          </div>
          <div
            className='navBtn'
            onClick={!user ? openModal : null}
            style={{ cursor: "pointer" }}
          >
            내서재
          </div>
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
            <div></div>
          </div>
        </WrapperNav>
      </Nav>
      <Spacer />
      <Modal open={modalOpen} close={closeModal} header='회원로그인'>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
