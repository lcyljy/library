import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
const DisplayContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  padding-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

function MainContainer(props) {
  return (
    <Responsive>
      <DisplayContainer>
        <ContentWrapper>{props.children}</ContentWrapper>
      </DisplayContainer>
    </Responsive>
  );
}
export default MainContainer;
