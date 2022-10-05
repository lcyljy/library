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
    width: 80%;
    /* max-width: 450px; */
    height: 300px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${modalShow} 0.3s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px;
      background-color: ${palette.orange[5]};
      font-size: 20px;
      font-weight: 700;
      color: white;
      text-align: center;
      button {
        padding: 0;
        position: absolute;
        top: 5px;
        right: 15px;
        width: 30px;
        font-size: 2em;
        text-align: center;
        color: white;
        border: 0;
        background-color: transparent;
      }
    }
    main {
      padding: 16px;
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
          </section>
        </ModalContainer>
      ) : null}
    </>
  );
}

export default Modal;
