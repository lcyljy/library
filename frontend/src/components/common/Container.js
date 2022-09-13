import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

function Container(props) {
  return <DisplayContainer>{props.children}</DisplayContainer>;
}
export default Container;
