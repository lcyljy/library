import React from "react";
import styled, { keyframes } from "styled-components";
import palette from "../../lib/styles/palette";

const modalShow = keyframes`
  0%{
    opacity: 0;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;
const modalBgShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 20000;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${modalBgShow} 0.3s;
  section {
    width: 90%;
    max-width: 450px;
    height: 400px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${modalShow} 0.3s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: #f1f1f1;
      font-weight: 700;
      button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
      }
    }
    main {
      padding: 16px;
      border-bottom: 1px solid #dee2e6;
      border-top: 1px solid #dee2e6;
    }
    footer {
      padding: 12px 16px;
      text-align: right;
      button {
        padding: 6px 12px;
        color: #fff;
        background-color: #6c757d;
        border-radius: 5px;
        font-size: 13px;
      }
    }
  }
`;
function Modal(props) {
  const { open, close, header } = props;
  console.log(open, close, header);
  return (
    <>
      {open ? (
        <ModalContainer>
          <section>
            <header>
              {header}
              <button className='close' onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className='close' onClick={close}>
                close
              </button>
            </footer>
          </section>
        </ModalContainer>
      ) : null}
    </>
  );
}

export default Modal;
