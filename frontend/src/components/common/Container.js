import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 70%;
  padding: 70px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function Container(props) {
  return <DisplayContainer>{props.children}</DisplayContainer>;
}
export default Container;
