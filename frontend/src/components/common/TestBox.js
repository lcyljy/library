import React from "react";
import styled from "styled-components";

const TestBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 780px;
  min-width: 780px;
  background-color: aliceblue;
`;

function TestBox() {
  return <TestBoxContainer></TestBoxContainer>;
}

export default TestBox;
