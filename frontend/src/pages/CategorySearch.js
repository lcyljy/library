import React from "react";
import Category from "../components/etc/Category";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";

function CategorySearch() {
  const title = "카테고리분류";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <Category></Category>
    </>
  );
}

export default CategorySearch;
