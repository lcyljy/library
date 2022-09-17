import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import BeatLoader from "react-spinners/BeatLoader";

const APILoader = styled.div`
  position: fixed;
  border-radius: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: ${palette.gray[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10002;
`;

const LoadingText = styled.div`
  font-size: 1.3rem;
  text-align: center;
`;
function Loader() {
  // console.log("loading");
  return (
    <APILoader>
      <LoadingText>
        <BeatLoader size={25} />책 정보를 불러오고 있습니다.
      </LoadingText>
    </APILoader>
  );
}

export default Loader;
