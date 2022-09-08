import React from "react";
import Header from "../../components/common/Header";
import MenuBar from "../../components/menu/MenuBar";
import Test from "./Test";
function HeaderNavContainer() {
  return (
    <>
      <Header></Header>
      <MenuBar></MenuBar>
      <Test></Test>
    </>
  );
}

export default HeaderNavContainer;
