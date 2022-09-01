import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import Dropdown from "../common/Dropdown";

const MenuBarContainer = styled(Responsive)`
  position: fixed;
  width: 100%;
  height: 240px;
  background: ${palette.violet[8]};
`;
function MenuBar() {
  return (
    <>
      <Dropdown></Dropdown>
      <MenuBarContainer />;
    </>
  );
}

export default MenuBar;
