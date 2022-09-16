import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 70%;
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
    <DisplayContainer>
      <ContentWrapper>{props.children}</ContentWrapper>
    </DisplayContainer>
  );
}
export default MainContainer;
